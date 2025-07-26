export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string, // путь до entrypoint
    build: string, // путь до сборки
    html: string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}