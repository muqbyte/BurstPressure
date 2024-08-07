// import React, { useRef, useState, useEffect } from "react";
// import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import html2canvas from "html2canvas";
// import PdfFile from "../pdf/PdfFile";
// import { PDFDownloadLink } from '@react-pdf/renderer';

// const BurstChart = (props) => {
//   const chartRef = useRef(null);
//   const [chartImage, setChartImage] = useState(null);
//   const [asmeb31gData, setAsmeb31gData] = useState([]);
//   const [pccorrcData, setPccorrcData] = useState([]);
//   const [dnvrpData, setDnvrpData] = useState([]);
//   const [modasmeData, setModasmeData] = useState([]);
//   const [allData, setAllData]= useState([])
//   const [combinedData, setCombinedData] = useState([]);

//   const captureChart = () => {
//     if (!chartRef.current) return;
  
//     setTimeout(() => {
//       html2canvas(chartRef.current)
//         .then((canvas) => {
//           const capturedImage = canvas.toDataURL("image/png");
//           setChartImage(capturedImage);
//         })
//         .catch((error) => {
//           console.error("Error capturing chart:", error);
//         });
//     }, 5000);
//   };


//   useEffect(() => {
//     if (props.data && props.data.length > 0) {
//       console.log("props",props.data)
//       setAllData(props.data)
//       captureChart();
//     }
//   }, [props.data]);

//   useEffect(() => {
//     console.log(allData)
//     if(allData.length>0){
//         const [ASMEB31G, PCCORRC, DNVRPF101, MODASMEB31G] = allData;
//         const newData = [];

//         // Push each object into the newData array
//         newData.push({ x: ASMEB31G.category, y: ASMEB31G.BP });
//         newData.push({ x: PCCORRC.category, y: PCCORRC.BP });
//         newData.push({ x: DNVRPF101.category, y: DNVRPF101.BP });
//         newData.push({ x: MODASMEB31G.category, y: MODASMEB31G.BP });
  
//         // Set the state with the combined data
//         setCombinedData(newData);
//         console.log("newData",newData)
//     }
   
//   }, [allData]);

//   return  (
//     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} ref={chartRef}>
//          <ResponsiveContainer width="100%" height={350}>
//         <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
//           <XAxis dataKey="x" tick={{ fill: '#6ad6d6' }} stroke="orange" />
//           <YAxis dataKey="y" tick={{ fill: '#6ad6d6' }} stroke="orange" />
//           {/* <Legend /> */}
//           {combinedData.length > 0 && <Scatter name="asme" data={combinedData} fill="Red" />}
//           <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
//         </ScatterChart>
//       </ResponsiveContainer>
//       <div style={{marginTop:20}}>
//         {chartImage && (
//           <PDFDownloadLink document={<PdfFile chartImage={chartImage} />}  fileName="Chart.pdf">
//             {({ loading }) => (
//               loading ? <button>loading document...</button> : <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Download Chart PDF</button>
//             )}
//           </PDFDownloadLink>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BurstChart;

import React, { useState } from "react";
import CalculatedChart from "./CalculatedChart";
import PredictionChart from "./PredictionChart";

const BurstChart = (props) => {
  const [selectedChart, setSelectedChart] = useState("Calculated Chart");
  const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [chartType, setChartType] = useState("Calculated");

    const handleOptionClick = (type) => {
        setSelectedChart(type);
        setDropdownOpen(false);
    };

    const handleDropdownClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setDropdownOpen(!dropdownOpen);
    };

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
    console.log("props.predictData", props.predictData)
  };

  const data = props.data;
  const predictData = props.predictData;

  return (
    <div style={{paddingTop:10}}>
      {/* <select
        value={selectedChart}
        onChange={handleChartChange}
        style={{
          padding: '2px',
          fontSize: '16px',
          // border: '1px solid',
          borderRadius: '4px',
          outline: 'none',
          backgroundColor:"#3b82f6",
          color:"white",
          
        }}
      >
        <option value="calculated" style={{color:"white"}}>Calculated Chart</option>
        <option value="prediction">Prediction Chart</option>
      </select> */}

      <div className="relative flex flex-col gap-2" style={{marginBottom:25}}>
                    <button
                        onClick={handleDropdownClick}
                        className="p-2 text-sm text-white bg-gray-700 rounded-lg"
                        style={{ width: '20%' }}
                    >
                        {selectedChart}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute bg-gray-700 rounded-lg shadow-lg" style={{width:"20%"}}>
                            <div
                                onClick={() => handleOptionClick("Calculated Chart")}
                                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-600"
                            >
                               Calculated Chart
                            </div>
                            <div
                                onClick={() => handleOptionClick("Prediction Chart")}
                                className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-600"
                            >
                                Prediction Chart
                            </div>
                        </div>
                    )}
                </div>








      {selectedChart === "Calculated Chart" && (
        <div>
          <CalculatedChart data={data} />
        </div>
      )}

      {selectedChart === "Prediction Chart" && (
        <div>
          <PredictionChart predictData={predictData} />
        </div>
      )}
    </div>
  );
};

export default BurstChart;

