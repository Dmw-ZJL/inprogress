import React from 'react';
import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/homePage';
const routes : RouteObject[] = [
    {
        path: '/home',
        element: <HomePage/>,
    },
    {
        path:"*",
        element:<Navigate to="/home"/>
    }
]

const router = createBrowserRouter(routes)
export default router
