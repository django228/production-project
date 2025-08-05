import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500); // искусственная задержка для того, чтобы увидеть ленивую загрузку чанков
}));
