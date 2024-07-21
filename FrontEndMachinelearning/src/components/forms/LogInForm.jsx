import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm=()=>{

    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const email=e.target.email.value;
        const password = e.target.password.value;

        const reqBody = {
            email,
            password,
        };
        console.log(reqBody);

        navigate("/protectedHome")
    }
    return(
        <section style={{backgroundColor:"#193948", width:"30vw",borderColor:"#018076",borderRadius:20}}>
            <form className="flex flex-col gap-4 p-4" onSubmit={(event)=>handleSubmit(event)}>
                <div>
                    <h2 className="text-lg font-bold text-white">Sign in to your account</h2>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white ">Your email</label>
                    <input className="text-white border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="name@company.com" id="email" autocomplete="off"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Password</label>
                    <input className="text-white border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="******" id="password" autocomplete="off"></input>
                </div>

                <div className="flex flex-col mt-4">
                    <button className="w-full p-2 text-white rounded-xl bg-sky-600">Sign in</button>
                </div>
                
            </form>
            

        </section>
    )
}

export default LoginForm;