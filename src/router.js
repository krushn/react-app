import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './pages/login/home/App';
import Login from './pages/start-ups/login/Login';
//import Error404 from './pages/errors/404/404';
import Error500 from './pages/errors/500/500';
import React, { Suspense } from 'react';

//lazy load route
const Error404 = React.lazy(() => import('./pages/errors/404/404'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/app" replace />
    },
    {
      path: "/app",
      element: <Suspense fallback="..."><App /></Suspense>,
    },
    {
      path: "/login",
      element: <Suspense fallback="..."><Login /></Suspense>
    },
    {
      path: "/404",
      element: <Suspense fallback="..."><Error404 /></Suspense>
    },
    {
      path: "/500",
      element: <Suspense fallback="..."><Error500 /></Suspense>
    },
    {
      path: "/*",
      element: <Suspense fallback="..."><Error404 /></Suspense>
    },
  ]);

export default router;
  