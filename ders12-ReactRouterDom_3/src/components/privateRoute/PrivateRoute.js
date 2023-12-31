import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const { user } = useAuth();
   const location = useLocation();
   if (!user) {
      return <Navigate to="/auth/login"  replace={true}state={{
         return_url: location.pathname
      }} />
   }
   return children
}

export default PrivateRoute