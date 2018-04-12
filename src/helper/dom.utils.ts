import { isString } from 'lodash'

import { hashCode, navigateAppByName } from './app.helper'
import { MooaApp } from '../model/IAppOption'
import { MOOA_EVENT } from '../model/constants'

declare const window: any
declare const Element: any
declare const document: Document

export function createApplicationContainer(mooaApp: MooaApp) {
  const opts = mooaApp.appConfig

  let el: any
  if (isString(opts.selector)) {
    el = document.querySelector(opts.selector)
  } else if (opts.selector.attributes && opts.selector.attributes.id) {
    el = document.querySelector(`#${opts.selector.attributes.id}`)
  }

  if (mooaApp.switchMode === 'coexist') {
    if (el) {
      el.style.display = 'block'
      return el
    }
  }

  // el = document.createElement(opts.selector)
  el = createElement(opts.selector)

  if (opts.parentElement) {
    let parentEl = document.querySelector(opts.parentElement)
    if (parentEl) {
      parentEl.appendChild(el)
    } else {
      document.body.appendChild(el)
    }
  } else {
    document.body.appendChild(el)
  }

  return el
}

export function removeApplicationContainer(app: MooaApp) {
  const opts = app.appConfig

  let el: any
  if (isString(opts.selector)) {
    el = document.querySelector(opts.selector)
  } else if (opts.selector.attributes && opts.selector.attributes.id) {
    el = document.querySelector(`#${opts.selector.attributes.id}`)
  }

  if (!el) {
    return
  }

  if (app.switchMode === 'coexist') {
    el.style.display = 'none'
    return
  }

  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }

  return el.remove()
}

export function isIframeElementExist(mooaApp: MooaApp) {
  return document.getElementById(generateIFrameID(mooaApp.appConfig.name))
}

export function isElementExist(appName: string): any {
  return document.querySelector(`app-${appName}`)
}

export function createApplicationIframeContainer(mooaApp: MooaApp) {
  const opts = mooaApp.appConfig
  if (mooaApp.switchMode === 'coexist') {
    let iframeElement: any = isIframeElementExist(mooaApp)
    if (iframeElement) {
      iframeElement.style.display = 'block'
      return iframeElement
    }
  }

  const iframe: any = document.createElement('iframe')
  iframe.frameBorder = ''
  iframe.width = '100%'
  iframe.height = '100%'
  iframe.src = window.location.origin + '/assets/iframe.html'
  iframe.id = generateIFrameID(mooaApp.appConfig.name)

  // const el = document.createElement(opts.selector)
  const el = createElement(opts.selector)

  if (opts.parentElement) {
    let parentEl = document.querySelector(opts.parentElement)
    if (parentEl) {
      parentEl.appendChild(iframe)
    }
  } else {
    document.body.appendChild(iframe)
  }

  let iframeEl: any = document.getElementById(iframe.id)
  iframeEl.contentWindow.document.write('<div></div>')
  iframeEl.contentWindow.document.body.appendChild(el)
  iframeEl.contentWindow.document.head.innerHTML =
    iframeEl.contentWindow.document.head.innerHTML + "<base href='/' />"
  iframeEl.contentWindow.mooa = {
    isSingleSpa: true
  }
  iframeEl.contentWindow.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function(
    event: CustomEvent
  ) {
    if (event.detail) {
      navigateAppByName(event.detail)
    }
  })
}

export function removeApplicationIframeContainer(app: MooaApp) {
  const iframeId = generateIFrameID(app.appConfig.name)
  let iframeEl = document.getElementById(iframeId)
  if (!iframeEl) {
    return
  }

  if (app.switchMode === 'coexist') {
    iframeEl.style.display = 'none'
    return
  }

  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (iframeEl && iframeEl.parentNode) {
        iframeEl.parentNode.removeChild(iframeEl)
      }
    }
  }

  return iframeEl.remove()
}

export function generateIFrameID(name: string) {
  return name + '_' + hashCode(name)
}

export function createElement(options: any) {
  let el, a, i

  if (isString(options)) {
    return document.createElement(options)
  }

  if (!options.tagName) {
    el = document.createDocumentFragment()
  } else {
    el = document.createElement(options.tagName)
    if (options.className) {
      el.className = options.className
    }

    if (options.attributes) {
      for (a in options.attributes) {
        el.setAttribute(a, options.attributes[a])
      }
    }

    if (options.html !== undefined) {
      el.innerHTML = options.html
    }
  }

  if (options.text) {
    el.appendChild(document.createTextNode(options.text))
  }

  // IE 8 doesn"t have HTMLElement
  if (window.HTMLElement === undefined) {
    window.HTMLElement = Element
  }

  if (options.childs && options.childs.length) {
    for (i = 0; i < options.childs.length; i++) {
      el.appendChild(
        options.childs[i] instanceof window.HTMLElement
          ? options.childs[i]
          : createElement(options.childs[i])
      )
    }
  }

  return el
}
