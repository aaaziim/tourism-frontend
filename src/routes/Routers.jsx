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
import PrivateRoute from './PrivateRoute';

const Routers = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element:<Layout></Layout>,
            children:[
                {
                    path: "/",
                    element:<Home></Home> ,
                    // loader: ()=> fetch("https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/allspot")
                },
                {
                    path: "/addspot",
                    element:<PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
                },
                {
                    path: "/allspot",
                    element:<AllTouristsSpot></AllTouristsSpot>,
                    // loader: ()=> fetch("https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/allspot")
                },
                {
                    path: "/spot/:id",
                    element: <SpotDetails></SpotDetails>,
                    loader: ({ params }) => fetch(`https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/spot/${params.id}`)
                },
                {
                    path: "/updatespot/:id",
                    element:<PrivateRoute><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/spot/${params.id}`)
                },
                {
                    path: "/mylist",
                    element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                    loader: ()=> fetch("https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/myspot")
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