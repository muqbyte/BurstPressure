import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import MainMenu from "../home/MainMenu";
import Piping from "../../assets/BackgroundPiping.png"
import HomeLayout from "../layout/HomeLayout";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import MainMenuAuth from "../home/MainAuth";


import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import axios from "axios";
import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const Verified=()=>{

    const useRole = () => {
        const auth = useAuthUser();
        return auth?.email;
      };
    const useId = () => {
        const auth = useAuthUser();
        return auth?.uid;
      };

      const userEmail= useRole();
      const userId= useId();
      console.log(userId)


      const handleVerification=async()=>{
        
        const reqBody = {
            email: userEmail,
            id:userId,
        };
        // console.log(reqBody)
        try {
            const verificationUser = await axios.post(`${API_ENDPOINT_BACK}/api/user/verification`, reqBody);
            // const loginUser = await axios.post("http://localhost:5500/api/auth/login", reqBody);
            // console.log(loginUser)
           if(verificationUser.data=="send"){
            alert("Email sent.")
          
           }
            
            // alert(registerUser.data[0].msg);

        } catch (error) {
        //   alert(error.response.data.msg)
            console.error(error);
        }
    }

    return(

        <div style={{backgroundColor:"#193948",opacity:0.8}}>

            <InputLayout>
            <SecondNavigation/>
                <div style={{ marginTop:150, marginLeft:20, marginRight:20}}>
                     <h1 className="text-white text-lg"> We've sent an email to {userEmail} to verify your email address and activate your account. The link in the email will expire in 24 hours.</h1>
                     <p className="text-white pt-5 text-lg"><span style={{color:"#00A19C"}} onClick={handleVerification}> Click here</span> if you did not receive an email</p>
                </div>
        
            </InputLayout>
                
        </div>
    )
}

export default Verified;