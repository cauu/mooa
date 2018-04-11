import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { mooaPlatform } from '../../../src/mooa';
import { createHashHistory } from 'history';
import Root from './root';

/**
 * @todo
 * 子应用需要监听父应用路由变化，并调整自身的路由,
 * （如果使用Iframe模式）当子应用的路由发生变化时，发送事件通知父应用
 */

const history = createHashHistory();

console.log('child location is', history.location)

history.listen((location: any) => {
  console.log('location changed');
  console.log(location);
});

mooaPlatform.mount('app1').then(() => {
  render(
    <Router basename={mooaPlatform.appBase(history.location)}>
      <div>
        <Route exact path="/" render={() => <Root />} />
        <Route path="/home" render={() => <div>app1 home</div>} />
        <Route exact path="/page1" render={() => <div>page1</div>} />
        <Route path="/page1/child" render={() => <div>page1/child</div>} />
        <Link to="/">
          back to home
        </Link>
      </div>
    </Router>,
    document.getElementById('app1-root')
  );
});