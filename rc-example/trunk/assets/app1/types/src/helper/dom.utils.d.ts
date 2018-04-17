import { MooaApp } from '../model/IAppOption';
export declare function createApplicationContainer(mooaApp: MooaApp): any;
export declare function removeApplicationContainer(app: MooaApp): any;
export declare function isIframeElementExist(mooaApp: MooaApp): HTMLElement | null;
export declare function isElementExist(appName: string): any;
export declare function createApplicationIframeContainer(mooaApp: MooaApp): any;
export declare function removeApplicationIframeContainer(app: MooaApp): void;
export declare function generateIFrameID(name: string): string;
export declare function createElement(options: any): any;
