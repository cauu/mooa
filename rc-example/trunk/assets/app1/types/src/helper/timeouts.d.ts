export declare function reasonableTime(promise: any, description: any, timeoutConfig: any, app?: any): Promise<{}>;
export declare function ensureValidAppTimeouts(timeouts?: {}): {
    bootstrap: {
        millis: number;
        dieOnTimeout: boolean;
    };
    mount: {
        millis: number;
        dieOnTimeout: boolean;
    };
    unmount: {
        millis: number;
        dieOnTimeout: boolean;
    };
    unload: {
        millis: number;
        dieOnTimeout: boolean;
    };
};
