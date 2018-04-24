import React, { Component, Children } from 'react';
import PropsTypes from 'prop-types';
import axios from 'axios';

import { default as Mooa } from '../../../src/mooa';

export interface MooaProviderProps {
  mooa: Mooa;
  router: any;
  history: any;
  configUrl: string;
  children?: any;
}

export interface MooaProviderStates {
}

/**
 * @desc
 * 将mooa对象传给子组件
 */
export default class MooaProvider extends Component<MooaProviderProps, MooaProviderStates> {
  private mooa: Mooa;
  private router: any;
  private history: any;
  private configs: Array<Object> = [];
  private mounted: boolean = false;
  private listeners: Array<Function> = [];
  private unlisten: Function = () => { };

  static childContextTypes = {
    mooa: PropsTypes.any,
    mooaMounted: PropsTypes.bool,
    mooaRouter: PropsTypes.any,
    mooaHistory: PropsTypes.any,
    addMooaListener: PropsTypes.func
  };

  getChildContext() {
    return {
      mooa: this.mooa,
      mooaRouter: this.router,
      mooaHistory: this.history,
      mooaMounted: () => this.mounted,
      addMooaListener: this.addMooaListener
    };
  }

  constructor(props: MooaProviderProps, context: any) {
    super(props, context);

    this.mooa = props['mooa'];
    this.router = props['router'];
    this.history = props['history'];
  }

  private initConfig = (configUrl: string) => {
    const { mooa, router, history } = this;

    !this.mounted
      && axios.get(configUrl).then(({ data }) => {
        data.map((config: any) => {
          mooa.registerApplication(
            config.name,
            config,
            router.matchRoute(config.prefix)
          );
        });

        this.mounted = true;

        this.notifyChildren(history);
      })
      ;
  }

  private addMooaListener = (func: Function) => {
    this.listeners.push(func);
  }

  private notifyChildren = (history: any) => {
    this.listeners.forEach((lis: Function) => {
      lis && lis(history);
    });
  }

  componentWillMount() {
    this.initConfig(this.props.configUrl);

    this.unlisten = this.history.listen(() => {
      this.mooa.rcReRouter(this.history);
    });
  }

  componentWillUnmount() {
    this.mounted = false;

    this.unlisten();
  }

  render() {
    return (
      Children.only(this.props.children)
    );
  }
}