(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('axios')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'axios'], factory) :
	(factory((global.mooa = {}),global.React,global.PropsTypes,global.axios));
}(this, (function (exports,React,PropsTypes,axios) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
PropsTypes = PropsTypes && PropsTypes.hasOwnProperty('default') ? PropsTypes['default'] : PropsTypes;
axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NOT_LOADED"] = "NOT_LOADED";
    StatusEnum["LOADING_SOURCE_CODE"] = "LOADING_SOURCE_CODE";
    StatusEnum["NOT_BOOTSTRAPPED"] = "NOT_BOOTSTRAPPED";
    StatusEnum["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    StatusEnum["NOT_MOUNTED"] = "NOT_MOUNTED";
    StatusEnum["MOUNTING"] = "MOUNTING";
    StatusEnum["MOUNTED"] = "MOUNTED";
    StatusEnum["UNMOUNTING"] = "UNMOUNTING";
    StatusEnum["UNLOADING"] = "UNLOADING";
    StatusEnum["SKIP_BECAUSE_BROKEN"] = "SKIP_BECAUSE_BROKEN";
})(StatusEnum || (StatusEnum = {}));
var MOOA_EVENT;
(function (MOOA_EVENT) {
    MOOA_EVENT["LOADING"] = "mooa.loading";
    MOOA_EVENT["BOOTSTRAPPING"] = "mooa.bootstrapping";
    MOOA_EVENT["MOUNTING"] = "mooa.mounting";
    MOOA_EVENT["UNLOADING"] = "mooa.unloading";
    MOOA_EVENT["UNMOUNTING"] = "mooa.unmounting";
    MOOA_EVENT["ROUTING_NAVIGATE"] = "mooa.routing.navigate";
    MOOA_EVENT["ROUTING_CHANGE"] = "mooa.routing.change";
    MOOA_EVENT["ROUTING_BEFORE"] = "mooa.routing.before";
    MOOA_EVENT["CHILD_MOUNT"] = "mooa.child.mount";
    MOOA_EVENT["CHILD_UNMOUNT"] = "mooa.child.unmount";
    MOOA_EVENT["CHILD_ROUTING"] = "mooa.child.routing.navigate";
})(MOOA_EVENT || (MOOA_EVENT = {}));

function find(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return null;
}
function mooaLog() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (window['mooa'] && window['mooa']['debug']) {
        console.log(args);
    }
}
// Fixed for IE Custom Event
function MooaCustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}
function customEvent(eventName, eventArgs) {
    if (typeof window.CustomEvent !== 'function') {
        MooaCustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = MooaCustomEvent;
    }
    window.dispatchEvent(new CustomEvent(eventName, { detail: eventArgs }));
}
function rcNavigateAppByName(opts) {
    var navigateToApp;
    window.apps.map(function (app) {
        app.status = StatusEnum.MOUNTED;
        if (app.name === opts.appName) {
            app.status = StatusEnum.NOT_LOADED;
            navigateToApp = app;
            return app;
        }
    });
    if (navigateToApp) {
        var prefix = navigateToApp.appConfig.prefix;
        history.pushState(null, '', prefix + '/' + opts.router);
        return window.mooa.instance.rcReRouter();
    }
}
function navigateAppByName(opts) {
    var navigateToApp;
    window.apps.map(function (app) {
        app.status = StatusEnum.MOUNTED;
        if (app.name === opts.appName) {
            app.status = StatusEnum.NOT_LOADED;
            navigateToApp = app;
            return app;
        }
    });
    if (navigateToApp) {
        var prefix = navigateToApp.appConfig.prefix;
        history.pushState(null, '', prefix + '/' + opts.router);
        return window.mooa.instance.reRouter();
    }
}
function hashCode(str) {
    var hash = 0;
    if (str.length === 0) {
        return hash.toString();
    }
    for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
        hash = hash >>> 1;
    }
    return hash.toString();
}
function getHistoryLocation(history) {
    return (history.location ||
        (history.getCurrentLocation && history.getCurrentLocation()));
}

var createScriptTag = function (src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.charset = 'UTF-8';
    script.id = hashCode(src);
    return script;
};
var createLinkTag = function (src) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = src;
    link.type = 'text/css';
    link.charset = 'UTF-8';
    link.id = hashCode(src);
    return link;
};
var AssetsHelper = {
    createScriptTag: createScriptTag,
    createLinkTag: createLinkTag
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
}

var isString_1 = isString;

function createApplicationContainer(mooaApp) {
    var opts = mooaApp.appConfig;
    var el;
    if (isString_1(opts.selector)) {
        el = document.querySelector(opts.selector);
    }
    else if (opts.selector.attributes && opts.selector.attributes.id) {
        el = document.querySelector("#" + opts.selector.attributes.id);
    }
    if (mooaApp.switchMode === 'coexist') {
        if (el) {
            el.style.display = 'block';
            return el;
        }
    }
    // el = document.createElement(opts.selector)
    el = createElement(opts.selector);
    if (opts.parentElement) {
        var parentEl = document.querySelector(opts.parentElement);
        if (parentEl) {
            parentEl.appendChild(el);
        }
        else {
            document.body.appendChild(el);
        }
    }
    else {
        document.body.appendChild(el);
    }
    return el;
}
function removeApplicationContainer(app) {
    var opts = app.appConfig;
    var el;
    if (isString_1(opts.selector)) {
        el = document.querySelector(opts.selector);
    }
    else if (opts.selector.attributes && opts.selector.attributes.id) {
        el = document.querySelector("#" + opts.selector.attributes.id);
    }
    if (!el) {
        return;
    }
    if (app.switchMode === 'coexist') {
        el.style.display = 'none';
        return;
    }
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
    }
    return el.remove();
}
function isIframeElementExist(mooaApp) {
    return document.getElementById(generateIFrameID(mooaApp.appConfig.name));
}
function isElementExist(appName) {
    return document.querySelector("app-" + appName);
}
function createApplicationIframeContainer(mooaApp) {
    var opts = mooaApp.appConfig;
    if (mooaApp.switchMode === 'coexist') {
        var iframeElement = isIframeElementExist(mooaApp);
        if (iframeElement) {
            iframeElement.style.display = 'block';
            return iframeElement;
        }
    }
    var iframe = document.createElement('iframe');
    iframe.frameBorder = '';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = window.location.origin + '/assets/iframe.html';
    iframe.id = generateIFrameID(mooaApp.appConfig.name);
    // const el = document.createElement(opts.selector)
    var el = createElement(opts.selector);
    if (opts.parentElement) {
        var parentEl = document.querySelector(opts.parentElement);
        if (parentEl) {
            parentEl.appendChild(iframe);
        }
    }
    else {
        document.body.appendChild(iframe);
    }
    var iframeEl = document.getElementById(iframe.id);
    iframeEl.contentWindow.document.write('<div></div>');
    iframeEl.contentWindow.document.body.appendChild(el);
    iframeEl.contentWindow.document.head.innerHTML =
        iframeEl.contentWindow.document.head.innerHTML + "<base href='/' />";
    iframeEl.contentWindow.mooa = {
        isSingleSpa: true
    };
    iframeEl.contentWindow.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function (event) {
        if (event.detail) {
            navigateAppByName(event.detail);
        }
    });
}
function removeApplicationIframeContainer(app) {
    var iframeId = generateIFrameID(app.appConfig.name);
    var iframeEl = document.getElementById(iframeId);
    if (!iframeEl) {
        return;
    }
    if (app.switchMode === 'coexist') {
        iframeEl.style.display = 'none';
        return;
    }
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (iframeEl && iframeEl.parentNode) {
                iframeEl.parentNode.removeChild(iframeEl);
            }
        };
    }
    return iframeEl.remove();
}
function generateIFrameID(name) {
    return name + '_' + hashCode(name);
}
function createElement(options) {
    var el, a, i;
    if (isString_1(options)) {
        return document.createElement(options);
    }
    if (!options.tagName) {
        el = document.createDocumentFragment();
    }
    else {
        el = document.createElement(options.tagName);
        if (options.className) {
            el.className = options.className;
        }
        if (options.attributes) {
            for (a in options.attributes) {
                el.setAttribute(a, options.attributes[a]);
            }
        }
        if (options.html !== undefined) {
            el.innerHTML = options.html;
        }
    }
    if (options.text) {
        el.appendChild(document.createTextNode(options.text));
    }
    // IE 8 doesn"t have HTMLElement
    if (window.HTMLElement === undefined) {
        window.HTMLElement = Element;
    }
    if (options.childs && options.childs.length) {
        for (i = 0; i < options.childs.length; i++) {
            el.appendChild(options.childs[i] instanceof window.HTMLElement
                ? options.childs[i]
                : createElement(options.childs[i]));
        }
    }
    return el;
}

function loadScriptPromise(src, iframeEl) {
    return new Promise(function (resolve, reject) {
        var script = AssetsHelper.createScriptTag(src);
        script.onload = function () {
            resolve();
        };
        script.onerror = function (err) {
            reject(err);
        };
        if (iframeEl) {
            if (iframeEl && iframeEl.contentWindow) {
                iframeEl.contentWindow.document.head.appendChild(script);
            }
        }
        else {
            document.head.appendChild(script);
        }
    });
}
var loadScriptTag = function (src, iframeEl) {
    return function () {
        return loadScriptPromise(src, iframeEl);
    };
};
var loadLinkTag = function (url, iframeEl) {
    return function () {
        return new Promise(function (resolve, reject) {
            var link = AssetsHelper.createLinkTag(url);
            link.onload = function () {
                resolve();
            };
            link.onerror = function (err) {
                reject(err);
            };
            if (iframeEl) {
                if (iframeEl && iframeEl.contentWindow) {
                    iframeEl.contentWindow.document.head.appendChild(link);
                }
            }
            else {
                document.head.appendChild(link);
            }
        });
    };
};
function loadAllAssets(opts) {
    return new Promise(function (resolve, reject) {
        var scriptsPromise = opts.scripts.reduce(function (prev, fileName) {
            return prev.then(loadScriptTag(opts.baseScriptUrl + "/" + fileName));
        }, Promise.resolve(undefined));
        var stylesPromise = opts.styles.reduce(function (prev, fileName) {
            return prev.then(loadLinkTag(opts.baseScriptUrl + "/" + fileName));
        }, Promise.resolve(undefined));
        Promise.all([scriptsPromise, stylesPromise]).then(resolve, reject);
    });
}
function loadAllAssetsForIframe(opts) {
    var iframeId = generateIFrameID(opts.name);
    var iframeEl = document.getElementById(iframeId);
    if (!iframeEl) {
        return new Promise(function (resolve, reject) {
            reject();
        });
    }
    return new Promise(function (resolve, reject) {
        var scriptsPromise = opts.scripts.reduce(function (prev, fileName) {
            return prev.then(loadScriptTag(opts.baseScriptUrl + "/" + fileName, iframeEl));
        }, Promise.resolve(undefined));
        var stylesPromise = opts.styles.reduce(function (prev, fileName) {
            return prev.then(loadLinkTag(opts.baseScriptUrl + "/" + fileName, iframeEl));
        }, Promise.resolve(undefined));
        var promiseArray = [scriptsPromise, stylesPromise];
        if (opts.includeZone) {
            var zonejsPromise = loadScriptPromise("/assets/zone.min.js", iframeEl);
            promiseArray.push(zonejsPromise);
        }
        Promise.all(promiseArray).then(resolve, reject);
    });
}
function loadAllAssetsForIframeAndUrl(opts) {
    var iframeId = generateIFrameID(opts.name);
    var iframeEl = document.getElementById(iframeId);
    if (!iframeEl) {
        return new Promise(function (resolve, reject) {
            reject();
        });
    }
    return new Promise(function (resolve, reject) {
        transformOptsWithAssets(opts).then(function () {
            var scriptsPromise = opts.scripts.reduce(function (prev, fileName) {
                return prev.then(loadScriptTag(opts.baseScriptUrl + "/" + fileName, iframeEl));
            }, Promise.resolve(undefined));
            var stylesPromise = opts.styles.reduce(function (prev, fileName) {
                return prev.then(loadLinkTag(opts.baseScriptUrl + "/" + fileName, iframeEl));
            }, Promise.resolve(undefined));
            var promiseArray = [scriptsPromise, stylesPromise];
            if (opts.includeZone) {
                var zonejsPromise = loadScriptPromise("/assets/zone.min.js", iframeEl);
                promiseArray.push(zonejsPromise);
            }
            Promise.all(promiseArray).then(resolve, reject);
        });
    });
}
var xmlToAssets = function (xml) {
    var dom = document.createElement('html');
    var urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    dom.innerHTML = xml;
    var linksEls = dom.querySelectorAll('link[rel="stylesheet"]');
    var scriptsEls = dom.querySelectorAll('script[type="text/javascript"]');
    return {
        styles: Array.from(linksEls)
            .map(function (el) { return el.getAttribute('href'); })
            .filter(function (src) {
            if (src) {
                return !urlRegex.test(src);
            }
        }),
        scripts: Array.from(scriptsEls)
            .map(function (el) { return el.getAttribute('src'); })
            .filter(function (src) {
            if (src) {
                return !(/zone\.js/.test(src) && urlRegex.test(src));
            }
        })
    };
};
var transformOptsWithAssets = function (opts) {
    var url = opts.baseScriptUrl + "/index.html";
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status >= 200 && req.status < 400) {
                    var res = xmlToAssets(req.responseText);
                    opts.styles = res.styles;
                    opts.scripts = res.scripts;
                    resolve(null);
                }
                else {
                    reject("Try to load " + url + ", status : " + req.status + " => " + req.statusText);
                }
            }
        };
        req.open('GET', url, true);
        req.send(null);
    });
};
var loadAllAssetsByUrl = function (opts) {
    return new Promise(function (resolve, reject) {
        transformOptsWithAssets(opts).then(function () {
            var scriptsPromise = opts.scripts.reduce(function (prev, fileName) {
                return prev.then(loadScriptTag(opts.baseScriptUrl + "/" + fileName));
            }, Promise.resolve(undefined));
            var stylesPromise = opts.styles.reduce(function (prev, fileName) {
                return prev.then(loadLinkTag(opts.baseScriptUrl + "/" + fileName));
            }, Promise.resolve(undefined));
            Promise.all([scriptsPromise, stylesPromise]).then(resolve, reject);
        }, reject);
    });
};
function unloadTag(opts, scriptName) {
    return function () {
        return new Promise(function (resolve, reject) {
            var tag = document.getElementById(hashCode(opts.baseScriptUrl + "/" + scriptName));
            if (tag) {
                document.head.removeChild(tag);
            }
            resolve();
        });
    };
}
var LoaderHelper = {
    loadAllAssets: loadAllAssets,
    loadAllAssetsByUrl: loadAllAssetsByUrl,
    loadAllAssetsForIframe: loadAllAssetsForIframe,
    loadAllAssetsForIframeAndUrl: loadAllAssetsForIframeAndUrl,
    unloadTag: unloadTag
};

/**
 * Robin Coma Delperier
 * Licensed under the Apache-2.0 License
 * https://github.com/PlaceMe-SAS/single-spa-angular-cli/blob/master/LICENSE
 *
 * modified by Phodal HUANG
 *
 */
function bootstrap(app) {
    if (!window['mooa']) {
        window.mooa = {};
    }
    window.mooa.isSingleSpa = true;
    window.mooa.name = app.name;
    if (app.mode && app.mode === 'iframe') {
        var iframeElementExist = isIframeElementExist(app);
        if (app.switchMode === 'coexist' && iframeElementExist) {
            iframeElementExist.style.display = 'block';
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }
        createApplicationIframeContainer(app);
        if (app.sourceType === 'link') {
            return new Promise(function (resolve, reject) {
                LoaderHelper.loadAllAssetsForIframeAndUrl(app.appConfig).then(resolve, reject);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                LoaderHelper.loadAllAssetsForIframe(app.appConfig).then(resolve, reject);
            });
        }
    }
    else if (app.sourceType && app.sourceType === 'link') {
        var hasElement = isElementExist(app.appConfig.name);
        if (app.switchMode === 'coexist' && hasElement) {
            hasElement.style.display = 'block';
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }
        createApplicationContainer(app);
        return new Promise(function (resolve, reject) {
            LoaderHelper.loadAllAssetsByUrl(app.appConfig).then(resolve, reject);
        });
    }
    else {
        var hasElement = isElementExist(app.appConfig.name);
        if (app.switchMode === 'coexist' && hasElement) {
            hasElement.style.display = 'block';
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }
        createApplicationContainer(app);
        return new Promise(function (resolve, reject) {
            LoaderHelper.loadAllAssets(app.appConfig).then(resolve, reject);
        });
    }
}
function load() {
    return Promise.resolve();
}
function mount(app, props) {
    return new Promise(function (resolve, reject) {
        var aliasWindow = window;
        if (app.mode === 'iframe') {
            var iframe = document.getElementById(generateIFrameID(app.name));
            if (iframe && iframe.contentWindow) {
                aliasWindow = iframe.contentWindow;
            }
        }
        if (aliasWindow.mooa[app.name]) {
            aliasWindow.mooa[app.name].mount(props);
            resolve();
        }
        else {
            console.error("Cannot mount " + app.name + " because that is not bootstraped");
            reject();
        }
    });
}
function unmount(app, props) {
    var unloadApplication = props.unloadApplication, getAppNames = props.getAppNames;
    return new Promise(function (resolve, reject) {
        if (app.mode === 'iframe') {
            unloadApplication(app.name, { waitForUnmount: true });
            removeApplicationIframeContainer(app);
            resolve();
        }
        if (window.mooa[app.name]) {
            if (app.switchMode !== 'coexist') {
                window.mooa[app.name].unmount();
            }
            removeApplicationContainer(app);
            if (getAppNames().indexOf(app.name) !== -1) {
                unloadApplication(app.name, { waitForUnmount: true });
                resolve();
            }
            else {
                reject("Cannot unmount " + app.name + " because that " + app.name + "\n          is not part of the decalred applications : " + getAppNames());
            }
        }
        else {
            reject("Cannot unmount " + app.name + " because that is not bootstraped");
        }
    });
}
function unload(app) {
    if (app.switchMode === 'coexist') {
        return new Promise(function (resolve) {
            resolve();
        });
    }
    return new Promise(function (resolve) {
        app.appConfig.scripts
            .concat(app.appConfig.styles)
            .reduce(function (prev, scriptName) {
            return prev.then(LoaderHelper.unloadTag(app.appConfig, scriptName));
        }, Promise.resolve({}));
        resolve();
    });
}
function mooaLoader(opts) {
    return {
        bootstrap: bootstrap.bind(null, opts),
        load: load.bind(null, opts),
        mount: mount.bind(null, opts),
        unload: unload.bind(null, opts),
        unmount: unmount.bind(null, opts)
    };
}

// License (MIT)
var globalTimeoutConfig = {
    bootstrap: {
        millis: 4000,
        dieOnTimeout: false
    },
    mount: {
        millis: 3000,
        dieOnTimeout: false
    },
    unmount: {
        millis: 3000,
        dieOnTimeout: false
    },
    unload: {
        millis: 3000,
        dieOnTimeout: false
    }
};
function reasonableTime(promise, description, timeoutConfig, app) {
    var warningPeriod = 1000;
    return new Promise(function (resolve, reject) {
        var finished = false;
        var errored = false;
        promise
            .then(function (val) {
            finished = true;
            resolve(val);
        })
            .catch(function (val) {
            finished = true;
            reject(val);
        });
        setTimeout(function () { return maybeTimingOut(1); }, warningPeriod);
        setTimeout(function () { return maybeTimingOut(true); }, timeoutConfig.millis);
        function maybeTimingOut(shouldError) {
            if (!finished) {
                if (shouldError === true) {
                    errored = true;
                    if (timeoutConfig.dieOnTimeout) {
                        reject(description + " did not resolve or reject for " + timeoutConfig.millis + " milliseconds");
                    }
                    else {
                        // don't resolve or reject, we're waiting this one out
                        console.error(description + " did not resolve or reject for " + timeoutConfig.millis +
                            "milliseconds -- \n            we're no longer going to warn you about it.");
                    }
                }
                else if (!errored) {
                    var numWarnings_1 = shouldError;
                    var numMillis = numWarnings_1 * warningPeriod;
                    console.warn(description + " did not resolve or reject within " + numMillis + " milliseconds");
                    if (numMillis + warningPeriod < timeoutConfig.millis) {
                        setTimeout(function () { return maybeTimingOut(numWarnings_1 + 1); }, warningPeriod);
                    }
                }
            }
        }
    });
}
function ensureValidAppTimeouts(timeouts) {
    if (timeouts === void 0) { timeouts = {}; }
    return __assign({}, globalTimeoutConfig, timeouts);
}

function toLoadPromise(app) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (app.status !== StatusEnum.NOT_LOADED) {
                return [2 /*return*/, app];
            }
            createApp(app);
            customEvent(MOOA_EVENT.LOADING, { app: app });
            mooaLog('Loading application', app.name, app.status);
            app.status = StatusEnum.NOT_BOOTSTRAPPED;
            return [2 /*return*/, app];
        });
    });
}
function createApp(appOpt) {
    var _loader = mooaLoader(appOpt);
    appOpt.bootstrap = _loader.bootstrap;
    appOpt.load = _loader.load;
    appOpt.mount = _loader.mount;
    appOpt.unload = _loader.unload;
    appOpt.unmount = _loader.unmount;
    appOpt.timeouts = ensureValidAppTimeouts(appOpt.timeouts);
    return appOpt;
}

function toBootstrapPromise(app) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (app.status !== StatusEnum.NOT_BOOTSTRAPPED) {
                        return [2 /*return*/, app];
                    }
                    app.status = StatusEnum.BOOTSTRAPPING;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    mooaLog('Bootstrapping application', app.name, app.status);
                    customEvent(MOOA_EVENT.BOOTSTRAPPING, { app: app });
                    return [4 /*yield*/, reasonableTime(app.bootstrap(), "Bootstrapping app '" + app.name + "'", app.timeouts.bootstrap)];
                case 2:
                    _a.sent();
                    console.log('bootstrap success');
                    app.status = StatusEnum.NOT_MOUNTED;
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    app.status = StatusEnum.SKIP_BECAUSE_BROKEN;
                    throw new Error(err_1);
                case 4: return [2 /*return*/, app];
            }
        });
    });
}

function toMountPromise(app) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (app.status !== StatusEnum.NOT_MOUNTED) {
                        return [2 /*return*/, app];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    mooaLog('Mounting application', app.name, app.status);
                    customEvent(MOOA_EVENT.MOUNTING, { app: app });
                    return [4 /*yield*/, reasonableTime(app.mount(), "Mounting application '" + app.name + "'", app.timeouts.mount)];
                case 2:
                    _a.sent();
                    app.status = StatusEnum.MOUNTED;
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    app.status = StatusEnum.SKIP_BECAUSE_BROKEN;
                    throw new Error(err_1);
                case 4: return [2 /*return*/, app];
            }
        });
    });
}

var appsToUnload = {};
function toUnloadPromise(app, mooaInstance) {
    return __awaiter(this, void 0, void 0, function () {
        var unloadInfo, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    unloadInfo = appsToUnload[app.name];
                    if (app.status === StatusEnum.NOT_LOADED) {
                        unloadingApp(app, unloadInfo);
                        return [2 /*return*/, app];
                    }
                    if (!(app.status === StatusEnum.UNLOADING)) return [3 /*break*/, 2];
                    return [4 /*yield*/, unloadInfo.promise];
                case 1:
                    _a.sent();
                    return [2 /*return*/, app];
                case 2:
                    if (app.status !== StatusEnum.NOT_MOUNTED) {
                        return [2 /*return*/, app];
                    }
                    if (!unloadInfo) {
                        return [2 /*return*/, app];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    app.status = StatusEnum.UNLOADING;
                    customEvent(MOOA_EVENT.UNLOADING, { app: app });
                    mooaLog('Unloading application', app.name, app.status);
                    return [4 /*yield*/, reasonableTime(app.unload(), "Unloading application '" + app.name + "'", app.timeouts.unload)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error('Unloading Error', err_1);
                    return [2 /*return*/, app];
                case 6:
                    unloadingApp(app, unloadInfo);
                    return [2 /*return*/, app];
            }
        });
    });
}
function unloadingApp(app, unloadInfo) {
    delete appsToUnload[app.name];
    delete app.bootstrap;
    delete app.mount;
    delete app.unmount;
    delete app.unload;
    app.status = StatusEnum.NOT_LOADED;
    unloadInfo.resolve();
}
function getUnloadApps() {
    return appsToUnload;
}
function addAppToUnload(app, promiseGetter, resolve, reject) {
    appsToUnload[app.name] = { app: app, resolve: resolve, reject: reject };
    Object.defineProperty(appsToUnload[app.name], 'promise', {
        get: promiseGetter
    });
}

function isActive(app) {
    return app.status === StatusEnum.MOUNTED;
}
function InActive(app) {
    return !isActive(app);
}
/**
 * @todo
 * location should be decided by history.location
 */
function shouldNotBeActive(location) {
    return function (app) {
        try {
            return !app.activeWhen(location || window.location);
        }
        catch (err) {
            app.status = StatusEnum.SKIP_BECAUSE_BROKEN;
            throw new Error(err);
        }
    };
}
function notSkipped(item) {
    return (item !== StatusEnum.SKIP_BECAUSE_BROKEN &&
        (!item || item.status !== StatusEnum.SKIP_BECAUSE_BROKEN));
}
function isLoaded(app) {
    return (app.status !== StatusEnum.NOT_LOADED &&
        app.status !== StatusEnum.LOADING_SOURCE_CODE);
}
function notLoaded(app) {
    return !isLoaded(app);
}
function shouldBeActive(location) {
    return function (app) {
        try {
            return app.activeWhen(location || window.location);
        }
        catch (err) {
            app.status = StatusEnum.SKIP_BECAUSE_BROKEN;
            throw new Error(err);
        }
    };
}
var StatusHelper = {
    getAppsToLoad: function (apps, location) {
        return apps
            .filter(notSkipped)
            .filter(notLoaded)
            .filter(shouldBeActive(location));
    },
    getAppsToUnload: function () {
        var appsToUnload = getUnloadApps();
        return Object.keys(appsToUnload)
            .map(function (appName) { return appsToUnload[appName].app; })
            .filter(InActive);
    },
    getAppUnloadInfo: function (appName) {
        var appsToUnload = getUnloadApps();
        return appsToUnload[appName];
    },
    getAppsToUnmount: function (apps, location) {
        return apps
            .filter(notSkipped)
            .filter(isActive)
            .filter(shouldNotBeActive(location));
    },
    getAppsToMount: function (apps, location) {
        return apps
            .filter(notSkipped)
            .filter(InActive)
            .filter(isLoaded)
            .filter(shouldBeActive(location));
    },
    getActiveApps: function (apps) {
        return apps.filter(notSkipped).filter(isActive);
    }
};

function getAppNames() {
    return window.apps.map(function (app) { return app.name; });
}
function immediatelyUnloadApp(app, resolve, reject) {
    toUnmountPromise(app)
        .then(toUnloadPromise)
        .then(function () {
        resolve();
        setTimeout(function () {
            // reroute, but the unload promise is done
            return window.mooa.instance.reRouter();
        });
    })
        .catch(reject);
}
function unloadApplication(appName, opts) {
    if (opts === void 0) { opts = { waitForUnmount: false }; }
    if (typeof appName !== 'string') {
        throw new Error("unloadApplication requires a string 'appName'");
    }
    var app = find(window.apps, function (app) { return app.name === appName; });
    if (!app) {
        throw new Error("Could not unload application '" + appName + "' because no such application has been declared");
    }
    var appUnloadInfo = StatusHelper.getAppUnloadInfo(app.name);
    if (opts && opts.waitForUnmount) {
        if (appUnloadInfo) {
            return appUnloadInfo.promise;
        }
        else {
            var promise_1 = new Promise(function (resolve, reject) {
                addAppToUnload(app, function () { return promise_1; }, resolve, reject);
            });
            return promise_1;
        }
    }
    else {
        var resultPromise_1;
        if (appUnloadInfo) {
            resultPromise_1 = appUnloadInfo.promise;
            immediatelyUnloadApp(app, appUnloadInfo.resolve, appUnloadInfo.reject);
        }
        else {
            resultPromise_1 = new Promise(function (resolve, reject) {
                addAppToUnload(app, function () { return resultPromise_1; }, resolve, reject);
                immediatelyUnloadApp(app, resolve, reject);
            });
        }
        return resultPromise_1;
    }
}
function appendFunc(app) {
    app.unloadApplication = unloadApplication;
    app.getAppNames = getAppNames;
    return app;
}
function toUnmountPromise(app) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (app.status !== StatusEnum.MOUNTED) {
                        return [2 /*return*/, app];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    mooaLog('Unmounting application', app.name, app.status);
                    customEvent(MOOA_EVENT.UNMOUNTING, { app: app });
                    return [4 /*yield*/, reasonableTime(app.unmount(appendFunc(app)), "Unmounting application " + app.name + "'", app.timeouts.unmount)];
                case 2:
                    _a.sent();
                    app.status = StatusEnum.NOT_MOUNTED;
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    app.status = StatusEnum.SKIP_BECAUSE_BROKEN;
                    throw new Error(err_1);
                case 4: return [2 /*return*/, app];
            }
        });
    });
}

/**
 * Robin Coma Delperier
 * Licensed under the Apache-2.0 License
 * https://github.com/PlaceMe-SAS/single-spa-angular-cli/blob/master/LICENSE
 *
 * modified by Phodal HUANG
 *
 */
var MooaRouter = /** @class */ (function () {
    function MooaRouter() {
        this.defaultRoute = '';
        this.routes = [];
        this.lastPathName = '/';
    }
    MooaRouter.prototype.matchRoute = function (prefix, isDefaultPage) {
        var _this = this;
        this.routes.push(prefix);
        if (isDefaultPage) {
            this.defaultRoute = prefix;
        }
        return function (location) {
            if (prefix === '/') {
                return location.pathname === '/';
            }
            var route = find(_this.routes, function (r) { return _this.pathMatch(location, r); });
            if (route) {
                return _this.pathMatch(location, prefix);
            }
            else {
                _this.lastPathName = location.pathname;
                _this.navigate(_this.defaultRoute);
                return false;
            }
        };
    };
    MooaRouter.prototype.navigate = function (path) {
        history.pushState(null, '', path);
    };
    MooaRouter.prototype.pathMatch = function (location, path) {
        var loc = location.pathname + location.search;
        return loc.indexOf(path) !== -1;
    };
    return MooaRouter;
}());

window.mooa = window.mooa || {};
var MooaPlatform = /** @class */ (function () {
    function MooaPlatform() {
        this.name = '';
    }
    MooaPlatform.prototype.rcMount = function (name, history) {
        var _this = this;
        this.name = name;
        this.history = history;
        return new Promise(function (resolve, reject) {
            if (_this.isSingleSpaApp()) {
                history.listen(function (location) {
                    _this.notifyParent(location);
                });
                _this.rcHandleRouterUpdate(history, name);
                customEvent(MOOA_EVENT.CHILD_MOUNT, { name: _this.name });
                window.mooa[_this.name] = window.mooa[_this.name] || {};
                window.mooa[_this.name].mount = function (props) {
                    resolve({ props: props, attachUnmount: _this.unmount.bind(_this) });
                };
            }
            else {
                resolve({ props: {}, attachUnmount: _this.unmount.bind(_this) });
            }
        });
    };
    MooaPlatform.prototype.mount = function (name, router) {
        var _this = this;
        this.name = name;
        this.router = router;
        return new Promise(function (resolve, reject) {
            if (_this.isSingleSpaApp()) {
                customEvent(MOOA_EVENT.CHILD_MOUNT, { name: _this.name });
                window.mooa[_this.name] = window.mooa[_this.name] || {};
                window.mooa[_this.name].mount = function (props) {
                    resolve({ props: props, attachUnmount: _this.unmount.bind(_this) });
                };
            }
            else {
                resolve({ props: {}, attachUnmount: _this.unmount.bind(_this) });
            }
        });
    };
    MooaPlatform.prototype.unmount = function (module) {
        var _this = this;
        if (this.isSingleSpaApp()) {
            customEvent(MOOA_EVENT.CHILD_UNMOUNT, { name: this.name });
            window.mooa[this.name].unmount = function () {
                if (module) {
                    module.destroy();
                    if (_this.router) {
                        module.injector.get(_this.router).dispose();
                    }
                }
            };
        }
    };
    MooaPlatform.prototype.appBase = function (location) {
        if (this.isSingleSpaApp()) {
            location = location || window.location;
            var pathNames = location.pathname.split('/');
            if (pathNames.length < 2) {
                return '/';
            }
            var parentRouter = pathNames[1];
            var appName = pathNames[2];
            var locationPath = '/' + parentRouter + '/' + appName;
            window.mooa.basePath = locationPath;
            return locationPath;
        }
        else {
            return '/';
        }
    };
    MooaPlatform.prototype.navigateTo = function (opts) {
        customEvent(MOOA_EVENT.ROUTING_NAVIGATE, opts);
    };
    MooaPlatform.prototype.notifyParent = function (location) {
        if (this.isSingleSpaApp()) {
            if (window.parent) {
                window.parent.dispatchEvent(new CustomEvent(MOOA_EVENT.CHILD_ROUTING, { detail: location }));
            }
        }
    };
    MooaPlatform.prototype.rcHandleRouterUpdate = function (history, appName) {
        window.addEventListener(MOOA_EVENT.ROUTING_CHANGE, function (event) {
            if (event.detail.app.name === appName) {
                // let urlPrefix = 'app/'
                // if (urlPrefix) {
                //   urlPrefix = `/${window.mooa.option.urlPrefix}/`
                // }
                // console.log(event.detail.path.replace(urlPrefix + appName, ''))
                history.push(event.detail.path);
                // history.push(event.detail.path.replace(urlPrefix + appName, ''))
            }
        });
    };
    MooaPlatform.prototype.handleRouterUpdate = function (router, appName) {
        window.addEventListener(MOOA_EVENT.ROUTING_CHANGE, function (event) {
            if (event.detail.app.name === appName) {
                var urlPrefix = 'app';
                if (urlPrefix) {
                    urlPrefix = "/" + window.mooa.option.urlPrefix + "/";
                }
                router.navigate([event.detail.url.replace(urlPrefix + appName, '')]);
            }
        });
    };
    MooaPlatform.prototype.isSingleSpaApp = function () {
        return window.mooa.isSingleSpa;
    };
    return MooaPlatform;
}());

/**
 * @desc
 * 将mooa对象传给子组件
 */
var MooaProvider = /** @class */ (function (_super) {
    __extends(MooaProvider, _super);
    function MooaProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.configs = [];
        _this.mounted = false;
        _this.listeners = [];
        _this.initConfig = function (configUrl) {
            var _a = _this, mooa = _a.mooa, router = _a.router, history = _a.history;
            !_this.mounted
                && axios.get(configUrl).then(function (_a) {
                    var data = _a.data;
                    data.map(function (config) {
                        mooa.registerApplication(config.name, config, router.matchRoute(config.prefix));
                    });
                    _this.mounted = true;
                    _this.notifyChildren(history);
                });
        };
        _this.addMooaListener = function (func) {
            _this.listeners.push(func);
        };
        _this.notifyChildren = function (history) {
            _this.listeners.forEach(function (lis) {
                lis && lis(history);
            });
        };
        _this.mooa = props['mooa'];
        _this.router = props['router'];
        _this.history = props['history'];
        return _this;
    }
    MooaProvider.prototype.getChildContext = function () {
        return {
            mooa: this.mooa,
            mooaRouter: this.router,
            mooaHistory: this.history,
            addMooaListener: this.addMooaListener
        };
    };
    MooaProvider.prototype.componentWillMount = function () {
        this.initConfig(this.props.configUrl);
    };
    MooaProvider.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    MooaProvider.prototype.render = function () {
        return (React.Children.only(this.props.children));
    };
    MooaProvider.childContextTypes = {
        mooa: PropsTypes.any,
        mooaRouter: PropsTypes.any,
        mooaHistory: PropsTypes.any,
        addMooaListener: PropsTypes.func
    };
    return MooaProvider;
}(React.Component));

var appContainer = (function (WrappedComponent) {
    return _a = /** @class */ (function (_super) {
            __extends(AppContainer, _super);
            function AppContainer(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.unlisten = function () { };
                _this.mooa = context.mooa;
                return _this;
            }
            AppContainer.prototype.componentDidMount = function () {
                var _this = this;
                var addMooaListener = this.context.addMooaListener;
                addMooaListener && addMooaListener(function (history) {
                    /**
                     * @desc mooa.rcStart需要在config文件成功注册之后执行
                     */
                    _this.mooa.rcStart(history);
                    _this.unlisten = history.listen(function () {
                        _this.mooa.rcReRouter(history);
                    });
                });
            };
            AppContainer.prototype.componentWillUnmount = function () {
                this.unlisten && this.unlisten();
            };
            AppContainer.prototype.render = function () {
                var _a = this.props, children = _a.children, others = __rest(_a, ["children"]);
                return (React__default.createElement(WrappedComponent, __assign({}, others), children));
            };
            return AppContainer;
        }(React.Component)), _a.contextTypes = {
            mooa: PropsTypes.any,
            mooaRouter: PropsTypes.any,
            mooaHistory: PropsTypes.any,
            addMooaListener: PropsTypes.func
        }, _a;
    var _a;
});

var apps = [];
window.mooa = window.mooa || {};
var Mooa = /** @class */ (function () {
    function Mooa(option) {
        this.started = false;
        window.mooa.instance = this;
        if (option) {
            window.mooa.option = option;
            window.mooa.debug = option.debug;
        }
        if (localStorage.getItem('mooa.debug') === 'true') {
            window.mooa.debug = true;
        }
        this.option = option;
    }
    Mooa.prototype.registerApplication = function (appName, appConfig, activeWhen, customProps) {
        if (customProps === void 0) { customProps = {}; }
        this.checkActiveWhen(activeWhen);
        appConfig.includeZone = true;
        appConfig = this.mergeAppConfigOption(appConfig);
        if (this.option.urlPrefix) {
            appConfig.prefix = this.option.urlPrefix + '/' + appConfig.prefix;
        }
        var appOpt = {
            name: appName,
            appConfig: appConfig,
            activeWhen: activeWhen,
            mode: '',
            switchMode: '',
            status: StatusEnum.NOT_LOADED,
            customProps: customProps
        };
        if (this.option.mode) {
            appOpt.mode = this.option.mode;
        }
        if (appConfig && appConfig.mode) {
            appOpt.mode = appConfig.mode;
        }
        if (this.option.switchMode) {
            appOpt.switchMode = this.option.switchMode;
        }
        apps.push(appOpt);
        window.apps = apps;
    };
    Mooa.prototype.registerApplicationByLink = function (appName, link, activeWhen, customProps) {
        if (customProps === void 0) { customProps = {}; }
        this.checkActiveWhen(activeWhen);
        var appConfig = {
            name: appName,
            scripts: [],
            selector: "app-" + appName,
            // baseScriptUrl: link,
            styles: [],
            parentElement: '',
            prefix: '',
            preload: false,
            includeZone: true
        };
        appConfig = this.mergeAppConfigOption(appConfig);
        if (this.option.urlPrefix) {
            appConfig.prefix = this.option.urlPrefix + '/' + appConfig.name;
        }
        var appOpt = {
            name: appName,
            appConfig: appConfig,
            activeWhen: activeWhen,
            sourceType: 'link',
            mode: '',
            switchMode: '',
            status: StatusEnum.NOT_LOADED,
            customProps: customProps
        };
        if (this.option.mode) {
            appOpt.mode = this.option.mode;
        }
        if (this.option.switchMode) {
            appOpt.switchMode = this.option.switchMode;
        }
        apps.push(appOpt);
        window.apps = apps;
    };
    Mooa.prototype.start = function () {
        this.started = true;
        window.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function (event) {
            if (event.detail) {
                navigateAppByName(event.detail);
            }
        });
        return this.reRouter();
    };
    Mooa.prototype.rcStart = function (history) {
        this.started = true;
        window.addEventListener(MOOA_EVENT.ROUTING_NAVIGATE, function (event) {
            if (event.detail) {
                rcNavigateAppByName(event.detail);
            }
        });
        return this.rcReRouter(history);
    };
    /**
     * @desc
     * eventArguments is used for ng2
     * 在react中，监听的不是router event，而是history的改变,
     * 当history改变时，会调用rerouter方法，并通知platform执行navigate方法
     */
    Mooa.prototype.reRouter = function (eventArguments) {
        var that = this;
        function performAppChanges() {
            return __awaiter(this, void 0, void 0, function () {
                var unloadPromises, unmountUnloadPromises, allUnmountPromises, unmountAllPromise, appsToLoad, loadThenMountPromises, mountPromises, err_1, activeApp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            customEvent(MOOA_EVENT.ROUTING_BEFORE);
                            unloadPromises = StatusHelper.getAppsToUnload().map(toUnloadPromise);
                            unmountUnloadPromises = StatusHelper.getAppsToUnmount(apps)
                                .map(toUnmountPromise)
                                .map(function (unmountPromise) { return unmountPromise.then(toUnloadPromise); });
                            allUnmountPromises = unmountUnloadPromises.concat(unloadPromises);
                            unmountAllPromise = Promise.all(allUnmountPromises);
                            appsToLoad = StatusHelper.getAppsToLoad(apps);
                            loadThenMountPromises = appsToLoad.map(function (app) {
                                return toLoadPromise(app)
                                    .then(toBootstrapPromise)
                                    .then(function (toMountApp) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, unmountAllPromise];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/, toMountPromise(toMountApp)];
                                            }
                                        });
                                    });
                                });
                            });
                            mountPromises = StatusHelper.getAppsToMount(apps)
                                .filter(function (appToMount) { return appsToLoad.indexOf(appToMount) < 0; })
                                .map(function (appToMount) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, toBootstrapPromise(appToMount)];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, unmountAllPromise];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/, toMountPromise(appToMount)];
                                        }
                                    });
                                });
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, unmountAllPromise];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            throw err_1;
                        case 4: return [4 /*yield*/, Promise.all(loadThenMountPromises.concat(mountPromises))];
                        case 5:
                            _a.sent();
                            if (eventArguments) {
                                activeApp = StatusHelper.getActiveApps(apps)[0];
                                if (activeApp && activeApp['appConfig']) {
                                    that.createRoutingChangeEvent(eventArguments, activeApp);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        return performAppChanges();
    };
    Mooa.prototype.rcReRouter = function (history) {
        var location = getHistoryLocation(history);
        var that = this;
        function performAppChanges() {
            return __awaiter(this, void 0, void 0, function () {
                var unloadPromises, unmountUnloadPromises, allUnmountPromises, unmountAllPromise, appsToLoad, loadThenMountPromises, mountPromises, err_2, activeApp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            customEvent(MOOA_EVENT.ROUTING_BEFORE);
                            unloadPromises = StatusHelper.getAppsToUnload().map(toUnloadPromise);
                            unmountUnloadPromises = StatusHelper.getAppsToUnmount(apps, location)
                                .map(toUnmountPromise)
                                .map(function (unmountPromise) { return unmountPromise.then(toUnloadPromise); });
                            allUnmountPromises = unmountUnloadPromises.concat(unloadPromises);
                            unmountAllPromise = Promise.all(allUnmountPromises);
                            appsToLoad = StatusHelper.getAppsToLoad(apps, location);
                            loadThenMountPromises = appsToLoad.map(function (app) {
                                return toLoadPromise(app)
                                    .then(toBootstrapPromise)
                                    .then(function (toMountApp) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, unmountAllPromise];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/, toMountPromise(toMountApp)];
                                            }
                                        });
                                    });
                                });
                            });
                            mountPromises = StatusHelper.getAppsToMount(apps, location)
                                // .filter((appToMount: any) => appsToLoad.indexOf(appToMount) < 0)
                                .map(function (appToMount) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, toBootstrapPromise(appToMount)];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, unmountAllPromise];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/, toMountPromise(appToMount)];
                                        }
                                    });
                                });
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, unmountAllPromise];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _a.sent();
                            throw err_2;
                        case 4: return [4 /*yield*/, Promise.all(loadThenMountPromises.concat(mountPromises))];
                        case 5:
                            _a.sent();
                            if (history) {
                                activeApp = StatusHelper.getActiveApps(apps)[0];
                                if (activeApp && activeApp['appConfig']) {
                                    that.rcCreateRoutingChangeEvent(history, activeApp);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        return performAppChanges();
    };
    Mooa.prototype.rcCreateRoutingChangeEvent = function (history, activeApp) {
        var location = getHistoryLocation(history);
        var eventArgs = {
            path: location.pathname,
            app: activeApp['appConfig']
        };
        if (activeApp.mode === 'iframe') {
            var iframeId = generateIFrameID(activeApp.name);
            var iframeEl = document.getElementById(iframeId);
            if (iframeEl && iframeEl.contentWindow) {
                iframeEl.contentWindow.mooa.option = window.mooa.option;
                iframeEl.contentWindow.dispatchEvent(new CustomEvent(MOOA_EVENT.ROUTING_CHANGE, { detail: eventArgs }));
                window.addEventListener(MOOA_EVENT.CHILD_ROUTING, function (event) {
                    var location = getHistoryLocation(history);
                    if (event.detail && event.detail.pathname !== location.pathname) {
                        history.push(event.detail.pathname);
                    }
                });
            }
        }
        // } else {
        //   customEvent(MOOA_EVENT.ROUTING_CHANGE, eventArgs)
        // }
    };
    Mooa.prototype.createRoutingChangeEvent = function (eventArguments, activeApp) {
        var eventArgs = {
            url: eventArguments.url,
            app: activeApp['appConfig']
        };
        if (activeApp.mode === 'iframe') {
            var iframeId = generateIFrameID(activeApp.name);
            var iframeEl = document.getElementById(iframeId);
            if (iframeEl && iframeEl.contentWindow) {
                iframeEl.contentWindow.mooa.option = window.mooa.option;
                iframeEl.contentWindow.dispatchEvent(new CustomEvent(MOOA_EVENT.ROUTING_CHANGE, { detail: eventArgs }));
            }
        }
        else {
            customEvent(MOOA_EVENT.ROUTING_CHANGE, eventArgs);
        }
    };
    Mooa.prototype.mergeAppConfigOption = function (appConfig) {
        if (this.option.parentElement) {
            appConfig.parentElement = this.option.parentElement;
        }
        if (this.option.preload) {
            appConfig.preload = true;
        }
        if (this.option.includeZone === false) {
            appConfig.includeZone = false;
        }
        return appConfig;
    };
    Mooa.prototype.checkActiveWhen = function (activeWhen) {
        if (!activeWhen) {
            throw new Error("Lost Loader");
        }
        if (typeof activeWhen !== 'function') {
            throw new Error("The activeWhen argument must be a function");
        }
    };
    return Mooa;
}());
var mooaRouter = new MooaRouter();
var mooaPlatform = new MooaPlatform();

exports.default = Mooa;
exports.mooaRouter = mooaRouter;
exports.mooaPlatform = mooaPlatform;
exports.MooaProvider = MooaProvider;
exports.MooaAppContainer = appContainer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mooa.umd.js.map
