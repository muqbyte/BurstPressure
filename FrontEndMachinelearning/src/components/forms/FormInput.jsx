import React, { useState, useEffect } from "react";
import BurstChart from "../charts/BurstChart";

const FormInput=({handleSubmit})=>{
    const [sendData,setData]=useState(false)
    const [selectedTensile, setSelectedTensile]=useState("")
    const [selectedComposite, setSelectedComposite]=useState("")


    const handleTensile=(event)=>{
        setSelectedTensile(event.target.value);
        console.log(selectedTensile)
    }

    const handleComposite=(event)=>{
        setSelectedComposite(event.target.value);
        console.log(selectedComposite)
    }
    return(
        <form  onSubmit={(event)=>handleSubmit(event,selectedTensile,selectedComposite)}>
        <div className="flex flex-row justify-evenly">
           
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Length</label>
                <input type="text" id="length" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required style={{width:150}} name="length"/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width</label>
                <input type="text" id="width" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required style={{width:150}} name="width"/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diameter</label>
                <input type="text" id="diameter" className="p-1 text-center text-white bg-gray-700 rounded-lg outline-none" placeholder="mm" required  style={{width:150}} name="diameter"/>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tensile</label>
                <div className="relative w-full lg:max-w-sm">
                <select style={{width:150}} className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" onChange={handleTensile}>
                <option  hidden disabled selected value="" style={{color:""}}>Percentage</option>
                <option value="25%">25%</option>
                <option value="50%">50%</option>
                <option value="75%">75%</option>
                <option value="100%">100%</option>
                </select>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Composite</label>
                <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-1 text-center text-white bg-gray-700 rounded-lg outline-none" style={{width:150}} onChange={handleComposite}>
                <option hidden disabled selected value="">Choose Type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
                </select>
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

export default FormInput;