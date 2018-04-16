import { getAppsConfig } from '../../src/cli/cli.help'

test('should be able to generate app config file', async () => {
  let urls = ['http://localhost:8081/#/']

  const configs = await getAppsConfig(urls)

  expect(configs).toMatchObject([
    {
      name: 'app1',
      prefix: 'app1',
      scripts: ['main.js'],
      styles: [],
      selector: {
        tagName: 'div',
        attributes: {
          id: 'app1-root',
          class: 'test'
        }
      }
    }
  ])
})
