import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider'; // Assuming you have an AuthContext

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext); // Check user authentication
    const location = useLocation(); // Get the current location

    if (loading) {
        // Redirect the user to login with the current location as state
        return <p>Loading...</p>
    }

    if(user){
        return children
    } 

    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
