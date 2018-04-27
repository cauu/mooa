import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createHashHistory } from 'history';

import axios from 'axios';

import { default as Mooa, mooaRouter } from '../../../src/mooa';
import { MOOA_EVENT } from '../../../src/model/constants';

import Root from './root';

import Provider from '../../../src/component/provider';

import './styles/app.scss';

declare const window: any;

const history = createHashHistory();

const mooa = new Mooa({
  mode: 'iframe',
  debug: true,
  parentElement: '#app-home',
  urlPrefix: 'app',
  switchMode: 'coexist',
  preload: true,
  includeZone: true
});

// function mooaWithConfig(history: any) {
//   axios.get('/assets/apps.json')
//     .then(({ data }) => {
//       data.map((config: any) => {
//         if (config.sourceType) {
//           mooa.registerApplicationByLink(config.name, config.link, mooaRouter.matchRoute(config.name));
//         } else {
//           mooa.registerApplication(config.name, config, mooaRouter.matchRoute(config.prefix));
//         }

//         mooa.rcStart(history);
//       });

//       history.listen(() => {
//         mooa.rcReRouter(history);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     ;
// }

// mooaWithConfig(history);

render(
  <Provider
    mooa={mooa}
    history={history}
    router={mooaRouter}
    configUrl={'/assets/apps.json'}
  >
    <Router>
      <div>
        <Root history={history} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);