export declare class MooaPlatform {
    name: string;
    router: any;
    history: any;
    mount(name: string, history?: any): Promise<{}>;
    unmount(module: any): void;
    appBase(location?: any): string;
    navigateTo(opts: any): void;
    notifyParent(location?: any): void;
    handleRouterUpdate(history: any, appName: string): void;
    private isSingleSpaApp();
}
export default MooaPlatform;
