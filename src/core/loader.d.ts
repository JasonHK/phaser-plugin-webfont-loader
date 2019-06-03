import { Loader } from "phaser";
import { Config } from "webfontloader";

export interface LoaderOptions {
    config: Config;
    key:    string;
    type:   "webfont";
    url:    string;
}

export class WebFontFile extends Loader.File {

    public config: LoaderOptions;

    constructor(loader: Loader.LoaderPlugin, fileConfig: LoaderOptions);

    public load(): void;

    public onLoad(): void;
    public onError(): void;

    public onFontActive(familyName: string, fvd: string): void;
    public onFontInactive(familyName: string, fvd: string): void;
    public onFontLoading(familyName: string, fvd: string): void;
}

export default WebFontFile;
