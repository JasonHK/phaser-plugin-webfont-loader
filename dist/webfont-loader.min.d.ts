declare module WebFontLoaderPlugin {	module WebFontLoaderPlugin {	import { WebFontLoaderPlugin } from "./webfont-plugin";
		/// <reference types="webfontloader" />
		import { WebFontFile } from "./core/webfont-loader";
		import { LoaderConfig, LoaderOptions } from "./interfaces/options";
		type WebFontEvents = "webfontactive" | "webfontinactive" | "webfontloading";
		interface WebFontEventListener {
		    (familyName: string, fvd: string, fileObject: WebFontFile): void;
		}
		module "phaser" {
		    namespace Loader {
		        interface LoaderPlugin {
		            webfont(config: LoaderConfig): Loader.LoaderPlugin;
		            webfont(options: LoaderOptions): Loader.LoaderPlugin;
		            webfont(key: string, config: LoaderConfig): Loader.LoaderPlugin;
		            listeners(event: WebFontEvents): WebFontEventListener[];
		            listeners(event: string | symbol): any[];
		            listenerCount(event: string | symbol): number;
		            listenerCount(event: WebFontEvents): number;
		            emit(event: WebFontEvents, familyName: string, fvd: string, fileObject: WebFontFile): boolean;
		            emit(event: string | symbol, ...args: any[]): boolean;
		            on(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;
		            on(event: string | symbol, fn: Function, context?: any): this;
		            addListener(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;
		            addListener(event: string | symbol, fn: Function, context?: any): this;
		            once(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;
		            once(event: string | symbol, fn: Function, context?: any): this;
		            removeListener(event: WebFontEvents, fn: WebFontEventListener, context?: any, once?: boolean): this;
		            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
		            off(event: WebFontEvents, fn: WebFontEventListener, context?: any, once?: boolean): this;
		            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
		            removeAllListeners(event: WebFontEvents): this;
		            removeAllListeners(event?: string | symbol): this;
		        }
		    }
		}
		import { Plugins, Scene } from "phaser";
		export class WebFontLoaderPlugin extends Plugins.BasePlugin {
		    constructor(pluginManager: Plugins.PluginManager);
		    addToScene(scene: Scene): void;
		}
		export default WebFontLoaderPlugin;
		/// <reference types="webfontloader" />
		import { Loader } from "phaser";
		import { LoaderConfig, LoaderOptions } from "../interfaces/options";
		export function loaderCallback(config: LoaderConfig): Loader.LoaderPlugin;
		export function loaderCallback(options: LoaderOptions): Loader.LoaderPlugin;
		export function loaderCallback(key: string, config?: LoaderConfig): Loader.LoaderPlugin;
		export default loaderCallback;
		/// <reference types="webfontloader" />
		import { Loader } from "phaser";
		import { LoaderConfig, LoaderOptions } from "../interfaces/options";
		export class WebFontFile extends Loader.File {
		    readonly config: LoaderConfig;
		    constructor(loader: Loader.LoaderPlugin, fileOptions: LoaderOptions);
		    load(): void;
		    onLoad(): void;
		    onError(): void;
		    onFontActive(familyName: string, fvd: string): void;
		    onFontInactive(familyName: string, fvd: string): void;
		    onFontLoading(familyName: string, fvd: string): void;
		}
		export default WebFontFile;
		import { Types } from "phaser";
		import { Config as LoaderConfig } from "webfontloader";
		type LoaderConfigObject = LoaderConfig;
		export type Options = LoaderConfig | LoaderOptions;
		export namespace Options {
		    type LoaderConfig = LoaderConfigObject;
		    type LoaderOptions = LoaderConfigObject;
		}
		export interface LoaderOptions extends Types.Loader.FileConfig {
		    type: "WebFont";
		    url: string;
		    config: LoaderConfig;
		}
		export { Config as LoaderConfig } from "webfontloader";
		export default Options;
		import { LoaderOptions, Options } from "../interfaces/options";
		export function isLoaderOptions(object: Options): object is LoaderOptions;
	}

}