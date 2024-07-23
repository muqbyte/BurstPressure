import React from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";

import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const LoginForm=()=>{

    const auth = useAuthUser()
    const signIn = useSignIn();


    const navigate = useNavigate();
    const signupPage=()=>{
        navigate('/signup')
    }
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const email=e.target.email.value;
        const password = e.target.password.value;

        const reqBody = {
            email,
            password,
        };
        // console.log(reqBody)
        try {
            const loginUser = await axios.post(`${API_ENDPOINT_BACK}/api/auth/login`, reqBody);
            // const loginUser = await axios.post("http://localhost:5500/api/auth/login", reqBody);
            // console.log(loginUser)
            if(signIn({
                auth: {
                    token: loginUser.data.token,
                    type: 'Bearer'
                },
                userState: loginUser.data.authUserState
            })){
                if(loginUser.data.authUserState.role == 'admin'){
                    navigate('/admin'); // Reroute to the input after successful login
                }else{
                    navigate('/protectedHome'); // Reroute to the input after successful login
                }
                // Redirect or do-something
            }else {
                //Throw error
            }
            
            // alert(registerUser.data[0].msg);

        } catch (error) {
          alert(error.response.data.msg)
            console.error(error);
        }
    }
    return(
        <section style={{backgroundColor:"#193948", width:"30vw",borderColor:"#018076",borderRadius:20}}>
            <form className="flex flex-col gap-4 p-4" onSubmit={(event)=>handleSubmit(event)}>
                <div>
                    <h2 className="text-lg font-bold text-white">Sign in to your account</h2>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white ">Your email</label>
                    <input className="text-white border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="name@company.com" id="email" autoComplete="off"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="******" id="password" autoComplete="off"></input>
                </div>

                <div className="flex flex-col mt-4">
                    <button className="w-full p-2 text-white rounded-xl bg-sky-600">Sign in</button>
                </div>

                <div className="flex flex-row gap-2" >
                    <p className="font-semibold text-white text-m">
                    Don't have an account? </p>
                    <a
            onClick={signupPage}
            className="font-semibold text-white cursor-pointer text-m hover:text-gray-300"
        >
            REGISTER NOW
        </a>
                </div>
                
            </form>
            

        </section>
    )
}

export default LoginForm;