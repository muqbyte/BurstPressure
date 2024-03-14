import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import MainMenu from "../home/MainMenu";
import Piping from "../../assets/BackgroundPiping.png"
import HomeLayout from "../layout/HomeLayout";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";

const Home=()=>{
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
                     <MainMenu/>
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

export default Home;