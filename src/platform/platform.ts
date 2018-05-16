import { customEvent } from '../helper/app.helper'
import { MOOA_EVENT } from '../model/constants'
import { mooaLog } from '../helper/app.helper'

declare const window: any
window.mooa = window.mooa || {}

export class MooaPlatform {
  name: string = ''
  router: any
  history: any

  mount(name: string, history?: any) {
    this.name = name
    this.history = history

    return new Promise((resolve, reject) => {
      if (this.isSingleSpaApp()) {
        history.listen((location: any) => {
          this.notifyParent(location)
        })

        this.handleRouterUpdate(history, name)

        customEvent(MOOA_EVENT.CHILD_MOUNT, { name: this.name })
        window.mooa[this.name] = window.mooa[this.name] || {}
        window.mooa[this.name].mount = (props: any) => {
          resolve({ props, attachUnmount: this.unmount.bind(this) })
        }
      } else {
        resolve({ props: {}, attachUnmount: this.unmount.bind(this) })
      }
    })
  }

  // mount(name: string, router?: any) {
  //   this.name = name
  //   this.router = router
  //   return new Promise((resolve, reject) => {
  //     if (this.isSingleSpaApp()) {
  //       customEvent(MOOA_EVENT.CHILD_MOUNT, { name: this.name })
  //       window.mooa[this.name] = window.mooa[this.name] || {}
  //       window.mooa[this.name].mount = (props: any) => {
  //         resolve({ props, attachUnmount: this.unmount.bind(this) })
  //       }
  //     } else {
  //       resolve({ props: {}, attachUnmount: this.unmount.bind(this) })
  //     }
  //   })
  // }

  unmount(module: any) {
    if (this.isSingleSpaApp()) {
      customEvent(MOOA_EVENT.CHILD_UNMOUNT, { name: this.name })
      window.mooa[this.name].unmount = () => {
        if (module) {
          module.destroy()
          if (this.router) {
            module.injector.get(this.router).dispose()
          }
        }
      }
    }
  }

  /**
   * @deprecated 参数location被废弃
   */
  appBase(location?: any): string {
    if (this.isSingleSpaApp()) {
      const parentWindow = window.parent || {}
      const mooaItem = parentWindow.mooa || {}
      const parentRouter = (mooaItem.option || {}).urlPrefix
      const appName = this.name
      // location = location || window.location
      // const pathNames = location.pathname.split('/')
      if (!parentRouter || !appName) {
        // if (pathNames.length < 2) {
        return '/'
      }
      // const parentRouter = pathNames[1]
      // const appName = pathNames[2]
      const locationPath = '/' + parentRouter + '/' + appName
      window.mooa.basePath = locationPath
      return locationPath
    } else {
      return '/'
    }
  }

  navigateTo(opts: any) {
    customEvent(MOOA_EVENT.ROUTING_NAVIGATE, opts)
  }

  notifyParent(location?: any) {
    if (this.isSingleSpaApp()) {
      if (window.parent) {
        window.parent.dispatchEvent(
          new CustomEvent(MOOA_EVENT.CHILD_ROUTING, { detail: location })
        )
      }
    }
  }

  handleRouterUpdate(history: any, appName: string) {
    window.addEventListener(MOOA_EVENT.ROUTING_CHANGE, (event: CustomEvent) => {
      if (event.detail.app.name === appName) {
        history.push(event.detail.path)
      }
    })
  }

  // handleRouterUpdate(router: any, appName: string) {
  //   window.addEventListener(MOOA_EVENT.ROUTING_CHANGE, (event: CustomEvent) => {
  //     if (event.detail.app.name === appName) {
  //       let urlPrefix = 'app'
  //       if (urlPrefix) {
  //         urlPrefix = `/${window.mooa.option.urlPrefix}/`
  //       }
  //       router.navigate([event.detail.url.replace(urlPrefix + appName, '')])
  //     }
  //   })
  // }

  private isSingleSpaApp(): boolean {
    return window.mooa.isSingleSpa
  }
}

export default MooaPlatform
