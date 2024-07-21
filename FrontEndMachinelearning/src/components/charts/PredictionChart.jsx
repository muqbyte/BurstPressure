import React, { useRef, useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from "html2canvas";
import PdfFile from "../pdf/PdfFile";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfPredict from "../pdf/PdfPredic";

const PredictionChart = (props) => {
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);
  const [layerOne, setLayerOne]=useState([])
  const [layerTwo, setLayerTwo]=useState([])
  const [layerThree, setLayerThree]=useState([])
  const [layerFour, setLayerFour]=useState([])
  const [unrepairedValue, setUnrepairedValue]=useState([])
  const [predictData, setPredictData]=useState([])
  const [combinedPredict, setCombinedPredict]=useState([])





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
    if (props.predictData && props.predictData.length > 0) {
      // console.log("props",props.predictData)
      setPredictData(props.predictData)
      captureChart();
    }
  }, [props.data]);

  useEffect(() => {
    // console.log("predictData sini", predictData)
    if(predictData.length>0){
        const [unrepaired, repairedLayer2, repairedLayer3, repairedLayer4, repairedLayer5] = predictData;
        // const [onelayer, unrepairedlayer] = predictData;
        // const [onelayer, twolayer, threelayer, unrepairedlayer] = predictData;
        const newData = [];

        // Push each object into the newData array
        newData.push({ x: "Unrepaired", y: unrepaired });
        newData.push({ x: "Repaired Layer-2", y: repairedLayer2 });
        newData.push({ x: "Repaired Layer-3", y: repairedLayer3 });
        newData.push({ x: "Repaired Layer-4", y: repairedLayer4 });
        newData.push({ x: "Repaired Layer-5", y: repairedLayer5 });
        // newData.push({ x: twolayer.type, y: twolayer.burst });
        // newData.push({ x: threelayer.type, y: threelayer.burst });
        // newData.push({ x: onelayer.type, y: onelayer.burst });
        // newData.push({ x: twolayer.type, y: twolayer.burst });
        // newData.push({ x: threelayer.type, y: threelayer.burst });
        // newData.push({ x: unrepairedlayer.category, y: unrepairedlayer.burst });
  
        // Set the state with the combined data
        setCombinedPredict(newData);
        // console.log("newData",newData)
    }
   
  }, [predictData]);

  return  (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width:"100%"}} ref={chartRef}>
        <ResponsiveContainer width="100%" height={290}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <XAxis dataKey="x" tick={{ fill: '#6ad6d6' }} stroke="orange" />
            <YAxis dataKey="y" tick={{ fill: '#6ad6d6' }} stroke="orange" label={{ value: 'Burst Pressure', angle: -90, position: 'insideLeft', textAnchor: 'middle', fill: '#6ad6d6',style: { fontSize: 18 }}}/>
            {/* <Legend /> */}
            {combinedPredict.length > 0 && <Scatter name="asme" data={combinedPredict} fill="#39FF14" line shape="circle" />}
          <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
        </ScatterChart>
      </ResponsiveContainer>
      </div>
         
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      {combinedPredict.length > 0 && <table className="text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50" style={{color:"#00C0DA"}}>Model</th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50" style={{color:"#00C0DA"}}>Burst Pressure (MPa)</th>
          </tr>
        </thead>
        <tbody>
          {combinedPredict.map(({ x,y }) => (
            <tr key={x} className="even:bg-blue-gray-50/50">
              <td className="p-2" style={{color:"#00C0DA"}}>{x}</td>
              <td className="p-2" style={{color:"#00C0DA"}}>{y}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      </div>
      

      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:10, width:"50%"}}>
        <div >
        {chartImage && (
          <PDFDownloadLink document={<PdfPredict chartImage={chartImage} combinedData={combinedPredict}/>}  fileName="Chart.pdf">
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

export default PredictionChart;
