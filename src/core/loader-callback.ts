"use strict";

import { isPlainObject } from "is-what";
import { Loader } from "phaser";

import { LoaderConfig, LoaderOptions, Options } from "../interfaces/options";

import { isLoaderOptions } from "../utilities/type-assertions";

import { WebFontFile } from "./webfont-loader";

export function loaderCallback(config: LoaderConfig): Loader.LoaderPlugin;
export function loaderCallback(options: LoaderOptions): Loader.LoaderPlugin;
export function loaderCallback(key: string, config?: LoaderConfig): Loader.LoaderPlugin;
export function loaderCallback(this: Loader.LoaderPlugin, key: string | Options, config?: LoaderConfig): Loader.LoaderPlugin { // eslint-disable-line max-len

    let options: LoaderOptions;
    if (isPlainObject(key)) {
        if (isLoaderOptions(key)) {
            options = Object.assign<{}, LoaderOptions, Partial<LoaderOptions>>({}, key, {
                type: "WebFont",
                url: "",
            });
        } else {
            options = {
                config: key,
                key: "WebFont",
                type: "WebFont",
                url: "",
            };
        }
    } else {
        options = {
            config: config,
            key: key,
            type: "WebFont",
            url: "",
        };
    }

    this.addFile(new WebFontFile(this, options)); // eslint-disable-line no-invalid-this
    return this; // eslint-disable-line no-invalid-this
}

export default loaderCallback;
