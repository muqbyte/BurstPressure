import React, { useState, useEffect } from "react";
import BurstChart from "../charts/BurstChart";
import { useNavigate } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import '../../assets/fonts/Goldman-Regular.ttf';
import Popup from 'reactjs-popup';


const FormInput=({handleSubmit})=>{
    const [handleMouse, setHandleMouse]=useState(false)
    const [sendData,setData]=useState(false)
    const [value, setValue] = useState('');
    const [selectedTensile, setSelectedTensile]=useState("")
    const [selectedComposite, setSelectedComposite]=useState("")
    const navigate = useNavigate();
    const [typeState,setTypeState]=useState(false)
    const [infoState, setInfoState]=useState({})
    const [submitComposite, setSubmitComposite]=useState("")
    

   

    const infoPass={
        "E1 (Hoop)": 123,
        "E2 (Axial)":97,
        "E3 (Radial)":100,
        "PR12":200,
        "PR13":200,
        "PR23":200,
        "G12":200,
        "G23":200,
        "DENSITY":200,
        "UTS (Hoop)":200,
        "UTC (Axial)":200,
        "UCS (Axial)":200,
        "Shear (Hoop)":200,
        "Shear (Axial)":200,
        "ERR (Hoop Tensile)":200,
        "ERR (Axial Tensile)":200,
        "ERR (Axial Compression)":100
    }

    const typeTwoPass={
        "E1 (Hoop)": 99,
        "E2 (Axial)":123,
        "E3 (Radial)":200,
        "PR12":200,
        "PR13":200,
        "PR23":200,
        "G12":200,
        "G23":200,
        "DENSITY":200,
        "UTS (Hoop)":200,
        "UTC (Axial)":200,
        "UCS (Axial)":200,
        "Shear (Hoop)":200,
        "Shear (Axial)":200,
        "ERR (Hoop Tensile)":200,
        "ERR (Axial Tensile)":200,
        "ERR (Axial Compression)":100
    }


    const handleChange = (event) => {
        setValue(event.target.value);
      };


    const handleTensile=(event)=>{
        setSelectedTensile(event.target.value);
        console.log(selectedTensile)
    }

    const handleComposite = (event) => {
        setSubmitComposite(event.target.value)
        setSelectedComposite(event.target.value);
        const selectedValue = event.target.value;
        if (selectedValue === "Type 1") {
            setInfoState(infoPass);
            console.log("info", infoPass); // Logging infoPass instead of infoState
        } else if (selectedValue === "Type 2" || selectedValue === "Type 3") {
            setInfoState(typeTwoPass);
            console.log("info", typeTwoPass); // Logging typeTwoPass instead of infoState
        }
    }
    

    const DetailsPage=()=>{
        navigate("/details")
    }   

    const mouseIn=()=>{
        setHandleMouse(true)
    }

    const mouseOut=()=>{
        setHandleMouse(false)
    }

    useEffect(() => {
        console.log(selectedComposite);
    }, [selectedComposite]);

    return(
        <form  onSubmit={(event)=>handleSubmit(event,selectedTensile,selectedComposite)}>
        <div className="flex flex-row items-center justify-evenly" >
           
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Length</label>
                <input type="number" id="length" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required style={{width:100}}/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width</label>
                <input type="number" id="width" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required style={{width:100}} name="width"/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diameter</label>
                <input type="number" id="diameter" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:100}} name="diameter"/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depth of corrosion</label>
                    <input type="number" step="any" id="depth" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:100}} name="depth"/>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage of corrosion</label>
                    <input type="number" id="thickPercentage" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="%" required  style={{width:100}} name="thickPercentage"/>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thickness</label>
                <input type="number" step="any" id="thickness" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:100}} name="thickness"/>
            </div>

            {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thickness</label>
                <input type="number" id="thickPercentage" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="%" required  style={{width:100}} name="thickPercentage"/>
            </div> */}

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tensile</label>
                <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" style={{width:100}} onChange={handleTensile}>
                <option hidden disabled selected value="">Psi</option>
                <option value="X42">X42</option>
                <option value="X60">X60</option>
                <option value="X65">X65</option>
                </select>
                </div>
               
            </div>

            
        
            
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Composite</label>
                <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" style={{width:100}} onChange={handleComposite}>
                <option hidden disabled selected value="">Type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
                </select>
                </div>
                <Popup
                    open={!!selectedComposite}
                    modal
                    contentStyle={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        maxWidth: "400px"
                    }}
                >
                    <div style={{ padding: '20px' }}>
                        <h2>Selected Composite: {selectedComposite}</h2>
                        {/* Table */}
                        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(infoState).map(([property, value]) => (
                                    <tr key={property}>
                                        <td>{property}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Popup>
            </div>

        

            {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <div className="relative w-full lg:max-w-sm">
                <select style={{width:100}} className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" onChange={handleTensile}>
                <option  hidden disabled selected value="" style={{color:""}}>Info</option>
                <option value="25%">E1 (Hoop)</option>
                <option value="50%">E2 (Axial)</option>
                <option value="75%">E3 (Radial)</option>
                <option value="100%">PR12</option>
                <option value="100%">PR13</option>
                <option value="100%">PR23</option>
                <option value="100%">G12</option>
                <option value="100%">G23</option>
                <option value="100%">DENSITY</option>
                <option value="100%">UTS (Hoop)</option>
                <option value="100%">UTC (Axial)</option>
                <option value="100%">UCS (Axial)</option>
                <option value="100%">Shear (Hoop)</option>
                <option value="100%">Shear (Axial)</option>
                <option value="100%">ERR (Hoop Tensile)</option>
                <option value="100%">ERR (Axial Tensile)</option>
                <option value="100%">ERR (Axial Compression)</option>

                </select>
                </div>
            </div> */}

            
            <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
            <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"  >
                    Submit
            </button>
            </div>
        </div>
        </form>
    )
}

export default FormInput;