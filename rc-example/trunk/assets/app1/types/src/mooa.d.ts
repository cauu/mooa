import { MooaOption } from './model/MooaOption';
import MooaRouter from './router';
import { MooaPlatform } from './platform/platform';
declare class Mooa {
    started: boolean;
    private option;
    constructor(option: MooaOption);
    registerApplication(appName: string, appConfig?: any, activeWhen?: {}, customProps?: object): void;
    registerApplicationByLink(appName: string, link?: string, activeWhen?: {}, customProps?: object): void;
    start(): Promise<void>;
    rcStart(history?: any): Promise<void>;
    /**
     * @desc
     * eventArguments is used for ng2
     * 在react中，监听的不是router event，而是history的改变,
     * 当history改变时，会调用rerouter方法，并通知platform执行navigate方法
     */
    reRouter(eventArguments?: any): Promise<void>;
    rcReRouter(history?: any): Promise<void>;
    rcCreateRoutingChangeEvent(history: any, activeApp: any): void;
    createRoutingChangeEvent(eventArguments: any, activeApp: any): void;
    private mergeAppConfigOption(appConfig);
    private checkActiveWhen(activeWhen);
}
export default Mooa;
export declare const mooaRouter: MooaRouter;
export declare const mooaPlatform: MooaPlatform;
