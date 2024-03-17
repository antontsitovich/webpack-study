import webpack from "webpack";

export const buildResolvers = (): webpack.ResolveOptions => {
    return {
        // extension is property that is needed for importing files without .extension
        // import Component from './component.tsx" --> import Component from './component'
        extensions: ['.tsx', '.ts', '.js']
    }
}
