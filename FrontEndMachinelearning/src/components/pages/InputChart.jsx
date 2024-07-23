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
import SecondForm from "../forms/SecondForm";


import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

// const handleSubmit = async(e, selectedTensile, selectedComposite) => {

//   e.preventDefault();
//       //get all values
//       const length = e.target.length.value;
//       const width = e.target.width.value;
//       const diameter = e.target.diameter.value;
//       const depth=e.target.depth.value;
//       const thickness=e.target.thickness.value;
//       const thickPercentage=e.target.thickPercentage.value
//       // console.log(length,width,diameter, selectedComposite,selectedTensile)

//       const reqBody={
//           Length:length,
//           Width:width,
//           diameter:diameter,
//           Depth:depth,
//           thickness:thickness,
//           thickPercentage:thickPercentage,
//           tensile:selectedTensile,
//           composite:selectedComposite,
//       }
//       console.log(reqBody)

//       try {
//           const res = await axios.post("https://pipeline.eagleattech.com/api/theory/calculate", reqBody);
//           console.log(res.data);
//           setSendData(res.data)
//           // alert("Registration successful!");
//       } catch (error) {
//           console.error(error);
//           alert(error.response.data.message);
//       }

//       try {
//           // const repaired = await Promise.all([
//           //     axios.get("https://pipeline.eagleattech.com/api/burst/prediction?category=repaired", { params: reqBody }),
//           //     axios.get("https://pipeline.eagleattech.com/api/burst/prediction?category=unrepaired", { params: reqBody }),
//           // ]);
//           const res = await axios.post("http://localhost:8080/predict/unrepaired", reqBody);
//           console.log(res.data);
//           // const predictArray=repaired[0].data
//           // const unpredict=repaired[1].data[0]
//           // const unrepairArray=[];
//           const unrepairArray=res.data;
//           // unrepairArray.push(unpredict)
//           // console.log("repaired",predictArray)
//           // console.log("unrepaired", unrepairArray)
//           setCombinePredict(unrepairArray)
//           // const tempo=[...predictArray,...unrepairArray]
//           // if(tempo.length>0){
//           //     setCombinePredict(tempo)
//           //     console.log("tempo",combinePredic);
//           // }

//           // combinePredic()
//           // // setSendData(res.data)
//           // alert("Registration successful!");
//       } catch (error) {
//           console.error(error);
//           alert(error.response.data.message);
//       }

// };

const InputChart=()=>{

  const useRole = () => {
    const auth = useAuthUser();
    return auth?.uid;
  };

  const uid = useRole();
  console.log(uid)

    const [sendData, setSendData] = useState(false);
    const [combinePredic, setCombinePredict]=useState([])

    const handleSubmit = async (e, selectedTensile, selectedComposite, corrosionType) => {
      e.preventDefault();
      console.log(e.target)
        const SID = Date.now()
        let depth;
        let thickPercentage;
      // Get all values from the form
      const length = e.target.length.value;
      const width = e.target.width.value;
      const diameter = e.target.diameter.value;
    //   const corrosion = e.target.depth.value; //option
      const thickness = e.target.thickness.value;
    //   const thickPercentage = e.target.thickPercentage.value; //option

      if (corrosionType === 'Depth of corrosion') {
      depth=e.target.depth.value;
      thickPercentage=0;
    } else if (corrosionType === 'Percentage of corrosion') {
      thickPercentage=e.target.thickPercentage.value;
      depth=0;
    }
  
      // if(!length && !width && !diameter && !thickness && (!depth || !thickPercentage)){
      //   return alert('Please fill all the details before submit')
      // }

      const reqBody = {
        UID:uid,
        SID:SID,
          length: length,
          width: width,
          diameter: diameter,
        //   corrosion: corrosion,
        depth:depth,
          thickness: thickness,
          thickPercentage: thickPercentage,
          tensile: selectedTensile,
          composite: selectedComposite,
      };

      try {
          // First API call
          // const theoryRes = await axios.post("https://pipeline.eagleattech.com/api/theory/calculate", reqBody);
          const theoryRes = await axios.post(`${API_ENDPOINT_BACK}/api/theory/calculate`, reqBody);
          // console.log(theoryRes.data);
          setSendData(theoryRes.data);
  
          // Second API call
          const predictionRes = await axios.post(`${API_ENDPOINT_ML}/predict/unrepaired`, reqBody);
          console.log(predictionRes.data);
  
          const unrepairArray = predictionRes.data;
          setCombinePredict(unrepairArray);
  
      } catch (error) {
          console.error(error);
          alert(error.response.data.message || "An error occurred.");
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
                <div style={{width:"30%",  borderRadius:10, marginBottom:10}}>
                    {/* <FormInput handleSubmit={handleSubmit}/> */}
                    <SecondForm handleSubmit={handleSubmit}/>
                </div>
                <div style={{width:"70%"}}>
                {!sendData ? <div style={{width:'100%', height:"100%", display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <p style={{textAlign:'center', color:'white', fontSize:'2rem'}}>No data...</p>
                    </div>:  
                   
                      <BurstChart data={sendData} predictData={combinePredic}/>
                      
                      }
  
                  
                </div>
                {/* <SecondChart data={sendData}/> */}
                {/* <CalculatedChart data={sendData}/> */}
               </ChartLayout>
            </InputLayout>
        </div>
            
        
    )
}

export default InputChart;