import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options : BuildOptions) : webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath : string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[locale]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader',
        ]
    }

    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const svgLoader =
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }

    const fileLoader =
        {
            test: /\.(png|jpe?g|gif|woff2|woff)$/i,
            use:
            [
                {
                    loader: 'file-loader',
                }
            ]
        }

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}