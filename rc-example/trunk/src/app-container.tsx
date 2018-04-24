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
      mooaMounted: PropsTypes.func,
      addMooaListener: PropsTypes.func
    };

    constructor(props: AppContainerProvider, context: any) {
      super(props, context);

      this.mooa = context.mooa;
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
       * @todo 如果节点执行unmount，那么会对节点上挂载的所有app执行unmount
       */
      const { mooaHistory } = this.context;

      debugger;

      this.mooa.rcStop(mooaHistory);
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
