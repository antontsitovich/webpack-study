import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";
// webpack runs in node.js environment and node has path module that is used to work with paths. In different OS's paths can
// differ, so, to properly handle any paths in the app, path should be used
import path from "path";

const paths:BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
}

const mode: BuildMode = 'development'
// isDev is not necessary variable it is added mostly for convenience
const isDev = mode === 'development'

const webpackConfig: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    paths: paths,
})

// should be exported by default, webpack won't work without it
export default webpackConfig
