"use strict";

/// <reference path="./phaser.ts" />

import { Plugins, Scene } from "phaser";

import { loaderCallback } from "./core/loader-callback";

export class WebFontLoaderPlugin extends Plugins.BasePlugin {

    constructor(pluginManager: Plugins.PluginManager) {

        super(pluginManager);
        pluginManager.registerFileType("webfont", loaderCallback);
    }

    public addToScene(scene: Scene): void {

        scene.load.webfont = loaderCallback;
    }
}

export default WebFontLoaderPlugin;
