import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../custom-hooks/useAuth';

const ProtectedRoute = ({ element: Element }) => {
    const { currentUser } = useAuth();

    if (currentUser) {
        return <Element />;
    } else {
    
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
