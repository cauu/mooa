import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export type RootProps = {
  match?: string;
};

export type RootStates = {
};

class Root extends Component<RootProps, RootStates> {
  constructor(props: RootProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/page1">
          to page1
        </Link>
        <Link to="/page1/child">
          to page1/child
        </Link>
        <Link to="home">
          to home
        </Link>
      </div>
    );
  }
}

export default Root;