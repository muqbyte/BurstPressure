import React from "react";
import Pipe from '../../assets/animationPipe.gif'
import '../../assets/fonts/Goldman-Regular.ttf';
import Piping from "../../assets/BackgroundPiping.png"
import { useNavigate } from "react-router-dom";


const MainMenuAuth=()=>{
    const navigate = useNavigate();
    const chartPage=()=>{
        navigate("/input")
    }   

    const pastData=()=>{
        navigate("/pastdata")
    }   

 return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  justifyContent:"center",alignItems:"flex-start",height:"100%", marginLeft:20, gap:10}}>
                <div>
                    <h2 style={{fontFamily:"GoldmanRegular", fontSize:35, fontWeight:"normal", color:"white"}}>FINITE ELEMENT ANALYSIS FOR PIPING</h2>
                </div>

                <div style={{marginBottom:10}}>
                    <h3 style={{fontFamily:"GoldmanRegular",fontSize:30, fontWeight:"normal",color:"white"}}>A dedicated platform in calculating the burst <br/> pressure in a piping system</h3>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center",  width:"40%"}}>
                    <div >
                        <button style={{backgroundColor:"#00A19C", border:"none", fontFamily:"GoldmanRegular", paddingTop:15, paddingBottom:15, borderRadius:10, color:"white", fontWeight:"bold", width:"130px"}} onClick={chartPage}>Get Started</button>
                    </div>
                    <div >
                    <button style={{backgroundColor:"#00A19C", border:"none", fontFamily:"GoldmanRegular", paddingTop:15, paddingBottom:15, borderRadius:10, color:"white", fontWeight:"bold", width:"130px"}} onClick={pastData}>History</button>
                    </div>
                </div>
                
            </div>

            <div style={{flex:1, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <img src={Pipe} />
            </div>
        </div>
    )
}

export default MainMenuAuth;