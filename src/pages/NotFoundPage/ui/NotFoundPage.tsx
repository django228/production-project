import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notfound');

    const asciiArt = `
    4 0 4
    -----
    ERROR
    `;

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.scanlines}></div>
            <div className={cls.terminal}>
                <div className={cls.terminalHeader}>
                    <div className={cls.terminalTitle}>system@localhost:~</div>
                </div>
                
                <div className={cls.terminalContent}>
                    <div className={cls.prompt}>ls /pages/requested-page</div>
                    <div className={cls.errorMessage}>ls: cannot access '/pages/requested-page': No such file or directory</div>
                    
                    <div className={cls.errorCode}>404</div>
                    
                    <div className={cls.asciiArt}>{asciiArt}</div>
                    
                    <div className={cls.prompt}>cat error.log</div>
                    <div className={cls.errorMessage}>ERROR: {t('Страница не найдена')}</div>
                    <div className={cls.suggestion}>{t('К сожалению, запрашиваемая страница не существует или была перемещена')}</div>
                    
                    <div className={cls.prompt}>help --navigation</div>
                    <div className={cls.suggestion}>Available commands:</div>
                    
                    <div className={cls.commands}>
                        <AppLink to="/" className={cls.command}>
                            cd /home - {t('На главную')}
                        </AppLink>
                        <button 
                            onClick={handleGoBack}
                            className={cls.command}
                        >
                            cd .. - {t('Назад')}
                        </button>
                    </div>
                    
                    <div className={cls.prompt}>
                        <span className={cls.cursor}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;