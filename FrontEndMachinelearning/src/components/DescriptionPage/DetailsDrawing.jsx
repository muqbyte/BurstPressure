import React from "react";
import CrossSection from '../../assets/CrossSection.png'
import Parameter from '../../assets/Parameter.png'
import Diameter from '../../assets/diameter.png'

const DetailsDrawing=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", border:"2px solid", height:"70vh"}}>
            <div>
                <h2>FINITE ELEMENT DETAILS</h2>
            </div>

            <div style={{display:"flex", flexDirection:"row", border:"2px solid", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"row", border:"2px solid", justifyContent:"center", alignItems:"center"}}>
                    <img src={CrossSection} width={"70%"}/>
                </div>

                    <div style={{display:"flex", flexDirection:"row", border:"2px solid", justifyContent:"center", alignItems:"center"}}>
                        <img src={Parameter} width={"70%"}/>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", border:"2px solid", justifyContent:"center", alignItems:"center"}}>
                        <img src={Diameter} width={"70%"}/>
                    </div>
                
                
            </div>
            
        </div>
    )
}

export default DetailsDrawing;