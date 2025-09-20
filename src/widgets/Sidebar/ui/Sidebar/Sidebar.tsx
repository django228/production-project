import { useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation('main');

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    const scrollToChapter = (chapterId: string) => {
        const element = document.getElementById(chapterId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Chapters data
    const chapters = [
        { id: '00', title: t('book.dedication.title2') },
        { id: '01', title: t('book.chapter1.title') },
        { id: '02', title: t('book.chapter2.title') },
        { id: '03', title: t('book.chapter3.title') },
    ];

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button className={cls.toggleBtn} onClick={onToggle}>
                {collapsed ? '»' : '«'}
            </button>
            
            {collapsed ? (
                <div className={cls.collapsedContent}>
                    <div className={cls.collapsedLabel}>{t('book.title')}</div>
                </div>
            ) : (
                <div className={cls.chapterList}>
                    <h3 className={cls.chapterListTitle}>{t('book.title')}</h3>
                    <ul className={cls.chapterListItems}>
                        {chapters.map((chapter) => (
                            <li key={chapter.id} className={cls.chapterItem}>
                                <button 
                                    className={cls.chapterLink}
                                    onClick={() => scrollToChapter(chapter.id)}
                                >
                                    {chapter.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
