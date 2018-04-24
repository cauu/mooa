import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Mooa from '../mooa';

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
      mooaMounted: PropsTypes.func,
      addMooaListener: PropsTypes.func
    };

    constructor(props: AppContainerProvider, context: any) {
      super(props, context);

      this.mooa = context.mooa;

      /**
       * @desc
       */
      this.state = {
      };
    }

    componentDidMount() {
      const { addMooaListener, mooaMounted, mooaHistory } = this.context;

      mooaMounted && mooaMounted() && this.mooa.rcStart(mooaHistory);

      debugger;

      addMooaListener && addMooaListener((history: any) => {
        /**
         * @desc mooa.rcStart需要在config文件成功注册之后执行
         */
        this.mooa.rcStart(history);
      });
    }

    componentWillUnmount() {
      /**
       * unmount的时候，需要成功卸载掉之前加载的组件
       */
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
