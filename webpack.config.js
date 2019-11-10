"use strict";

const Path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const DeclarationBundlerPlugin = require("webpack-plugin-typescript-declaration-bundler");

module.exports = (env, argv) => {
    const isProduction = (argv.mode === "production");

    /** @type {Configuration} */
    const config = {
        context: Path.resolve(__dirname, "src"),
        entry: {
            "webfont-loader": "./index.ts",
            "webfont-loader.min": "./index.ts",
        },
        output: {
            path: Path.resolve(__dirname, "dist"),
            filename: "[name].js",
            library: "WebFontLoaderPlugin",
            libraryTarget: "umd",
            umdNamedDefine: true,
        },
        module: {
            rules: [{
                test:    /.tsx?$/i,
                exclude: /node_modules/,
                loader:  "ts-loader",
            }, { 
                enforce: "pre", 
                test:    /\.js$/, 
                loader:  "source-map-loader", 
            }],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        externals: {
            "phaser": "Phaser",
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    test: /\.min\.js$/i,
                    parallel: true,
                    sourceMap: true,
                    terserOptions: {
                        compress: true,
                        ie8: false,
                        ecma: 6,
                        warnings: false,
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
        plugins: [
            new DeclarationBundlerPlugin({
                moduleName: "WebFontLoaderPlugin",
                out: "webfont-loader.d.ts",
            }),
            new DeclarationBundlerPlugin({
                moduleName: "WebFontLoaderPlugin",
                out: "webfont-loader.min.d.ts",
            }),
        ],
        devtool: "source-map",
        devServer: {
            contentBase: Path.resolve(__dirname, "dist"),
            host: "0.0.0.0",
            inline: true,
            port: 7777,
        },
    };

    if (!isProduction) {
        //config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
        //    analyzerMode: "static",
        //    openAnalyzer: false,
        //}));
    } else if (isProduction) {
        //config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
        //    analyzerMode: "static",
        //    openAnalyzer: false,
        //}));
    }

    return config;
};

/** @typedef {import("webpack").Configuration} Configuration */
