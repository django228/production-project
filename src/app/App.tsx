import React, {Suspense} from "react";
import './styles/index.scss';
import {Route, Routes, Link} from "react-router-dom";

import {Button} from "@storybook/react/demo";
import {useTheme} from "app/hooks";
import {classNames} from "helpers/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Button onClick={toggleTheme}>theme</Button>
            <br></br>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
