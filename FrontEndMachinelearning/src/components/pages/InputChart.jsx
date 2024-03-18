import React, { useEffect, useState } from "react";
import BurstChart from "../charts/BurstChart";
import NavigationBar from "../navigation/NavigationBar";
import InputLayout from "../layout/InputLayout";
import FormInput from "../forms/FormInput";
import SecondNavigation from "../navigation/SecondNavigation";
import ChartLayout from "../layout/ChartLayout";
import axios from "axios";
import SecondChart from "../charts/PredictionChart";
import CalculatedChart from "../charts/CalculatedChart";



const InputChart=()=>{
    const [sendData, setSendData] = useState(false);
    const [combinePredic, setCombinePredict]=useState([])

    const handleSubmit = async(e, selectedTensile, selectedComposite) => {

        e.preventDefault();
            //get all values
            const length = e.target.length.value;
            const width = e.target.width.value;
            const diameter = e.target.diameter.value;
            const depth=e.target.depth.value;
            const thickness=e.target.thickness.value;
            const thickPercentage=e.target.thickPercentage.value
            // console.log(length,width,diameter, selectedComposite,selectedTensile)

            const reqBody={
                length:length,
                width:width,
                diameter:diameter,
                depth:depth,
                thickness:thickness,
                thickPercentage:thickPercentage,
                tensile:selectedTensile,
                composite:selectedComposite,
            }
            console.log(reqBody)

            try {
                const res = await axios.post("https://pipeline.eagleattech.com/api/theory/calculate", reqBody);
                console.log(res);
                setSendData(res.data)
                alert("Registration successful!");
            } catch (error) {
                console.error(error);
                alert(error.response.data.message);
            }

            try {
                const repaired = await Promise.all([
                    axios.get("https://pipeline.eagleattech.com/api/burst/prediction?category=repaired", { params: reqBody }),
                    axios.get("https://pipeline.eagleattech.com/api/burst/prediction?category=unrepaired", { params: reqBody }),
                ]);
                const predictArray=repaired[0].data
                const unpredict=repaired[1].data[0]
                const unrepairArray=[];
                unrepairArray.push(unpredict)
                console.log("repaired",predictArray)
                console.log("unrepaired", unrepairArray)

                const tempo=[...predictArray,...unrepairArray]
                if(tempo.length>0){
                    setCombinePredict(tempo)
                    console.log("tempo",combinePredic);
                }

                // combinePredic()
                // // setSendData(res.data)
                // alert("Registration successful!");
            } catch (error) {
                console.error(error);
                alert(error.response.data.message);
            }

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
                <div style={{border:"2px solid"}}>
                    <FormInput handleSubmit={handleSubmit}/>
                </div>
                    <BurstChart data={sendData} predictData={combinePredic}/>
                {/* <SecondChart data={sendData}/> */}
                {/* <CalculatedChart data={sendData}/> */}
               </ChartLayout>
            </InputLayout>
        </div>
            
        
    )
}

export default InputChart;