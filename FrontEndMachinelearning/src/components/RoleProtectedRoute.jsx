import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const RoleProtectedRoute = ({ children, allowedRoles }) => {
    const isAuthenticated = useIsAuthenticated()

    const useRole = () => {
        const auth = useAuthUser();
        return auth?.role;
      };

      const role = useRole().toLowerCase();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
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
