import * as phaser from "phaser";
import { Loader, Plugins, Scene } from "phaser";
import { Config as LoaderConfig } from "webfontloader";

import { LoaderOptions, WebFontFile } from "./core/loader";

type WebFontEvents = "webfontactive" | "webfontinactive";

declare module "phaser" {

    export namespace Loader {
        
        export interface LoaderPlugin {

            webfont(config: LoaderConfig): Loader.LoaderPlugin;
            webfont(options: LoaderOptions): Loader.LoaderPlugin;
            webfont(key: string, config: LoaderConfig): Loader.LoaderPlugin;

            listeners(event: string | symbol): any[];
            listeners(event: WebFontEvents): WebFontEventListener[];

            listenerCount(event: string | symbol): number;
            listenerCount(event: WebFontEvents): number;

            emit(event: string | symbol, ...args: any[]): boolean;
            emit(event: WebFontEvents, fileObject: WebFontFile, familyName: string, fvd: string): boolean;

            on(event: string | symbol, fn: Function, context?: any): this;
            on(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;

            addListener(event: string | symbol, fn: Function, context?: any): this;
            addListener(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;

            once(event: string | symbol, fn: Function, context?: any): this;
            once(event: WebFontEvents, fn: WebFontEventListener, context?: any): this;

            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
            removeListener(event: WebFontEvents, fn: WebFontEventListener, context?: any, once?: boolean): this;

            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
            off(event: WebFontEvents, fn: WebFontEventListener, context?: any, once?: boolean): this;

            removeAllListeners(event?: string | symbol): this;
            removeAllListeners(event: WebFontEvents): this;
        }
    }
}

export interface WebFontEventListener {
    (fileObject: WebFontFile, familyName: string, fvd: string): void;
}

export class WebFontLoaderPlugin extends Plugins.BasePlugin {
    
    constructor(pluginManager: Plugins.PluginManager);

    public addToScene(scene: Scene): void;
}

export default WebFontLoaderPlugin;
