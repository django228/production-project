import webpack from "webpack";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config} : {config: webpack.Configuration}) => {

    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));

    config.resolve.extensions.push('.tsx', '.ts');
    config.module.rules.push(buildCssLoader(true));

    return config;
}