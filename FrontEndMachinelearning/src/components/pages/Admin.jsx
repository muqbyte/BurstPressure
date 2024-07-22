import React, {useState, useEffect} from "react";
import NavigationBar from "../navigation/NavigationBar";
import MainMenu from "../home/MainMenu";
import Piping from "../../assets/BackgroundPiping.png"
import HomeLayout from "../layout/HomeLayout";
import InputLayout from "../layout/InputLayout";
import SecondNavigation from "../navigation/SecondNavigation";
import TableUser from "../Table/TableUser";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { API_ENDPOINT_ML } from '../../config';
import { API_ENDPOINT_BACK } from '../../config';

const PastData=()=>{

    const [listOfUser, setListOfUser]=useState([{
        id:"",
        username:"",
        email:"",
        role:""
    }])
    const [autoUpdate, setAutoUpdate] = useState(false);


    const navigate = useNavigate();

    const InputChartPage=()=>{
        navigate("/input")
    }   

    const getUsers = async () => {

        try {

            const getAllUsers = await axios.get(`${API_ENDPOINT_BACK}/api/admin/users`);
           {
               setListOfUser(getAllUsers.data)

            } 

        } catch (error) {
            console.error(error);
          
        }
      };

      const handleUserUpdate = async (email,role) => {
        const reqBody = {
            email,
            role,
        };
        try {
            const updateUser = await axios.put(`${API_ENDPOINT_BACK}/api/admin/user`, reqBody);
            getUsers()

        } catch (error) {
            console.error(error);
          
        }
        // const updatedList = props.listOfUser.map((user) =>
        //   user.id === updatedData.id ? updatedData : user
        // );
        // props.updateUserList(updatedList);
        // setIsModalOpen(false);
      };

      const handleUserDelete = async (email) => {
        const reqBody = {
            email,
        };
        console.log(email)
        try {
            const deleteUser = await axios.delete(`${API_ENDPOINT_BACK}/api/admin/user`, {data:reqBody});
            console.log(deleteUser)
            getUsers()

        } catch (error) {
            console.error(error);
          
        }
        // const updatedList = props.listOfUser.map((user) =>
        //   user.id === updatedData.id ? updatedData : user
        // );
        // props.updateUserList(updatedList);
        // setIsModalOpen(false);
      };

        useEffect(() => {
            getUsers()
  }, [autoUpdate]);

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
                     <TableUser listOfUser={listOfUser} updateUserList={handleUserUpdate} handleUserDelete={handleUserDelete}/>
                     <div>
                    
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