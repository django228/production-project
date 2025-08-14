import { classNames } from 'helpers/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className, 'page-wrapper'])}>
        <span className={cls.loader} />
    </div>
);
