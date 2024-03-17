import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions):webpack.Configuration => {
return  {
    // mode - this property defines how webpack will bundle application. Can be dev and prod
    // Production mode will make webpack optimize(minify) code
    mode: 'development',
    // entry - property that is responsible for setting entry point of the app
    // __dirname - current folder
    entry: options.paths.entry,
    // output - property is responsible for handling where and how bundled will be created and placed
    output: {
        // filename - name of the main output file
        // [name] - will use default name for the file(main.js)
        // [contenthash] - these unique numbers change when code in the app changes, it is important because of the way caching works
        // browser caches pages and in case [contenthash] will be the same, it will use cached version of the app
        // [contenthash] changes when the new version of the app is released with some changes in the code
        filename: "[name].[contenthash].js",
        // path - path to the folder where bundle will be stored
        path: options.paths.build,
        // will remove all outdated files from previous builds
        clean: true
    },
    // A webpack plugin is a JavaScript object that has an apply method and is capable of certain functionality. This apply method is
    // called by the webpack compiler, giving access to the entire compilation lifecycle.
    plugins: buildPlugins(options),
    // loaders. one of the most important properties in webpack, they are used to set the rules for handling non-js files(css, scss, ts, ts, png, img, etc)
    // the sequence in which loaders are fired matters!
    module: {
        rules: buildLoaders()
    },
    // these settings are necessary to implement typescript
    resolve: buildResolvers()
}
}
