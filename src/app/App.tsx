import React, { Suspense } from 'react';
import './styles/index.scss';

import { useTheme } from 'app/hooks';
import { classNames } from 'helpers/classNames/classNames';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={null}>
                <Navbar />
                <Sidebar />
                <div className="content-page">
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
