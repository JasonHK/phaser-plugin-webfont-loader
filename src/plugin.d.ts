import * as Phaser from "phaser";
import { Plugins, Scene } from "phaser";
import { Config as LoaderConfig } from "webfontloader";

import { LoaderOptions } from "./core/loader";

declare module "phaser" {

    export namespace Loader {
        
        export class LoaderPlugin {
            webfont(config: LoaderConfig): Phaser.Loader.LoaderPlugin;
            webfont(options: LoaderOptions): Phaser.Loader.LoaderPlugin;
            webfont(key: string, config: LoaderConfig): Phaser.Loader.LoaderPlugin;
        }
    }
}

export class WebFontLoaderPlugin extends Plugins.BasePlugin {
    
    constructor(pluginManager: Plugins.PluginManager);

    public addToScene(scene: Scene): void;
}

export default WebFontLoaderPlugin;
