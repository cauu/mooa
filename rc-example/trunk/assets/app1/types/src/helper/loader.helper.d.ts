import { IAppOption } from '../model/IAppOption';
declare const LoaderHelper: {
    loadAllAssets: (opts: any) => Promise<{}>;
    loadAllAssetsByUrl: (opts: any) => Promise<{}>;
    loadAllAssetsForIframe: (opts: any) => Promise<{}>;
    loadAllAssetsForIframeAndUrl: (opts: any) => Promise<{}>;
    unloadTag: (opts: IAppOption, scriptName: string) => () => Promise<{}>;
};
export default LoaderHelper;
