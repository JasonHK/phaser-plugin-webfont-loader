"use strict";

const Path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    context: Path.resolve(__dirname, "src"),
    entry: {
        "webfont-loader": "./plugin.js",
        "webfont-loader.min": "./plugin.js",
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
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }],
    },
    externals: {
        "phaser": "Phaser",
    },
    plugins: [
        new UglifyJSPlugin({
            include: /\.min\.js$/,
            parallel: true,
            sourceMap: true,
            warningsFilter: (source) => false,
            uglifyOptions: {
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
    devtool: "source-map",
};
