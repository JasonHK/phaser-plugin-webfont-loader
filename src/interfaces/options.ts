"use strict";

import { Types } from "phaser";
import { Config as LoaderConfig } from "webfontloader";

type LoaderConfigObject = LoaderConfig;
type LoaderOptionsObject = LoaderOptions;

export type Options = LoaderConfig | LoaderOptions;

export namespace Options
{
    export type LoaderConfig = LoaderConfigObject;
    export type LoaderOptions = LoaderConfigObject;
}

export interface LoaderOptions extends Types.Loader.FileConfig
{
    type:   "WebFont";
    url:    string;
    config: LoaderConfig;
}

export { Config as LoaderConfig } from "webfontloader";

export default Options;
