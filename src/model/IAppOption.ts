export interface ISelector {
  tagName: string
  className?: string
  attributes?: any
  html?: string
  text?: string
  childs?: ISelector
}

export interface IAppOption {
  name: string
  selector: string | ISelector
  baseScriptUrl: string
  styles: string[]
  scripts: string[]
  prefix: string
  parentElement: string
}

export interface MooaApp extends IAppOption {
  appConfig: IAppOption
  sourceType?: string
  mode: string
  switchMode: string
  status: string
  bootstrap: any
  load: any
  mount: any
  unload: any
  unmount: any
  timeouts: any
  unloadApplication: any
  getAppNames: any
}
