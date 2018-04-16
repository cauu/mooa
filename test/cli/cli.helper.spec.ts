jest.mock('request')

import { getAppsConfig } from '../../src/cli/cli.help'

test('should be able to generate app config file', async () => {
  require('request').__setMockPage('app1', 'app1-root', 'main.js', 'style.css')

  const configs = await getAppsConfig(['test'])

  jest.unmock('request')

  expect(configs).toMatchObject([
    {
      name: 'app1',
      prefix: 'app1',
      scripts: ['main.js'],
      styles: [],
      selector: {
        tagName: 'div',
        attributes: {
          id: 'app1-root'
        }
      }
    }
  ])
})
