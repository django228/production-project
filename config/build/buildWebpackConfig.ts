import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'bundle.js',
            path: paths.build,
            clean: true,
            publicPath: options.isDev ? '/' : (process.env.GITHUB_PAGES ? '/production-project/' : '/'),
        },
        plugins: buildPlugins(options),
        module: {
            // Здесь конфигурируем лоадеры.
            // Обрабатываем все типы файлов, выходящие за границы JS
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}
