import {classNames} from "helpers/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

import EnglishIcon from "shared/assets/icons/en-lang-icon.svg"
import RussianIcon from "shared/assets/icons/ru-lang-icon.svg"

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}:LangSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? 'ru' : 'en');
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={changeLanguage} className={classNames(cls.LangSwitcher, {}, [className])}>
            {i18n.language === "en" ? <EnglishIcon className={cls.icon} /> : <RussianIcon className={cls.icon}/>}
        </Button>
    );
};