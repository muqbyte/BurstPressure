import React from "react";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import LoginForm from "../forms/LogInForm";

const Login=()=>{
    return(
        <div style={{backgroundColor:"#193948",opacity:0.8}}>
            <InputLayout>
                <SecondNavigation/>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center",height:"100%"}}>
                    <LoginForm/>
                </div>
                
            </InputLayout>
        </div>
    )
}

export default Login;