import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import {
  Layout,
} from 'antd';

import Nav from './nav';

const { Header, Content, Sider, Footer } = Layout;

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
            <Content id="app-home"
              style={{
                background: '#fff',
                padding: '0 24px',
                margin: 0,
                height: '70vh'
              }}
            >
              <Route exact path="/" render={() => <div>test</div>} />
              <Route path="/app2" render={() => <div>app2 content</div>} />
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