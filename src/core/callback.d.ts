import { Loader } from "phaser";
import { Config as LoaderConfig } from "webfontloader";

import { LoaderOptions } from "./loader";

declare type Options = LoaderConfig | LoaderOptions;

export function callback(config: LoaderConfig): Loader.LoaderPlugin;
export function callback(options: LoaderOptions): Loader.LoaderPlugin;
export function callback(key: string, config: LoaderConfig): Loader.LoaderPlugin;

export default callback;
