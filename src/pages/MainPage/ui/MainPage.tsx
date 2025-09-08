import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTheme } from 'app/hooks';

const MainPage = () => {
    const { t } = useTranslation('main');
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('Добро пожаловать на главную страницу')}</h1>
            <p>{t('Это демонстрационное приложение с переключением тем и языками.')}</p>
            
            <div style={{ marginTop: '20px' }}>
                <h2>{t('Функции приложения')}</h2>
                <ul>
                    <li>{t('Переключение между светлой и темной темой')}</li>
                    <li>{t('Поддержка нескольких языков (русский/английский)')}</li>
                    <li>{t('Адаптивный дизайн')}</li>
                    <li>{t('Ленивая загрузка страниц')}</li>
                </ul>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h2>{t('Текущие настройки')}</h2>
                <p>{t('Текущая тема')}: {theme}</p>
                <Button theme={ThemeButton.OUTLINE} onClick={toggleTheme}>
                    {t('Переключить тему')}
                </Button>
            </div>
        </div>
    );
};

export default MainPage;
