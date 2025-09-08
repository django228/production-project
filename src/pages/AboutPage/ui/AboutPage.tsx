import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('О нашем приложении')}</h1>
            <p>
                {t(
                    'Это учебный проект, демонстрирующий современные подходы к разработке веб-приложений.',
                )}
            </p>

            <div style={{ marginTop: '20px' }}>
                <h2>{t('Технологии')}</h2>
                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Webpack</li>
                    <li>Sass/SCSS</li>
                    <li>React Router</li>
                    <li>i18next (интернационализация)</li>
                </ul>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>{t('Архитектура')}</h2>
                <p>{t('Проект следует подходу Feature-Sliced Design для организации кода.')}</p>
                <p>{t('Структура включает в себя:')}</p>
                <ul>
                    <li>{t('app - основная конфигурация приложения')}</li>
                    <li>{t('pages - страницы приложения')}</li>
                    <li>{t('widgets - самостоятельные блоки страниц')}</li>
                    <li>{t('features - бизнес-логика приложения')}</li>
                    <li>{t('entities - бизнес-сущности')}</li>
                    <li>{t('shared - переиспользуемые модули')}</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
