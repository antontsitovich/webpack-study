import webpack from "webpack";

export const buildLoaders = ():webpack.RuleSetRule[] => {
    // this loader is used for handling typescript files
    const typescriptLoader: webpack.RuleSetRule = {
            // this loader will work for matched files that's extension fits the regex condition(ts, tsx in this case)
            test: /\.tsx?$/,
            // loader that will handle matched files
            use: 'ts-loader',
            exclude: /node_modules/
        }

    return [
        typescriptLoader
    ]
}
