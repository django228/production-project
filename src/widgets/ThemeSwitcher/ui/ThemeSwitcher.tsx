import {classNames} from "helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "app/hooks";
import DarkThemeIcon from 'shared/assets/icons/dark-theme-icon.svg'
import LightThemeIcon from 'shared/assets/icons/light-theme-icon.svg'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
            TOGGLE
            <DarkThemeIcon />
        </button>
    );
};