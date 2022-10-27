import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const ProtectedRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
      return <button className="btn loading mx-10">loading</button>
    }

    if(!user){
      return <Navigate to='/login' state={{from: location}} replace/>
    }
    return children;
}

export default ProtectedRoutes;