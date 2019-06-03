"use strict";

import { Loader } from "phaser";
import { load } from "webfontloader";

export class WebFontFile extends Loader.File {

    /**
     * @param {LoaderPlugin}  loader
     * @param {LoaderOptions} fileOptions
     */
    constructor(loader, fileOptions) {

        super(loader, fileOptions);
    }

    load() {

        if (this.state === Loader.FILE_POPULATED) {
            this.loader.nextFile(this, true);
        } else {
            /** @type {LoaderOptions["config"]} */
            const config = this.config;
            config.active = this.onLoad.bind(this);
            config.inactive = this.onError.bind(this);
            config.fontactive = this.onFontActive.bind(this);
            config.fontinactive = this.onFontInactive.bind(this);
            config.fontloading = this.onFontLoading.bind(this);

            load(config);
        }
    }

    onLoad() {

        this.loader.nextFile(this, true);
    }

    onError() {

        this.loader.nextFile(this, false);
    }

    onFontActive(familyName, fvd) {

        this.loader.emit("webfontactive", familyName, fvd, this);
    }

    onFontInactive(familyName, fvd) {

        this.loader.emit("webfontinactive", familyName, fvd, this);
    }

    onFontLoading(familyName, fvd) {

        this.loader.emit("webfontloading", familyName, fvd, this);
    }
}

export default WebFontFile;

/** @typedef {import("phaser").Types.Loader.FileConfig} FileConfig */
/** @typedef {import("./loader").LoaderOptions} LoaderOptions */
/** @typedef {import("phaser").Loader.LoaderPlugin} LoaderPlugin */
