import { MooaApp } from '../model/IAppOption';
export declare function getAppNames(): any;
export declare function unloadApplication(appName: any, opts?: {
    waitForUnmount: boolean;
}): any;
export declare function appendFunc(app: MooaApp): MooaApp;
export declare function toUnmountPromise(app: any): Promise<any>;
