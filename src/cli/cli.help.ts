const request = require('request')
const cheerio = require('cheerio')
const NODEURL = require('url')

let apps: {}[] = []

function buildScripts($scripts: any) {
  let scripts: string[] = []
  if ($scripts.length > 0) {
    $scripts.map((index: any) => {
      let scriptSrc = $scripts[index].attribs.src
      if (!scriptSrc.endsWith('zone.js')) {
        scripts.push(scriptSrc)
      }
    })
  }

  return scripts
}

function buildLink($link: any) {
  let styles: string[] = []
  if ($link.length > 0) {
    $link.map((index: any) => {
      if ($link[index].attribs.rel === 'stylesheet') {
        styles.push($link[index].attribs.href)
      }
    })
  }

  return styles
}

function getAppName(appUrl: string) {
  const myURL = new NODEURL.Url(appUrl)
  let pathName = myURL.pathname
  let urlResources = pathName.split('/')
  let lastPath = urlResources[urlResources.length - 1]
  return { pathName, lastPath }
}

function getSelector($body: any) {
  let selector: any
  if ($body.length > 0) {
    let root = $body.children()['0']

    selector = {
      tagName: root.name,
      attributes: root.attribs
    }
  }
  return selector || ''
}

export async function generateAppConfigByUrl(appUrl: string) {
  return new Promise(function(resolve, reject) {
    request(appUrl, (error: any, response: any, body: any) => {
      if (error) {
        reject(appUrl)
        return console.log('URL Error', appUrl)
      }
      const $ = cheerio.load(body)

      let scripts: string[] = buildScripts($('script'))
      let styles: string[] = buildLink($('link'))
      let selector: string = getSelector($('body'))
      let appName = $("meta[name='mooaAppName']").attr('content')
      // let { pathName, lastPath } = getAppName(appUrl)

      let app = {
        name: appName,
        selector: selector,
        // baseScriptUrl: pathName,
        styles: styles,
        prefix: appName,
        scripts: scripts
      }

      apps.push(app)
      resolve(app)
    })
  })
}

export async function getAppsConfig(urls: string[]) {
  let appPromises: any = []

  urls.map((url: string) => {
    if (url) {
      appPromises.push(generateAppConfigByUrl(url))
    }
  })
  return Promise.all(appPromises)
}
