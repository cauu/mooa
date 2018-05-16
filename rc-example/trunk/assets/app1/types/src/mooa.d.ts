import { MooaOption } from './model/MooaOption';
import MooaRouter from './router';
import { MooaPlatform } from './platform/platform';
export { default as MooaProvider } from './component/provider';
export { default as MooaAppContainer } from './component/app-container';
declare class Mooa {
    started: boolean;
    private option;
    constructor(option: MooaOption);
    registerApplication(appName: string, appConfig?: any, activeWhen?: {}, customProps?: Object): void;
    registerApplicationByLink(appName: string, link?: string, activeWhen?: {}, customProps?: Object): void;
    start(history?: any): Promise<void>;
    reRouter(history?: any): Promise<void>;
    unmount(): void;
    createRoutingChangeEvent(history: any, activeApp: any): void;
    private mergeAppConfigOption(appConfig);
    private checkActiveWhen(activeWhen);
}
export default Mooa;
export declare const mooaRouter: MooaRouter;
export declare const mooaPlatform: MooaPlatform;
