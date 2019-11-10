"use strict";

/// <reference path="../phaser.ts" />

import { Loader } from "phaser";
import { load } from "webfontloader";

import { LoaderConfig, LoaderOptions } from "../interfaces/options";

export class WebFontFile extends Loader.File {

    public readonly config: LoaderConfig;

    constructor(loader: Loader.LoaderPlugin, fileOptions: LoaderOptions) {

        super(loader, fileOptions);
    }

    public load(): void {

        if (this.state === Loader.FILE_POPULATED) {
            this.loader.nextFile(this, true);
        } else {
            const config: LoaderConfig = Object.assign<{}, LoaderConfig, Partial<LoaderConfig>>({}, this.config, {
                active: this.onLoad.bind(this),
                inactive: this.onError.bind(this),
                fontactive: this.onFontActive.bind(this),
                fontinactive: this.onFontInactive.bind(this),
                fontloading: this.onFontLoading.bind(this),
            });

            load(config);
        }
    }

    public onLoad(): void {

        this.loader.nextFile(this, true);
    }

    public onError(): void {

        this.loader.nextFile(this, false);
    }

    public onFontActive(familyName: string, fvd: string): void {

        this.loader.emit("webfontactive", familyName, fvd, this);
    }

    public onFontInactive(familyName: string, fvd: string): void {

        this.loader.emit("webfontinactive", familyName, fvd, this);
    }

    public onFontLoading(familyName: string, fvd: string): void {

        this.loader.emit("webfontloading", familyName, fvd, this);
    }
}

export default WebFontFile;
