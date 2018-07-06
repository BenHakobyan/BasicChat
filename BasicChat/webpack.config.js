'use strict';

const webpack = require('webpack');
const path = require('path');

const bundleFolder = "./wwwroot/dist/";
const srcFolder = "./ClientApp/"

module.exports = {
    entry: [
        srcFolder + "index.jsx"
    ],
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        publicPath: 'dist/',
        path: path.resolve(__dirname, bundleFolder)
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }
        ]
    },
    plugins: [
    ]
};