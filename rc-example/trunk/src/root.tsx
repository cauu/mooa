import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import {
  Layout,
} from 'antd';

import MooaAppContainer from '../../../src/component/app-container';
import Nav from './nav';
import SubPage from './subpage';

const { Header, Content, Sider, Footer } = Layout;

const MooaContent = MooaAppContainer(SubPage);

export type RootProps = {
  history?: any;
};
export type RootStates = {};

class Root extends Component<RootProps, RootStates> {
  private unsubscribeFromHistory: any;

  constructor(props: RootProps) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header>
          <h3 style={{ color: 'white', fontWeight: 'bold' }}>
            Multiple SPA
          </h3>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider width={200} style={{ height: '70vh', background: '#fff' }}>
              <Nav />
            </Sider>
            <Content
              style={{
                background: '#fff',
                padding: '0 24px',
                margin: 0,
                height: '70vh'
              }}
            >
              <Route path="/app*" render={() => <MooaContent id="app-home" />} />
              <Route path="/fuck" render={() => <div>app2 content</div>} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Mooa @2018 Created by Martin
        </Footer>
      </Layout>
    );
  }
}

export default Root;