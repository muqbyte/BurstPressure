import React, { useEffect, useState } from "react";
import BurstChart from "../charts/BurstChart";
import NavigationBar from "../navigation/NavigationBar";
import InputLayout from "../layout/InputLayout";
import FormInput from "../forms/FormInput";
import SecondNavigation from "../navigation/SecondNavigation";
import ChartLayout from "../layout/ChartLayout";
import axios from "axios";



const InputChart=()=>{
    const [sendData, setSendData] = useState(false);

    const handleSubmit = async(e, selectedTensile, selectedComposite) => {

        e.preventDefault();
            //get all values
            const length = e.target.length.value;
            const width = e.target.width.value;
            const diameter = e.target.diameter.value;
            // console.log(length,width,diameter, selectedComposite,selectedTensile)

            const reqBody={
                length:length,
                width:width,
                diameter:diameter,
                tensile:selectedTensile,
                compostie:selectedComposite
            }
            console.log(reqBody)

            try {
                const res = await axios.get("http://10.73.2.115:8888/data/machinelearning", reqBody);
                // console.log(res.data);
                setSendData(res.data)
                alert("Registration successful!");
            } catch (error) {
                console.error(error);
                alert(error.response.data.message);
            }
// setSendData(prevCondition => !prevCondition)
//     //   setSendData(true);
//       console.log("ancestor", sendData)
    };

  
    return(
        // <div style={{backgroundColor:"#193948",opacity:0.8}}>
        //     <NavigationBar/>
        //     <InputLayout>
        //         <div >
        //             <FormInput handleSubmit={handleSubmit}/>
        //             <BurstChart data={sendData}/>
        //         </div>
        //     </InputLayout>
            
        // </div>

       
        <div style={{backgroundColor:"#193948",opacity:0.8}}>
            <InputLayout>
            <SecondNavigation/>
               <ChartLayout>
                <div style={{marginBottom:20}}>
                    <FormInput handleSubmit={handleSubmit}/>
                </div>
                    <BurstChart data={sendData}/>
               </ChartLayout>
            </InputLayout>
        </div>
            
        
    )
}

export default InputChart;