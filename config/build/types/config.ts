export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string, // путь до entrypoint
    build: string, // путь до сборки
    html: string,
    src: string,
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
