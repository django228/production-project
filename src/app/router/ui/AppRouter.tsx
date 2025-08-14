import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
