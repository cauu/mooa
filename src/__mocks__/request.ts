let request = jest.genMockFromModule('request')

let __mockHTML: string = ''

let mockRequest: any = {}

// declare let __mockHTML: any

// declare let mockRequest: any

const __setMockPage = (
  name: string,
  id: string,
  src: string,
  styles: string
) => {
  __mockHTML = `
    <html>
      <head>
        <meta name="mooaAppName" content="${name}" />
        <link rel="stylesheet" href="${styles}">
      </head>
      <body>
        <div id="${id}" />
        <script src="${src}" />
      </body>
    </html>
  `
}

mockRequest = function(url: string, callback: any) {
  setTimeout(() => {
    callback(null, null, __mockHTML)
  }, 500)
}

mockRequest.__setMockPage = __setMockPage

mockRequest.prototype = Object.create(request)

module.exports = mockRequest
