import React from "react";
import { useNavigate } from "react-router-dom";

import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";


import axios from "axios";

import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const Forget=()=>{

    const queryParams = new URLSearchParams(window.location.search);
    // console.log(queryParams.get('token'))
    const token = queryParams.get('token')

    const auth = useAuthUser()
    const signIn = useSignIn();


    const navigate = useNavigate();
    const signupPage=()=>{
        navigate('/login')
    }
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password != confirmPassword){
            return alert("Password does not match")
        }

        const reqBody = {
            password,
            token
        };
        // console.log(reqBody)
        try {
            const loginUser = await axios.post(`${API_ENDPOINT_BACK}/api/user/reset-password`, reqBody);

            alert(loginUser.data.message)

        } catch (error) {
          alert(error.response.data.msg)
            console.error(error);
        }
    }
    return(

        <div style={{backgroundColor:"#193948",opacity:0.8}}>
        <InputLayout>
            <SecondNavigation/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center",height:"100%"}}>
            <section style={{backgroundColor:"#193948", width:"30vw",borderColor:"#018076",borderRadius:20}}>
            <form className="flex flex-col gap-4 p-4" onSubmit={(event)=>handleSubmit(event)}>
                <div>
                    <h2 className="text-lg font-bold text-white">Reset password</h2>
                </div>

             
                <div className="flex flex-col gap-2">
                    <label className="text-white">Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="******" id="password" autoComplete="off"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Confirm Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="******" id="confirmPassword" autoComplete="off"></input>
                </div>

                


                <div className="flex flex-col mt-4">
                    <button className="w-full p-2 text-white rounded-xl bg-sky-600">Reset password</button>
                </div>

                <div className="flex flex-row gap-2" >
                    {/* <p className="font-semibold text-white text-m">
                    Don't have an account? </p> */}
                    <a
            onClick={signupPage}
            className="font-semibold text-white cursor-pointer text-m hover:text-gray-300"
            style={{color:"#00A19C"}}
        >
            Back to SIGN IN
        </a>
                </div>
                
            </form>
            

        </section>
            </div>
            
        </InputLayout>
    </div>

 
    )
}

export default Forget;