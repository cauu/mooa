export declare class MooaPlatform {
    name: string;
    router: any;
    mount(name: string, router?: any): Promise<{}>;
    unmount(module: any): void;
    appBase(location?: any): string;
    navigateTo(opts: any): void;
    handleRouterUpdate(router: any, appName: string): void;
    private isSingleSpaApp();
}
export default MooaPlatform;
