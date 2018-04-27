import { MOOA_EVENT, StatusEnum } from './model/constants'
import { toLoadPromise } from './lifecycles/load'
import { toBootstrapPromise } from './lifecycles/bootstrap'
import { toMountPromise } from './lifecycles/mount'
import StatusHelper from './helper/status.helper'
import { toUnloadPromise } from './lifecycles/unload'
import { toUnmountPromise } from './lifecycles/unmount'
import { MooaOption } from './model/MooaOption'
import MooaRouter from './router'
import { MooaPlatform } from './platform/platform'
import {
  customEvent,
  navigateAppByName,
  getHistoryLocation
} from './helper/app.helper'
import { generateIFrameID } from './helper/dom.utils'

export { default as MooaProvider } from './component/provider'
export { default as MooaAppContainer } from './component/app-container'

declare const window: any

const apps: any[] = []
window.mooa = window.mooa || {}

class Mooa {
  started = false
  private option: MooaOption

  constructor(option: MooaOption) {
    window.mooa.instance = this

    if (option) {
      window.mooa.option = option
      window.mooa.debug = option.debug
    }

    if (localStorage.getItem('mooa.debug') === 'true') {
      window.mooa.debug = true
    }

    this.option = option
  }

  registerApplication(
    appName: string,
    appConfig?: any,
    activeWhen?: {},
    customProps: Object = {}
  ) {
    this.checkActiveWhen(activeWhen)

    appConfig.includeZone = true
    appConfig = this.mergeAppConfigOption(appConfig)

    if (this.option.urlPrefix) {
      appConfig.prefix = this.option.urlPrefix + '/' + appConfig.prefix
    }

    const appOpt = {
      name: appName,
      appConfig,
      activeWhen,
      mode: '',
      switchMode: '',
      status: StatusEnum.NOT_LOADED,
      customProps: customProps
    }

    if (this.option.mode) {
      appOpt.mode = this.option.mode
    }

    if (appConfig && appConfig.mode) {
      appOpt.mode = appConfig.mode
    }

    if (this.option.switchMode) {
      appOpt.switchMode = this.option.switchMode
    }

    apps.push(appOpt)
    window.apps = apps
    window.originApps = apps
  }

  registerApplicationByLink(
    appName: string,
    link?: string,
    activeWhen?: {},
    customProps: Object = {}
  ) {
    this.checkActiveWhen(activeWhen)

    let appConfig = {
      name: appName,
      scripts: [],
      selector: `app-${appName}`,
      // baseScriptUrl: link,
      styles: [],
      parentElement: '',
      prefix: '',
      preload: false,
      includeZone: true
    }

    appConfig = this.mergeAppConfigOption(appConfig)

    if (this.option.urlPrefix) {
      appConfig.prefix = this.option.urlPrefix + '/' + appConfig.name
    }

    const appOpt = {
      name: appName,
      appConfig: appConfig,
      activeWhen,
      sourceType: 'link',
      mode: '',
      switchMode: '',
      status: StatusEnum.NOT_LOADED,
      customProps: customProps
    }

    if (this.option.mode) {
      appOpt.mode = this.option.mode
    }

    if (this.option.switchMode) {
      appOpt.switchMode = this.option.switchMode
    }

    apps.push(appOpt)
    window.apps = apps
  }

  start(history?: any) {
    this.started = true

    window.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function(
      event: CustomEvent
    ) {
      if (event.detail) {
        navigateAppByName(event.detail)
      }
    })

    return this.reRouter(history)
  }

  reRouter(history?: any) {
    const location = getHistoryLocation(history)
    const that = this

    async function performAppChanges() {
      customEvent(MOOA_EVENT.ROUTING_BEFORE)
      const unloadPromises = StatusHelper.getAppsToUnload().map(toUnloadPromise)

      const unmountUnloadPromises = StatusHelper.getAppsToUnmount(
        apps,
        location
      )
        .map(toUnmountPromise)
        .map((unmountPromise: any) => unmountPromise.then(toUnloadPromise))

      const allUnmountPromises = unmountUnloadPromises.concat(unloadPromises)

      const unmountAllPromise = Promise.all(allUnmountPromises)

      const appsToLoad = StatusHelper.getAppsToLoad(apps, location)
      const loadThenMountPromises = appsToLoad.map((app: any) => {
        return toLoadPromise(app)
          .then(toBootstrapPromise)
          .then(async function(toMountApp) {
            await unmountAllPromise
            return toMountPromise(toMountApp)
          })
      })

      const mountPromises = StatusHelper.getAppsToMount(apps, location)
        // .filter((appToMount: any) => appsToLoad.indexOf(appToMount) < 0)
        .map(async function(appToMount: any) {
          await toBootstrapPromise(appToMount)
          await unmountAllPromise
          return toMountPromise(appToMount)
        })

      try {
        await unmountAllPromise
      } catch (err) {
        throw err
      }

      await Promise.all(loadThenMountPromises.concat(mountPromises))
      if (history) {
        let activeApp = StatusHelper.getActiveApps(apps)[0]
        if (activeApp && activeApp['appConfig']) {
          that.createRoutingChangeEvent(history, activeApp)
        }
      }
    }

    return performAppChanges()
  }

  unmount() {
    for (let i = 0; i < apps.length; i++) {
      apps[i] = {
        ...apps[i],
        status: 'NOT_LOADED'
      }
    }
  }

  createRoutingChangeEvent(history: any, activeApp: any) {
    const location = getHistoryLocation(history)

    let eventArgs = {
      path: location.pathname,
      app: activeApp['appConfig']
    }

    if (activeApp.mode === 'iframe') {
      const iframeId = generateIFrameID(activeApp.name)
      let iframeEl: any = document.getElementById(iframeId)
      if (iframeEl && iframeEl.contentWindow) {
        iframeEl.contentWindow.mooa.option = window.mooa.option
        iframeEl.contentWindow.dispatchEvent(
          new CustomEvent(MOOA_EVENT.ROUTING_CHANGE, { detail: eventArgs })
        )

        window.addEventListener(MOOA_EVENT.CHILD_ROUTING, function(
          event: CustomEvent
        ) {
          const location = getHistoryLocation(history)

          if (event.detail && event.detail.pathname !== location.pathname) {
            history.push(event.detail.pathname)
          }
        })
      }
    }
    // } else {
    //   customEvent(MOOA_EVENT.ROUTING_CHANGE, eventArgs)
    // }
  }

  private mergeAppConfigOption(appConfig: any) {
    if (this.option.parentElement) {
      appConfig.parentElement = this.option.parentElement
    }

    if (this.option.preload) {
      appConfig.preload = true
    }

    if (this.option.includeZone === false) {
      appConfig.includeZone = false
    }

    return appConfig
  }

  private checkActiveWhen(activeWhen: any) {
    if (!activeWhen) {
      throw new Error(`Lost Loader`)
    }

    if (typeof activeWhen !== 'function') {
      throw new Error(`The activeWhen argument must be a function`)
    }
  }
}

export default Mooa

export const mooaRouter = new MooaRouter()
export const mooaPlatform = new MooaPlatform()
