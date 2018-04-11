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
  rcNavigateAppByName
} from './helper/app.helper'
import { generateIFrameID } from './helper/dom.utils'

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
    customProps: object = {}
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
  }

  registerApplicationByLink(
    appName: string,
    link?: string,
    activeWhen?: {},
    customProps: object = {}
  ) {
    this.checkActiveWhen(activeWhen)

    let appConfig = {
      name: appName,
      scripts: [],
      selector: `app-${appName}`,
      baseScriptUrl: link,
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

  start() {
    this.started = true
    window.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function(
      event: CustomEvent
    ) {
      if (event.detail) {
        navigateAppByName(event.detail)
      }
    })

    return this.reRouter()
  }

  rcStart(location?: any) {
    this.started = true
    window.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function(
      event: CustomEvent
    ) {
      if (event.detail) {
        rcNavigateAppByName(event.detail)
      }
    })

    return this.rcReRouter(location)
  }

  /**
   * @desc
   * eventArguments is used for ng2
   * 在react中，监听的不是router event，而是history的改变,
   * 当history改变时，会调用rerouter方法，并通知platform执行navigate方法
   */
  reRouter(eventArguments?: any) {
    const that = this
    async function performAppChanges() {
      customEvent(MOOA_EVENT.ROUTING_BEFORE)
      const unloadPromises = StatusHelper.getAppsToUnload().map(toUnloadPromise)

      const unmountUnloadPromises = StatusHelper.getAppsToUnmount(apps)
        .map(toUnmountPromise)
        .map((unmountPromise: any) => unmountPromise.then(toUnloadPromise))

      const allUnmountPromises = unmountUnloadPromises.concat(unloadPromises)

      const unmountAllPromise = Promise.all(allUnmountPromises)

      const appsToLoad = StatusHelper.getAppsToLoad(apps)
      const loadThenMountPromises = appsToLoad.map((app: any) => {
        return toLoadPromise(app)
          .then(toBootstrapPromise)
          .then(async function(toMountApp) {
            await unmountAllPromise
            return toMountPromise(toMountApp)
          })
      })

      const mountPromises = StatusHelper.getAppsToMount(apps)
        .filter((appToMount: any) => appsToLoad.indexOf(appToMount) < 0)
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
      if (eventArguments) {
        let activeApp = StatusHelper.getActiveApps(apps)[0]
        if (activeApp && activeApp['appConfig']) {
          that.createRoutingChangeEvent(eventArguments, activeApp)
        }
      }
    }

    return performAppChanges()
  }

  rcReRouter(location?: any) {
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
        .filter((appToMount: any) => appsToLoad.indexOf(appToMount) < 0)
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
      if (location) {
        let activeApp = StatusHelper.getActiveApps(apps)[0]
        if (activeApp && activeApp['appConfig']) {
          that.rcCreateRoutingChangeEvent(location, activeApp)
        }
      }
    }

    return performAppChanges()
  }

  rcCreateRoutingChangeEvent(location: any, activeApp: any) {
    let eventArgs = {
      path: location.path,
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
      }
    } else {
      customEvent(MOOA_EVENT.ROUTING_CHANGE, eventArgs)
    }
  }

  createRoutingChangeEvent(eventArguments: any, activeApp: any) {
    let eventArgs = {
      url: eventArguments.url,
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
      }
    } else {
      customEvent(MOOA_EVENT.ROUTING_CHANGE, eventArgs)
    }
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
