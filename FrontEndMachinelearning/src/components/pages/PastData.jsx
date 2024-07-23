import React, {useState, useEffect} from "react";
import NavigationBar from "../navigation/NavigationBar";
import MainMenu from "../home/MainMenu";
import Piping from "../../assets/BackgroundPiping.png"
import HomeLayout from "../layout/HomeLayout";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import TableDataCalculated from "../Table/TableDataCalculated";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Table from "../Table/CustomTable";

import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const PastData=()=>{
    const navigate = useNavigate();
    const InputChartPage=()=>{
        navigate("/protectedHome")
    }   
    // NEW TABLE


    const columns = ['UID','SID','type' , 'tensile', 'depth','diameter','thickness','length','width', 'composite', 'burst',];
    const columnsPrediction = ['UID','SID','category', 'type', 'tensile', 'depth','length','width','diameter','thickness','composite','burst' ];
    // const columns = ['SID', 'tensile', 'depth','width', 'length', 'burst','type', 'timestamp' ];
    // const columnsPrediction = ['SID','category', 'type', 'tensile', 'depth','length','width',  'wrap','burst','timestamp' ];
    
    // NEW TABLE
    const [listOfUser, setListOfUser]=useState([{
      UID:"",
      SID:"",
        type:"",
        tensile:"",
        depth:"",
        diameter:"",
        thickness:"",
        length:"",
        width:"",
        composite:"",
        burst:"",
        
    }])

    const [listOfDataPrediction, setListOfDataPrediction]=useState([{
        UID:"",
        SID:"",
        category:"",
        type:"",
        tensile:"",
        depth:"",
        length:"",
        width:"",
        diameter:"",
        thickness:"",
        composite:"",
        burst:""

    }])
    // const [listOfUser, setListOfUser]=useState([{
    //     SID:"",
    //     tensile:"",
    //     depth:"",
    //     width:"",
    //     length:"",
    //     burst:"",
    //     type:"",
    //     timestamp:"",
    // }])
    // const [listOfDataPrediction, setListOfDataPrediction]=useState([{
    //     SID:"",
    //     category:"",
    //     type:"",
    //     tensile:"",
    //     depth:"",
    //     length:"",
    //     width:"",
    //     wrap:"",
    //     burst:"",
    //     timestamp:"",
    // }])

    const getData = async () => {

        try {

            const getAllData = await axios.get(`${API_ENDPOINT_BACK}/api/user/data`);
            // const getAllData = await axios.get("http://localhost:5500/api/user/data");
           {

            const keysToRemove = ['timestamp'];

            const updatedArray = getAllData.data.map(obj => {
              keysToRemove.forEach(key => {
                delete obj[key];
              });
              return obj;
            });

            // console.log(updatedArray)
               setListOfUser(updatedArray)
              //  setListOfUser(getAllData.data)

            } 

        } catch (error) {
            console.error(error);
          
        }
      };
    const getDataPrediction = async () => {

        try {

            const getAllData = await axios.get(`${API_ENDPOINT_BACK}/api/user/data/prediction`);
            // const getAllData = await axios.get("http://localhost:5500/api/user/data/prediction");
           {
            const keysToRemove = ['timestamp'];

            const updatedArray = getAllData.data.map(obj => {
              keysToRemove.forEach(key => {
                delete obj[key];
              });
              return obj;
            });
            
            setListOfDataPrediction(updatedArray)

            } 

        } catch (error) {
            console.error(error);
          
        }
      };

        useEffect(() => {
            getData()
            getDataPrediction()
  }, []);

    return(
        
        <div style={{backgroundColor:"#193948",opacity:0.8, minHeight:'100vh'}}>

            {/* <InputLayout> */}
            <SecondNavigation/>
                <div style={{ marginTop:50, marginLeft:20, marginRight:20, paddingBottom:40}}>
                     {/* <TableDataCalculated listOfUser={listOfUser} /> */}
                        {/* <h1 style={{color:"white"}}>Calculated unrepaired</h1> */}

                        <div style={{paddingBottom:60}}>
                        <p style={{textAlign:'center', color:'white', fontSize:'1.2rem', paddingBottom:20}}>Calculated Theory</p>
                     <Table columns={columns} data={listOfUser}/>
                     </div>
                     <div style={{paddingBottom:10}}>
                     <p style={{textAlign:'center', color:'white', fontSize:'1.2rem', paddingBottom:20}}>Prediction</p>
                     <Table columns={columnsPrediction} data={listOfDataPrediction}/>

                     </div>

                     <div>
                     <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" style={{marginTop:"50px"}} onClick={InputChartPage}>Return to Home Page</button>
                     </div>
                 
                </div>
            {/* </InputLayout> */}
                
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