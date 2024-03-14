import React from "react";
import '../../assets/fonts/Goldman-Bold.ttf';


const NavigationBar=()=>{
    return(
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"#00A19C",height:"8vh"}}>
                <div style={{marginLeft:30, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <h3 style={{color:"white", fontFamily:"GoldmanBold"}}>BURST PRESSURE FINITE ELEMENT</h3>
                </div>
            
            </div>
    )
}

export default NavigationBar;