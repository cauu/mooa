import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

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
      <Route path="/" render={() => <div>test</div>} />
    );
  }
}

export default Root;