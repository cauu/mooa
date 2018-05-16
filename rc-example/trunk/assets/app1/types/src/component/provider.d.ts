import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { default as Mooa } from '../mooa';
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
    private mooa;
    private router;
    private history;
    private configs;
    private mounted;
    private listeners;
    private unlisten;
    static childContextTypes: {
        mooa: PropsTypes.Requireable<any>;
        mooaMounted: PropsTypes.Requireable<any>;
        mooaRouter: PropsTypes.Requireable<any>;
        mooaHistory: PropsTypes.Requireable<any>;
        addMooaListener: PropsTypes.Requireable<any>;
    };
    getChildContext(): {
        mooa: Mooa;
        mooaRouter: any;
        mooaHistory: any;
        mooaMounted: () => boolean;
        addMooaListener: (func: Function) => void;
    };
    constructor(props: MooaProviderProps, context: any);
    private initConfig;
    private addMooaListener;
    private notifyChildren;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any>;
}
