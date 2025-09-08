import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig, AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            <Route
                key={AppRoutes.MAIN}
                path={RouteConfig[AppRoutes.MAIN].path}
                element={<div className="page-wrapper">{RouteConfig[AppRoutes.MAIN].element}</div>}
            />
            <Route
                key={AppRoutes.ABOUT}
                path={RouteConfig[AppRoutes.ABOUT].path}
                element={<div className="page-wrapper">{RouteConfig[AppRoutes.ABOUT].element}</div>}
            />
            <Route
                key={AppRoutes.NOT_FOUND}
                path={RouteConfig[AppRoutes.NOT_FOUND].path}
                element={
                    <div className="page-wrapper">{RouteConfig[AppRoutes.NOT_FOUND].element}</div>
                }
            />
        </Routes>
    </Suspense>
);

export default AppRouter;
