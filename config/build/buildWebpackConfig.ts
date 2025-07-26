import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "bundle.js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            // Здесь конфигурируем лоадеры.
            // Обрабатываем все типы файлов, выходящие за границы JS
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}
