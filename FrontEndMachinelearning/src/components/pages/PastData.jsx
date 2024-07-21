import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import MainMenu from "../home/MainMenu";
import Piping from "../../assets/BackgroundPiping.png"
import HomeLayout from "../layout/HomeLayout";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import TableProduct from "../Table/TableProduct";
import { useNavigate } from "react-router-dom";


const PastData=()=>{
    const navigate = useNavigate();

    const InputChartPage=()=>{
        navigate("/input")
    }   
    return(
        // <div style={{display:"flex", flexDirection:"column"}}>
        //     <div >
        //     <NavigationBar/>
        //     </div>
            
        //     <HomeLayout>
        //     <MainMenu/>
        //     </HomeLayout>
            
            
        // </div>

        
        <div style={{backgroundColor:"#193948",opacity:0.8}}>

            <InputLayout>
            <SecondNavigation/>
                <div style={{ marginTop:150, marginLeft:20, marginRight:20}}>
                     <TableProduct/>
                     <div>
                     <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" style={{marginTop:"50px"}} onClick={InputChartPage}>Return to Chart Pages</button>
                     </div>
                </div>
            </InputLayout>
                
        {/* <div >
        <NavigationBar/>
        </div>
        
        <HomeLayout>
        <MainMenu/>
        </HomeLayout> */}
        
        
        </div>
    )
}

export default PastData;