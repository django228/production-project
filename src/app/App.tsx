import React from "react";
import './styles/index.scss';

import {Button} from "@storybook/react/demo";
import {useTheme} from "app/hooks";
import {classNames} from "helpers/classNames/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Button onClick={toggleTheme}>theme</Button>
            <br></br>
            <Navbar />
            <AppRouter />

        </div>
    );
};

export default App;
