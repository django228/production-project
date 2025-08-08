import { classNames } from 'helpers/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/hooks';
import DarkThemeIcon from 'shared/assets/icons/dark-theme-icon.svg';
import LightThemeIcon from 'shared/assets/icons/light-theme-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

function ThemeIcon(theme: string): React.ReactComponentElement<any> {
    return theme === 'dark' ? <DarkThemeIcon /> : <LightThemeIcon />;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            type="button"
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {ThemeIcon(theme)}
        </Button>
    );
};
