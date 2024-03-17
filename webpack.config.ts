import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";
// webpack runs in node.js environment and node has path module that is used to work with paths. In different OS's paths can
// differ, so, to properly handle any paths in the app, path should be used
import path from "path";

// should be exported by default, webpack won't work without it
// when exported as a function, env variables are available via
// fn params straight from the scripts
export default (env: BuildEnv): webpack.Configuration => {
    const paths:BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build')
    }

    const mode: BuildMode = env.mode || 'development'
    // isDev is not necessary variable it is added mostly for convenience
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    return buildWebpackConfig({
        mode,
        isDev,
        paths: paths,
        port: PORT
    })}
