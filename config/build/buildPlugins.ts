// plugin to generate index.html and bond it with js bundle
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildPlugins = (option: BuildOptions):webpack.WebpackPluginInstance[] => {
    return [
        // the plugin to generate index.html and bond with js bundle
        new HtmlWebpackPlugin({
            // defines a template that will be used when generating the html file for build and inserting the bundle file
            template: option.paths.html,
            // defines where bundle javascript file will be injected
            inject: 'body'
        }),
        // adds a loading state in the console during build
        new webpack.ProgressPlugin()
    ]
}
