import React, { useState, useEffect } from "react";
import BurstChart from "../charts/BurstChart";
import { useNavigate } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import '../../assets/fonts/Goldman-Regular.ttf';
import Popup from 'reactjs-popup';




const SecondForm=({handleSubmit})=>{
    const [handleMouse, setHandleMouse]=useState(false)
    const [sendData,setData]=useState(false)
    const [value, setValue] = useState('');
    const [selectedTensile, setSelectedTensile]=useState("")
    const [selectedComposite, setSelectedComposite]=useState("")
    const navigate = useNavigate();
    const [typeState,setTypeState]=useState(false)
    const [infoState, setInfoState]=useState({})
    const [submitComposite, setSubmitComposite]=useState("")
    const [corrosionType, setCorrosionType] = useState('Depth of corrosion');
    const [isOpen, setIsOpen] = useState(false);
    
    const informationPage=()=>{
        navigate("/details")
    }   

    
    const handleTypeChange = (type) => {
        setCorrosionType(type);
        setIsOpen(false); // Close dropdown after selection (optional)
      };

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
        // console.log(selectedTensile)
    }

    const handleComposite = (event) => {
        setSubmitComposite(event.target.value)
        setSelectedComposite(event.target.value);
        const selectedValue = event.target.value;
        if (selectedValue === "Type 1") {
            setInfoState(infoPass);
            // console.log("info", infoPass); // Logging infoPass instead of infoState
            setIsOpen(true); // Open the popup when Type 1 is chosen
        } else if (selectedValue === "Type 2" || selectedValue === "Type 3") {
            setInfoState(typeTwoPass);
            // console.log("info", typeTwoPass); // Logging typeTwoPass instead of infoState
            setIsOpen(true); // Open the popup when Type 1 is chosen
        }
    }

    const closePopup = () => {
        setIsOpen(false);
    };
    

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
        // Update infoState based on selectedComposite
        if (selectedComposite && infoPass[selectedComposite]) {
            setInfoState(infoPass[selectedComposite]);
        }
    }, [selectedComposite]);
    return(
        <form  onSubmit={(event)=>handleSubmit(event,selectedTensile,selectedComposite)}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around",height:"87vh"}} >
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>

                <div style={{display:"flex", flexDirection:"row", paddingBottom:16}}>
                    <h2 className="block mb-2 text-sm font-bold text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular",fontSize:15}}>DEFECT CHARACTERISTIC</h2>
                </div>

    <div style={{display:"flex", flexDirection:"column",  alignItems:"self-end", width:"100%", gap:60}}>

        <div style={{display:"flex", flexDirection:"row"}}>
            <div class="relative h-11 w-full min-w-[200px]" style={{display:"flex", flexDirection:"row",    justifyContent:"center", alignItems:"center"}}>
                <input placeholder="mm"
                        class="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-white" required type="text" id="length" />
                <label
                class="after:content[''] pointer-events-none absolute left-5  -top-1.5 flex h-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" >
                    Length
                </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px]" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <input placeholder="mm"
                        class="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-white" required type="text" id="width"/>
                    <label
                        class="after:content[''] pointer-events-none absolute left-5  -top-1.5 flex h-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Width
                    </label>
                    </div>


    {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
        <div class="relative h-11 w-full min-w-[200px]" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:26}}>
            <input placeholder="mm"
                class="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-white" required type="text" id="depth"/>
            <label
                class="after:content[''] pointer-events-none absolute left-5  -top-1.5 flex h-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Depth of corrosion
            </label>
        </div>
    </div> */}
    </div>

    <div className="flex items-center p-1 space-x-2 bg-gray-700 rounded-lg">
      <div className="flex items-center rounded-lg">
        <input
          type="number"
          placeholder="Enter amount"
          className="w-40 p-2 text-sm text-white bg-transparent rounded-l-lg focus:outline-none"
          style={{ color: 'white' }}
        />
        <div className="p-2 text-sm text-white rounded-r-lg" style={{ width: '30px' }}>
          {corrosionType === 'Depth of corrosion' ? 'mm' : '%'}
        </div>
      </div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-sm text-white bg-transparent bg-gray-700 rounded-lg outline-none"
            style={{ color: 'white', width: '200px' }}
          >
            {corrosionType}
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2929 14.2929C10.6834 13.9024 11.3166 13.9024 11.7071 14.2929C12.0976 14.6834 12.0976 15.3166 11.7071 15.7071L7.70711 19.7071C7.31658 20.0976 6.68342 20.0976 6.29289 19.7071L2.29289 15.7071C1.90237 15.3166 1.90237 14.6834 2.29289 14.2929C2.68342 13.9024 3.31658 13.9024 3.70711 14.2929L7 17.5858L10.2929 14.2929ZM10 6.41421L13.2929 9.70711C13.6834 10.0976 13.6834 10.7308 13.2929 11.1213C12.9024 11.5118 12.2692 11.5118 11.8787 11.1213L10 9.24264L8.12132 11.1213C7.7308 11.5118 7.09763 11.5118 6.70711 11.1213C6.31658 10.7308 6.31658 10.0976 6.70711 9.70711L10 6.41421Z"
              />
            </svg>
          </button>
          {isOpen && (
            <ul className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg w-200">
              <li
                className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200"
                onClick={() => handleTypeChange('Depth of corrosion')}
              >
                Depth of corrosion
              </li>
              <li
                className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200"
                onClick={() => handleTypeChange('Percentage of corrosion')}
              >
                Percentage of corrosion
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
        {/* <div style={{display:"flex", flexDirection:"column"}}>
            <div >
                <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular"}}>OR</h2>
            </div>
            </div> */}
                {/* <div style={{display:"flex", flexDirection:"column"}}> */}
                    {/* <div class="relative h-11 w-full min-w-[200px]" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <input placeholder="mm"
                        class="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-white" required type="text" id="width"/>
                    <label
                        class="after:content[''] pointer-events-none absolute left-5  -top-1.5 flex h-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Width
                    </label>
                    </div> */}

                        {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <div class="relative h-11 w-full min-w-[200px]" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:26}}>
                                <input placeholder="Percentage of corrosion"
                                class="peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-white" required type="text" id="thickPercentage"/>
                                <label
                                class="after:content[''] pointer-events-none absolute left-5  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Percentage of corrosion
                                </label>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <button style={{fontFamily:"PoppinsRegular",fontSize:15, color:"white",display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:5}} onClick={informationPage}>Information <FcInfo size={30}/></button>
            </div>
           
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
                
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h2 className="block mb-2 text-sm font-bold text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular",fontSize:15}}>BASE PIPE</h2>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"self-end", width:"100%"}}>

                    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", width:"50%"}}>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:5}}>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular"}}>Diameter</label>
                            <input type="text" id="diameter" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:100}} name="diameter"/>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular"}}>Tensile</label>
                            <div className="relative w-full lg:max-w-sm">
                            <select className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" style={{width:100}} onChange={handleTensile}>
                            <option hidden disabled selected value="">Psi</option>
                            <option value="X42">X42</option>
                            <option value="X60">X60</option>
                            <option value="X65">X65</option>
                            </select>
                            </div> 
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", width:"50%"}}>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:5}}>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular"}}>Thickness</label>
                            <input type="text" step="any" id="thickness" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:100}} name="thickness"/>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"PoppinsRegular"}}>Composite</label>
                            <div className="relative w-full lg:max-w-sm">
                            <select className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" style={{width:100}} onChange={handleComposite}>
                            <option hidden disabled selected value="">Type</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                            </select>
                            </div>
                            <Popup
    open={isOpen}
    modal
    onClose={closePopup}
    contentStyle={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px"
    }}
>
    <div style={{ padding: 2 }}>
        <h2 style={{fontFamily:"PoppinsRegular"}}>Selected Composite: {selectedComposite}</h2>
        {/* Table */}
        <table className="w-full text-left border-collapse">
            <thead>
                <tr >
                    <th className="px-4 py-2 text-gray-800 bg-gray-200 border border-gray-300">Property</th>
                    <th className="px-4 py-2 text-gray-800 bg-gray-200 border border-gray-300">Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(infoState).map(([property, value]) => (
                    <tr key={property}>
                        <td className="border border-gray-300" style={{width:250, padding:2,fontFamily:"PoppinsRegular"}}>{property}</td>
                        <td className="text-center border border-gray-300" style={{fontFamily:"PoppinsRegular"}}>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={closePopup}>Close</button>
    </div>
</Popup>
                        </div>
                    </div>
                </div>
          </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"  >
                        Submit
                </button>
                </div>
        </div>
        </form>
    )
}

export default SecondForm;