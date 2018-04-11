import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createHashHistory } from 'history';

import axios from 'axios';

import { default as Mooa, mooaRouter } from '../../../src/mooa';

import Root from './root';

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

function mooaWithConfig() {
  axios.get('/assets/apps.json')
    .then(({ data }) => {
      data.map((config: any) => {
        if (config.sourceType) {
          mooa.registerApplicationByLink(config.name, config.link, mooaRouter.matchRoute(config.name));
        } else {
          mooa.registerApplication(config.name, config, mooaRouter.matchRoute(config.prefix));
        }

        mooa.rcStart(history.location);
      });
    })
    .catch((err) => {
      console.log(err);
    })
    ;
}

mooaWithConfig();

history.listen((location: any) => {
  console.log('rcReRouter', window['mooa']);
  mooa.rcReRouter(location);
});

render(
  <Router>
    <div>
      <Root history={history} />
      <div id="app-home"></div>
    </div>
  </Router>,
  document.getElementById('root')
);