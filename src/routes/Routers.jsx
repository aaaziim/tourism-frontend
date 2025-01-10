import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import AddTouristSpot from '../pages/AddTouristSpot';
import AllTouristsSpot from '../pages/AllTouristsSpot';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyList from '../pages/MyList';
import AuthProvider from '../provider/AuthProvider';

const Routers = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element:<Layout></Layout>,
            children:[
                {
                    path: "/",
                    element:<Home></Home>
                },
                {
                    path: "/addspot",
                    element:<AddTouristSpot></AddTouristSpot>
                },
                {
                    path: "/allspot",
                    element:<AllTouristsSpot></AllTouristsSpot>
                },
                {
                    path: "/mylist",
                    element:<MyList></MyList>
                },
                {
                    path: "/login",
                    element:<Login></Login>
                },
                {
                    path: "/register",
                    element:<Register></Register>
                },
            ]
        }
    ])
    return (
        <AuthProvider>
<RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
    );
};

export default Routers;