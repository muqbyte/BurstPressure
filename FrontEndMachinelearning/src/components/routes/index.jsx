import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    Route,
    Routes,
    Link,
    BrowserRouter,
    useNavigate,
  } from "react-router-dom";
  import Home from "../pages/Home";
import InputChart from "../pages/InputChart";
import Login from "../pages/LogIn";
import DescriptionInput from "../pages/DescriptionInput";
import SignUp from "../pages/SignUp";
import PastData from "../pages/PastData";
import HomeAuth from "../pages/HomeAuth";

  const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                {/* this is the front page for every new user. It will display sign up and log in */}
                <Route  path="/" element={<Home />} /> 

                {/* This is the log in and sign up page */}
                <Route  path="/login" element={<Login/>} />   
                <Route  path="/signup" element={<SignUp/>} /> 

                {/* this is the page after login */}
                <Route  path="/protectedHome" element={<HomeAuth />} />

                {/* every user or admin or superuser can access this page for calculation and prediction */}
                <Route  path="/input" element={<InputChart/>} />


                  {/* This is the details page */}
                <Route  path="/details" element={<DescriptionInput/>} /> 

                {/* This page is for the past data. The user can only see their data. But the admin can see all user data   */}
                <Route  path="/pastdata" element={<PastData/>} />                

            </Routes>
        </BrowserRouter>
    )
  }

  export default AppRoutes;