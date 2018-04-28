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