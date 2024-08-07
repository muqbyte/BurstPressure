import React, { useRef, useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from "html2canvas";
import PdfFile from "../pdf/PdfFile";
import { PDFDownloadLink } from '@react-pdf/renderer';

const CalculatedChart = (props) => {
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);
  const [asmeb31gData, setAsmeb31gData] = useState([]);
  const [pccorrcData, setPccorrcData] = useState([]);
  const [dnvrpData, setDnvrpData] = useState([]);
  const [modasmeData, setModasmeData] = useState([]);
  const [allData, setAllData]= useState([])
  const [combinedData, setCombinedData] = useState([]);

  const captureChart = () => {
    if (!chartRef.current) return;
  
    setTimeout(() => {
      html2canvas(chartRef.current)
        .then((canvas) => {
          const capturedImage = canvas.toDataURL("image/png");
          setChartImage(capturedImage);
        })
        .catch((error) => {
          console.error("Error capturing chart:", error);
        });
    }, 3000);
  };

  const handleRefresh = () => {
    window.location.reload();
};






  useEffect(() => {
    if (props.data && props.data.length > 0) {
      // console.log("props",props.data)
      setAllData(props.data)
      captureChart();
    }
  }, [props.data]);

  useEffect(() => {
    // console.log(allData)
    if(allData.length>0){
        const [ASMEB31G, PCCORRC, DNVRPF101, MODASMEB31G] = allData;
        const newData = [];

        // Push each object into the newData array
        newData.push({ x: ASMEB31G.category, y: ASMEB31G.BP });
        newData.push({ x: PCCORRC.category, y: PCCORRC.BP });
        newData.push({ x: DNVRPF101.category, y: DNVRPF101.BP });
        newData.push({ x: MODASMEB31G.category, y: MODASMEB31G.BP });
  
        // Set the state with the combined data
        setCombinedData(newData);
        // console.log("newData",newData)
    }
   
  }, [allData]);

  return  (
    <div  style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width:"100%"}} ref={chartRef}>
      <ResponsiveContainer width="100%" height={290}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <XAxis dataKey="x" tick={{ fill: '#6ad6d6' }} stroke="orange" />
          <YAxis dataKey="y" tick={{ fill: '#6ad6d6' }} stroke="orange"  label={{ value: 'Burst Pressure', angle: -90, position: 'insideLeft', textAnchor: 'middle', fill: '#6ad6d6',style: { fontSize: 18 }}}/>
          {/* <Legend /> */}
          {combinedData.length > 0 && <Scatter name="asme" data={combinedData} fill="Orange" />}
          <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
        </ScatterChart>
      </ResponsiveContainer>
      </div>

      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      {combinedData.length > 0 && <table className="text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50" style={{color:"#00C0DA"}}>Model</th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50" style={{color:"#00C0DA"}}>Burst Pressure (MPa)</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map(({ x,y }) => (
            <tr key={x} className="even:bg-blue-gray-50/50">
              <td className="p-2" style={{color:"#00C0DA"}}>{x}</td>
              <td className="p-2" style={{color:"#00C0DA"}}>{y}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      </div>
      
         
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:20, width:"50%"}}>
        <div>
          {chartImage && (
          <PDFDownloadLink document={<PdfFile chartImage={chartImage} combinedData={combinedData} />}  fileName="Chart.pdf">
            {({ loading }) => (
              loading ? <button>loading document...</button> : <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Download Chart PDF</button>
            )}
          </PDFDownloadLink>
          )}
      </div>
      
      <div>
        <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleRefresh}>Submit New Data</button>
      </div>

      </div>   
      
    </div>
  );
}

export default CalculatedChart;
