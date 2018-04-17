/// <reference types="react" />
import { Component } from 'react';
export declare type RootProps = {
    match?: string;
};
export declare type RootStates = {};
declare class Root extends Component<RootProps, RootStates> {
    constructor(props: RootProps);
    render(): JSX.Element;
}
export default Root;
