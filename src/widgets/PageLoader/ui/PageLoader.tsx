import {classNames} from "helpers/classNames/classNames";
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}:PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className, 'page-wrapper'])}>
            <span className={cls.loader}></span>
        </div>
    );
};