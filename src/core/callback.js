"use strict";

import { Utils } from "phaser";

import { WebFontFile } from "./loader";

/**
 * @param {string|Options} key
 * @param {Options}        [options]
 * @return {LoaderPlugin}
 * @this {LoaderPlugin}
 */
export function callback(key, options) {

    if (Utils.Objects.IsPlainObject(key)) {
        options = key;
        if (Object.prototype.hasOwnProperty.call(options, "config")) {
            options.type = "Webfont";
            options.url = "";
        } else {
            options = {
                config: options,
                key: "Webfont",
                type: "Webfont",
                url: "",
            };
        }
    } else {
        options = {
            config: options,
            key: key,
            type: "Webfont",
            url: "",
        };
    }

    this.addFile(new WebFontFile(this, options));
    return this;
}

export default callback;

/** @typedef {import("phaser").Loader.LoaderPlugin} LoaderPlugin */
/** @typedef {import("./callback").Options} Options */
