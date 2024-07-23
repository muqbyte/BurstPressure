import React from "react";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
  import Home from "../pages/Home";
import InputChart from "../pages/InputChart";
import Login from "../pages/LogIn";
import Forget from "../pages/Forget-password";
import Reset from "../pages/Reset-password";
import DescriptionInput from "../pages/DescriptionInput";
import SignUp from "../pages/SignUp";
import PastData from "../pages/PastData";
import HomeAuth from "../pages/HomeAuth";


import Users from "../pages/Users";
import Admin from "../pages/Admin";

import Verified from "../pages/Verified";
import VerifyEmail from "../pages/Verify-email";

import RoleProtectedRoute from '../RoleProtectedRoute';

import RequireAuth from '@auth-kit/react-router/RequireAuth'

import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const ProtectedRoute = ({ element, redirectTo }) => {
  const isAuthenticated = useIsAuthenticated();
  console.log('here',isAuthenticated) 
  return !isAuthenticated ? element : <Navigate to={redirectTo} />;
};
const ProtectedRoute2 = ({ element, redirectTo }) => {

  const useVerified = () => {
    const auth = useAuthUser();
    return auth?.verified;
  };

  const isVerified = useVerified()

  const isAuthenticated = useIsAuthenticated();
  console.log('here',isAuthenticated) 
  return isAuthenticated &&  !isVerified ? element : <Navigate to={redirectTo} />;
};

const AppRoutes=()=>{

    return(
        <BrowserRouter>
            <Routes>
                {/* this is the front page for every new user. It will display sign up and log in */}
                <Route path="/" element={<ProtectedRoute element={<Home />} redirectTo="/protectedHome" />} />
                <Route path="/verified" element={<ProtectedRoute2 element={<Verified />} redirectTo="/login" />} />

                {/* <Route  path="/verified" element={<Verified />} />  */}
                {/* <Route path="/verify-email" element={<ProtectedRoute2 element={<VerifyEmail />} redirectTo="/login" />} /> */}

                <Route  path="/verify-email" element={<VerifyEmail />} /> 
                {/* <Route  path="/verify-email" element={<VerifyEmail />} />  */}

                <Route path="/login" element={<ProtectedRoute element={<Login />} redirectTo="/protectedHome" />} />
                <Route path="/forget-password" element={<ProtectedRoute element={<Forget />} redirectTo="/protectedHome" />} />
                <Route path="/reset-password" element={<ProtectedRoute element={<Reset />} redirectTo="/protectedHome" />} />
                <Route path="/signup" element={<ProtectedRoute element={<SignUp />} redirectTo="/protectedHome" />} />


                {/* this is the page after login */}
                <Route  path="/protectedHome" element={
                  <RequireAuth fallbackPath={'/login'}>
                    <RoleProtectedRoute allowedRoles={[ 'admin','user']}>
                  <HomeAuth/>
                  </RoleProtectedRoute>
                      </RequireAuth>
                  } />

                {/* every user or admin or superuser can access this page for calculation and prediction */}
                <Route path={'/input'} element={
                  <RequireAuth fallbackPath={'/login'}>
                    <RoleProtectedRoute allowedRoles={['admin', 'user']}>
                  <InputChart/>
                  </RoleProtectedRoute>
                      </RequireAuth>
                  }
                />             


                {/* This is the details page */}
                <Route  path="/details" element={
                  <RoleProtectedRoute allowedRoles={[ 'user', 'admin']}>
                  <DescriptionInput/>
                  </RoleProtectedRoute>
                  } />   

                {/* This page is for the past data. The user can only see their data. But the admin can see all user data   */}
                <Route  path="/pastdata" element={
                  <RoleProtectedRoute allowedRoles={[ 'user', 'admin']}>
                  <PastData/>
                  </RoleProtectedRoute>
                } />     

                {/* <Route  path="/users" element={
                   <RoleProtectedRoute allowedRoles={[ 'user']}>
                  <Users/>
                  </RoleProtectedRoute>
                } />    */}
                <Route  path="/admin" element={
                  <RoleProtectedRoute allowedRoles={[ 'admin']}>
                  <Admin/>
                </RoleProtectedRoute>
                }/>                

            </Routes>
        </BrowserRouter>
    )
  }

  export default AppRoutes;