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
import SpotDetails from '../pages/SpotDetails';
import NotFound from '../pages/NotFound';
import UpdateTouristsSpot from '../pages/UpdateTouristsSpot';

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
                    path: "/spot",
                    element:<SpotDetails></SpotDetails>
                },
                {
                    path: "/updatespot",
                    element:<UpdateTouristsSpot></UpdateTouristsSpot>
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
                {
                    path: "*", 
                    element: <NotFound></NotFound>
                }
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