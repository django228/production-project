import React from "react";
import './styles/index.scss';
import {Link} from "react-router-dom";

import {Button} from "@storybook/react/demo";
import {useTheme} from "app/hooks";
import {classNames} from "helpers/classNames/classNames";
import {AppRouter} from "app/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Button onClick={toggleTheme}>theme</Button>
            <br></br>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <AppRouter />

        </div>
    );
};

export default App;
