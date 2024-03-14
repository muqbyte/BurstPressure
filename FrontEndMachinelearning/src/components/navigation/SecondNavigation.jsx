import React from "react";
import Petronas from "../../assets/petronasLogo.png"

const SecondNavigation=()=>{
    return(
        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-start", padding:5,boxShadow:"0px 3px 2px rgba(0, 0, 0, 0.3)"}}>

        <div style={{marginLeft:30, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <img src={Petronas} width={60}/>
        </div>
        <div style={{marginLeft:30, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <h3 style={{color:"white", fontFamily:"GoldmanBold"}}>BURST PRESSURE FINITE ELEMENT</h3>
        </div>
       
    </div>
    )
}

export default SecondNavigation;