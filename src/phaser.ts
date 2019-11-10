"use strict";

import { WebFontFile } from "./core/webfont-loader";

import { LoaderConfig, LoaderOptions } from "./interfaces/options";

type WebFontEvents = "webfontactive" | "webfontinactive" | "webfontloading";

interface WebFontEventListener
{
    (familyName: string, fvd: string, fileObject: WebFontFile): void;
}

declare module "phaser" {

    export namespace Loader
    {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        export interface LoaderPlugin
        {
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
