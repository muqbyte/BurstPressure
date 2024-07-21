import React from "react";
import Petronas from "../../assets/petronasLogo.png"

import useSignOut from 'react-auth-kit/hooks/useSignOut';

import { useNavigate } from 'react-router-dom';

import { FaSignOutAlt , FaSignInAlt  } from "react-icons/fa";

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const SecondNavigation=()=>{

    const signOut = useSignOut()
    
    const navigate = useNavigate(); // Initialize useNavigate

    const isAuthenticated = useIsAuthenticated()

    const useRole = () => {
        const auth = useAuthUser();
        return auth?.username;
      };

      const username = useRole();

    return(
        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", padding:5,boxShadow:"0px 3px 2px rgba(0, 0, 0, 0.3)"}}>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start"}}>
        <div style={{marginLeft:30, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <img src={Petronas} width={60}/>
        </div>
        <div style={{marginLeft:30, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <h3 style={{color:"white", fontFamily:"GoldmanBold"}}>BURST PRESSURE FINITE ELEMENT</h3>
        </div>
        </div>

        <div style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", paddingRight:20}}>
            {isAuthenticated }

            {isAuthenticated ? 
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", paddingRight:20}}>
                <h1 style={{paddingRight:20, color:'white', textTransform:"uppercase", fontWeight:'bold', fontFamily:"GoldmanBold"}}>{username}</h1>
                <FaSignOutAlt color="white" onClick={() => {
                signOut()
                navigate('/login'); // Rer
                } }/>
            </div>
             : <div></div>}

        
        </div>
        
        {/* <button onClick={() => 
        
        {
            signOut()
            navigate('/login'); // Rer
        }

        }>Sign Out</button>
        */}
    </div>
    )
}

export default SecondNavigation;