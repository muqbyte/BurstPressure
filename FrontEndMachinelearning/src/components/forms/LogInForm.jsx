import React from "react";

const LoginForm=()=>{
    return(
        <section style={{backgroundColor:"#193948", width:"30vw",borderColor:"#018076", border:"2px solid #018076",borderRadius:20}}>
            <form className="flex flex-col gap-4 p-4">
                <div>
                    <h2 className="text-lg font-bold text-white">Sign in to your account</h2>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white ">Your email</label>
                    <input className="text-gray-900 border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="name@company.com" ></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white">Password</label>
                    <input className="text-gray-900 border border-gray-600 bg-slate-700  p-2.5 rounded-lg" placeholder="******"></input>
                </div>

                <div className="flex flex-col mt-4">
                    <button className="w-full p-2 text-white rounded-xl bg-sky-600">Sign in</button>
                </div>
            </form>
            

        </section>
    )
}

export default LoginForm;