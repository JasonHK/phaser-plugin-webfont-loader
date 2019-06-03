"use strict";

import { Plugins } from "phaser";

import { callback } from "./core/callback";

export class WebFontLoaderPlugin extends Plugins.BasePlugin {

    /**
     * @param {PluginManager} pluginManager
     */
    constructor(pluginManager) {

        super(pluginManager);
        pluginManager.registerFileType("webfont", callback);
    }

    /**
     * @param {Scene} scene
     */
    addToScene(scene) {

        // @ts-ignore
        scene.load["webfont"] = callback;
    }
}

export default WebFontLoaderPlugin;

/** @typedef {import("phaser").Plugins.PluginManager} PluginManager */
/** @typedef {import("phaser").Scene} Scene */
