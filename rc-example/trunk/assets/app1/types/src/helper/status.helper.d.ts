declare const StatusHelper: {
    getAppsToLoad: (apps: any, location?: any) => any;
    getAppsToUnload: () => any[];
    getAppUnloadInfo: (appName: any) => any;
    getAppsToUnmount: (apps: any, location?: any) => any;
    getAppsToMount: (apps: any, location?: any) => any;
    getActiveApps: (apps: any) => any;
};
export default StatusHelper;
