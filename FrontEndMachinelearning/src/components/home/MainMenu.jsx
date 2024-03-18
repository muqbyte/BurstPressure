import React from "react";
import Pipe from '../../assets/animationPipe.gif'
import '../../assets/fonts/Goldman-Regular.ttf';
import Piping from "../../assets/BackgroundPiping.png"
import { useNavigate } from "react-router-dom";


const MainMenu=()=>{
    const navigate = useNavigate();
    const inputPage=()=>{
        navigate("/input")
    }   

 return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  justifyContent:"center",alignItems:"flex-start",height:"100%", marginLeft:20}}>
                <div>
                    <h2 style={{fontFamily:"GoldmanRegular", fontSize:35, fontWeight:"normal", color:"white"}}>FINITE ELEMENT ANALYSIS FOR PIPING</h2>
                </div>

                <div>
                    <h3 style={{fontFamily:"GoldmanRegular",fontSize:30, fontWeight:"normal",color:"white"}}>A dedicated platform in calculating the burst <br/> pressure in a piping system</h3>
                </div>

                <div >
                    <button style={{backgroundColor:"#00A19C", border:"none", fontFamily:"GoldmanRegular", paddingLeft:20, paddingRight:20, paddingTop:15, paddingBottom:15, borderRadius:15, color:"white", fontWeight:"bold"}} onClick={inputPage}>GET STARTED</button>
                </div>
            </div>

            <div style={{flex:1, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <img src={Pipe} />
            </div>
        </div>
    )
}

export default MainMenu;