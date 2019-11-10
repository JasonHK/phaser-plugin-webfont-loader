"use strict";

import { isPlainObject } from "is-what";

import { LoaderOptions, Options } from "../interfaces/options";

export function isLoaderOptions(object: Options): object is LoaderOptions {

    return isPlainObject(object) && Object.prototype.hasOwnProperty.call(object, "config");
}
