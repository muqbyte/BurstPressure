import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const RoleProtectedRoute = ({ children, allowedRoles, verified }) => {
    const isAuthenticated = useIsAuthenticated()



    const useVerified = () => {
        const auth = useAuthUser();
        return auth?.verified;
      };

      const isVerified = useVerified()
    
      console.log("isVerified",isVerified)


  //  if(!isVerified && role!='admin'){
  //   return <Navigate to="/verified" />;
  //  }   
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const useRole = () => {
    const auth = useAuthUser();
    return auth?.role;
  };

  const role = useRole().toLowerCase();
  
  if(!isVerified && role!='admin'){
    return <Navigate to="/verified" />;
   }   
  // console.log(role)
  // console.log(allowedRoles)
//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/unauthorized" />;
//   }

if (!allowedRoles.includes(role) && role=='admin') {
    return <Navigate to="/admin" />;
    // return <Navigate to="/unauthorized" />;
  }
if (!allowedRoles.includes(role) && role=='user') {
    return <Navigate to="/protectedHome" />;
    // return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleProtectedRoute;
