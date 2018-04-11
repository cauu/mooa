export declare class MooaRouter {
    routes: string[];
    lastPathName: string;
    defaultRoute: string;
    constructor();
    matchRoute(prefix: string, isDefaultPage?: boolean): (location: Location) => boolean;
    navigate(path: string): void;
    private pathMatch(location, path);
}
export default MooaRouter;
