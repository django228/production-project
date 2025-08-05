import React, {Suspense} from "react";
import './styles/index.scss';
import {Route, Routes, Link} from "react-router-dom";

import Counter from "./components/Counter";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Button} from "@storybook/react/demo";
import {useTheme} from "./hooks/useTheme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Button onClick={toggleTheme}>theme</Button>
            <br></br>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Link to={"/counter"}>Счётчик</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/counter"} element={<Counter/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
