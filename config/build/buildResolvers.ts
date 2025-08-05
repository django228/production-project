import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions) : ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // при импорте не указываем расширения.
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {} // for short import: {paths.src}shared/classNames
    }
}