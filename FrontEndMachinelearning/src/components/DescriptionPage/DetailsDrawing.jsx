import React from "react";
import CrossSection from '../../assets/CrossSection.png'
import Parameter from '../../assets/Parameter.png'
import Diameter from '../../assets/Diameter.png'

const DetailsDrawing=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <div >
                <h2 style={{color:"black", fontFamily:"GoldmanBold", textAlign:"center", fontSize:30}}>ABOUT BURST PRESSURE FINITE ELEMENT ANALYSIS</h2>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <img src={CrossSection} width={"35%"}/>
            </div>

            <div>
                <h2 style={{color:"black", fontFamily:"OrbitronBold", textAlign:"center", fontSize:20}}>The following section outlines the parameters for the cross-sectional area, where L represents length, W represents width, d represents depth, and D represents diameter</h2>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                

                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <img src={Parameter} width={"40%"}/>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <img src={Diameter} width={"40%"}/>
                    </div>
                
                
            </div>
            
        </div>
    )
}

export default DetailsDrawing;