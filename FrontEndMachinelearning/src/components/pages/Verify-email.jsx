import React, {useState} from "react";

import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import MainMenuAuth from "../home/MainAuth";

import { useParams } from 'react-router';

import axios from "axios";

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useEffect } from "react";
import { API_ENDPOINT_BACK } from '../../config';
import { useNavigate } from 'react-router-dom';

import useSignOut from 'react-auth-kit/hooks/useSignOut';
const VerifyEmail=()=>{
    const navigate = useNavigate(); // Initialize useNavigate
    const signOut = useSignOut()
    // const params= useParams()
    // console.log(params)
    const queryParams = new URLSearchParams(window.location.search);
    // console.log(queryParams.get('token'))
    const token = queryParams.get('token')
    const [message, setMessage] = useState('')
    const [button, setButton] = useState(false)

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const data = await axios.get(`${API_ENDPOINT_BACK}/api/user/verify-email?token=${token}`);
          console.log(data.data.message)
          setMessage(data.data.message)
          if(data.data.message =="Email verified successfully. Please login again."){
            // alert("Email verified successfully. Please login again.")
            // setMessage((prev))
            // setMessage(message + '. Please login again.');
            signOut()
            // navigate('/login');
            setButton(true)
          }
        }
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, []) 
       
    return(

        <div style={{backgroundColor:"#193948",opacity:0.8}}>

            <InputLayout>
            <SecondNavigation/>
                <div style={{ marginTop:120, marginLeft:20, marginRight:20, display:'flex', alignItems:'center', flexDirection:'column'}}>
                     <h1 className="text-white text-xl text-center"> {message}</h1>
                        {button ? <div style={{paddingTop:20}}>
                    <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 text-center" style={{marginTop:"10px"}}  onClick={()=>navigate('/login')}>Back to login</button>
                </div>: <div></div> }
                     
                </div>
                {/* {button ? : } */}
               
        
            </InputLayout>
                
        </div>
    )
}

export default VerifyEmail;