import React, { useRef,useState } from "react";
import { useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis,CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis, Label } from 'recharts';
import html2canvas from "html2canvas";
import PdfFile from "../pdf/PdfFile";
import { PDFDownloadLink,Text } from '@react-pdf/renderer';

const BurstChart = (props) => {
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);
  const [model1Data, setModel1Data] = useState([]);
  const [model2Data, setModel2Data] = useState([]);
  const [model3Data, setModel3Data] = useState([]);
  const [model4Data, setModel4Data] = useState([]);
  const [model5Data, setModel5Data] = useState([]);
  const [shellData, setShellData] = useState([]);
  const [asmeData, setAsmeData] = useState([]);
  const [masmeData, setMasmeData] = useState([]);
  const [beigData, setBeigData] = useState([]);
  const [allData, setAllData]=useState([])

  


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
    }, 5000); // Adjust the delay time as needed (in milliseconds)
  };

  const data=props.data

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const [model1, model2, model3, model4, model5, shell, ASME, MASME, BE1G] = props.data;

      setModel1Data([{ x: +model1.distance, y: +model1.burstPressure, Category: model1.category }]);
      setModel2Data([{ x: +model2.distance, y: +model2.burstPressure, Category: model2.category }]);
      setModel3Data([{ x: +model3.distance, y: +model3.burstPressure, Category: model3.category }]);
      setModel4Data([{ x: +model4.distance, y: +model4.burstPressure, Category: model4.category }]);
      setModel5Data([{ x: +model5.distance, y: +model5.burstPressure, Category: model5.category }]);
      setShellData([{ x: +shell.distance, y: +shell.burstPressure, Category: shell.category }]);
      setAsmeData([{ x: +ASME.distance, y: +ASME.burstPressure, Category: ASME.category }]);
      setMasmeData([{ x: +MASME.distance, y: +MASME.burstPressure, Category: MASME.category }]);
      setBeigData([{ x: +BE1G.distance, y: +BE1G.burstPressure, Category: BE1G.category }]);
      // setAllData(model2Data);
      // console.log("allData",allData)

    captureChart()
    }
  }, [props.data]);

  useEffect(() => {
    setAllData([
      ...model1Data, ...model2Data, ...model3Data, ...model4Data, ...model5Data,
      ...shellData, ...asmeData, ...masmeData, ...beigData
    ]);
    console.log(allData)
  }, [model1Data, model2Data, model3Data, model4Data, model5Data, shellData, asmeData, masmeData, beigData]);

  return  (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} ref={chartRef}>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <ZAxis dataKey="Category" name=""Category/>
          <XAxis dataKey="x" type="number" name="Distance" tick={{ fill: '#6ad6d6' }} stroke="orange" unit="cm" /> 
          
          <YAxis dataKey="y" type="number" name="Burst pressure" tick={{ fill: '#6ad6d6' }} stroke="orange" unit="KPa"/> 
          <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
         {model1Data.length > 0 && <Legend />}
          {model1Data.length > 0 && <Scatter name="Model 1" data={model1Data} fill="#FF1900" />}
          {model2Data.length > 0 && <Scatter name="Model 2" data={model2Data} fill="#9800FF" />}
          {model3Data.length > 0 && <Scatter name="Model 3" data={model3Data} fill="#FFFA00" />}
          {model4Data.length > 0 && <Scatter name="Model 4" data={model4Data} fill="#04D9FF" />}
          {model5Data.length > 0 && <Scatter name="Model 5" data={model5Data} fill="#FF00FF" />}
          {shellData.length > 0 && <Scatter name="Shell92" data={shellData} fill="#39FF14" />}
          {asmeData.length > 0 && <Scatter name="ASME" data={asmeData} fill="#FF9933" />}
          {masmeData.length > 0 && <Scatter name="M. ASME" data={masmeData} fill="#FF6EC7" />}
          {beigData.length > 0 && <Scatter name="B31G" data={beigData} fill="#" />}
                
        </ScatterChart>
      </ResponsiveContainer>
      <div style={{marginTop:20, display:"flex", flexDirection:"column"}}>
      {/* <button onClick={captureChart}>Capture Chart</button> */}
      {chartImage && <PDFDownloadLink document={<PdfFile chartImage={chartImage} allData={allData}/>}  fileName="Chart.pdf" >
        {({ loading }) => (loading ? <button>loading document...</button> : <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Download Chart PDF</button>)}
      </PDFDownloadLink>}
      </div>
    </div>
  );
}

{/* <XAxis dataKey="index" type="number" label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }} />
<YAxis unit="ms" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
<Scatter name="red" dataKey="red" fill="pink" />
<Scatter name="blue" dataKey="blue" fill="blue" />
<Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
<Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" /> */}

export default BurstChart;