import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const SignupForm = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userType, setUserType] = useState("Select role");

    const signinPage=()=>{
        navigate('/login')
    }

    const handleOptionClick = (type) => {
        setUserType(type);
        setDropdownOpen(false);
    };

    const handleDropdownClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setDropdownOpen(!dropdownOpen);
    };


    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const email=e.target.email.value;
        const username=e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const role=userType

        if(!email || !username || !password || !confirmPassword){
            
            return alert("Please fill all details")
         }
        if(password!==confirmPassword){
            
           return alert("Password does not match")
        }
        // if(password===confirmPassword){
            const reqBody = {
                email,
                username,
                password,
                role:role
            };

            try {

                const registerUser = await axios.post(`${API_ENDPOINT_BACK}/api/user/register`, reqBody);
                alert(registerUser.data[0].msg);
                if(registerUser.data[0].msg === 'Success. You can log in now'){
                    navigate('/login');
                }
            } catch (error) {
                console.error(error);

            }
        
        
            // console.log(reqBody);
        // }
        // else{
        //     alert("Incorrect password");
        // }
        
    }

    return (
        <section style={{ backgroundColor: "#193948", width: "30vw", borderColor: "#018076", borderRadius: 20 }}>
            <form className="flex flex-col gap-4 p-4" onSubmit={(event)=>handleSubmit(event)}>
                <div>
                    <h2 className="text-lg font-bold text-white">Create an account</h2>
                </div>

               
                
                <div className="flex flex-col gap-2">
                    <label className="text-white">Username</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="Username" id="username" autoComplete="off"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Your email</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="name@company.com" id="email" autoComplete="new-password"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="******" id="password" autoComplete="off"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Confirm Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700 p-2.5 rounded-lg" placeholder="******" id="confirmPassword" autoComplete="off"></input>
                </div>

                {/* <div className="relative flex flex-col gap-2">
                    <label className="text-white">Select Role</label>
                    <button
                        onClick={handleDropdownClick}
                        className="p-2.5 text-sm text-white bg-gray-700 rounded-lg"
                        style={{ width: '100%' }}
                    >
                        {userType}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute w-full mt-2 bg-gray-700 rounded-lg shadow-lg">
                            <div
                                onClick={() => handleOptionClick("User")}
                                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-600"
                            >
                               User
                            </div>
                            <div
                                onClick={() => handleOptionClick("Admin")}
                                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-600"
                            >
                                Admin
                            </div>
                            <div
                                onClick={() => handleOptionClick("Superuser")}
                                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-600"
                            >
                                Superuser
                            </div>
                        </div>
                    )}
                </div> */}

                <div className="flex flex-col mt-4">
                    <button className="w-full p-2 text-white rounded-xl bg-sky-600">Create an account</button>
                </div>

                <div className="flex flex-row gap-2" >
                    <p className="font-semibold text-white text-m">
                    Already have an account? </p>
                    <a
           onClick={signinPage}
            className="font-semibold text-white cursor-pointer text-m hover:text-gray-300"
        >
            SIGN IN
        </a>
                </div>
            </form>
        </section>
    );
}

export default SignupForm;
