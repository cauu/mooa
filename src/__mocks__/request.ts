let request = jest.genMockFromModule('request')

let __mockHTML = ''

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
        <link href="${styles}">
      </head>
      <body>
        <div id="${id}" />
        <script src="${src}" />
      </body>
    </html>
  `
}

function mockRequest(url, callback) {
  setTimeout(() => {
    callback(null, null, __mockHTML)
  }, 500)
}

mockRequest.__setMockPage = __setMockPage

mockRequest.prototype = Object.create(request)

module.exports = mockRequest
