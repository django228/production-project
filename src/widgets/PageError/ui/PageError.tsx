import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const ReloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.errorContainer}>
                <div className={cls.errorIcon}>⚠️</div>
                <h1 className={cls.errorTitle}>{t('Упс! Что-то пошло не так')}</h1>
                <p className={cls.errorMessage}>{t('Произошла непредвиденная ошибка')}</p>
                <button className={cls.reloadButton} onClick={ReloadPage}>
                    {t('Перезагрузить страницу')}
                </button>
            </div>
        </div>
    );
};
