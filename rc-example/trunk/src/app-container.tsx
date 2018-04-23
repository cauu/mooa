import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Mooa from '../../../src/mooa';

export interface AppContainerProvider {
  children?: any;
}

export default (WrappedComponent: any): any => {
  return class AppContainer extends Component<AppContainerProvider, any> {
    private mooa: Mooa;
    private unlisten: Function = () => { };

    static contextTypes = {
      mooa: PropsTypes.any,
      mooaRouter: PropsTypes.any,
      mooaHistory: PropsTypes.any,
      mooaMounted: PropsTypes.bool,
      addMooaListener: PropsTypes.func
    };

    constructor(props: AppContainerProvider, context: any) {
      super(props, context);

      this.mooa = context.mooa;
    }

    componentDidMount() {
      const { addMooaListener, mooaMounted } = this.context;

      mooaMounted && this.mooa.rcStart(history);

      addMooaListener && addMooaListener((history: any) => {
        /**
         * @desc mooa.rcStart需要在config文件成功注册之后执行
         */
        this.mooa.rcStart(history);

        this.unlisten = history.listen(() => {
          this.mooa.rcReRouter(history);
        });
      });
    }

    componentWillUnmount() {
      this.unlisten && this.unlisten();
    }

    render() {
      const { children, ...others } = this.props;

      return (
        <WrappedComponent {...others}>
          {children}
        </WrappedComponent>
      );
    }
  }
}
