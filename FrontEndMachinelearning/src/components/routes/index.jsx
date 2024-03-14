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

  const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />\
                <Route  path="/input" element={<InputChart/>} />
                <Route  path="/login" element={<Login/>} />        
                <Route  path="/details" element={<DescriptionInput/>} />                
            </Routes>
        </BrowserRouter>
    )
  }

  export default AppRoutes;