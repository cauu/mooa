export declare class MooaPlatform {
    name: string;
    router: any;
    history: any;
    rcMount(name: string, history?: any): Promise<{}>;
    mount(name: string, router?: any): Promise<{}>;
    unmount(module: any): void;
    appBase(location?: any): string;
    navigateTo(opts: any): void;
    notifyParent(location?: any): void;
    rcHandleRouterUpdate(history: any, appName: string): void;
    handleRouterUpdate(router: any, appName: string): void;
    private isSingleSpaApp();
}
export default MooaPlatform;
