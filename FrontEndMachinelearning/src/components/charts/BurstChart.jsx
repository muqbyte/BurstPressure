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
  const [asmeb31gData, setAsmeb31gData] = useState([]);
  const [pccorrcData, setPccorrcData] = useState([]);
  const [dnvrpData, setDnvrpData] = useState([]);
  const [modasmeData, setModasmeData] = useState([]);
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
  // console.log("haa",data);

  useEffect(() => {
    console.log("data ni hah",data)
    if (props.data && props.data.length > 0) {
      const [ASMEB31G, PCCORRC, DNVRPF101, MODASMEB31G] = props.data;
      


      // setModel1Data([{ x: +model1.distance, y: +model1.burstPressure, Category: model1.category }]);
      // setModel2Data([{ x: +model2.distance, y: +model2.burstPressure, Category: model2.category }]);
      // setModel3Data([{ x: +model3.distance, y: +model3.burstPressure, Category: model3.category }]);
      // setModel4Data([{ x: +model4.distance, y: +model4.burstPressure, Category: model4.category }]);
      // setModel5Data([{ x: +model5.distance, y: +model5.burstPressure, Category: model5.category }]);
      setAsmeb31gData([{ x: ASMEB31G.category, y: ASMEB31G.BP}]);
      setPccorrcData([{ x: PCCORRC.distance, y: PCCORRC.BP}]);
      setDnvrpData([{ x: DNVRPF101.distance, y: DNVRPF101.BP}]);
      setModasmeData([{ x: MODASMEB31G.distance, y: MODASMEB31G.BP}]);
      // setAllData(model2Data);
      console.log("allData",asmeb31gData)

    captureChart()
    }
  }, [props.data]);

  useEffect(() => {
    setAllData([
      // ...model1Data, ...model2Data, ...model3Data, ...model4Data, ...model5Data,
      ...asmeb31gData, ...pccorrcData, ...dnvrpData, ...modasmeData
    ]);
    console.log(allData)
  }, [model1Data, model2Data, model3Data, model4Data, model5Data, asmeb31gData, pccorrcData, dnvrpData, modasmeData]);

  return  (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} ref={chartRef}>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <ZAxis dataKey="Category" name=""Category/>
          <XAxis dataKey="x" type="text" name="Distance" tick={{ fill: '#6ad6d6' }} stroke="orange" unit="cm" /> 
          
          <YAxis dataKey="y" type="number" name="Burst pressure" tick={{ fill: '#6ad6d6' }} stroke="orange" unit="KPa"/> 
          <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
         <Legend />
          {/* {model1Data.length > 0 && <Scatter name="Model 1" data={model1Data} fill="#FF1900" />}
          {model2Data.length > 0 && <Scatter name="Model 2" data={model2Data} fill="#9800FF" />}
          {model3Data.length > 0 && <Scatter name="Model 3" data={model3Data} fill="#FFFA00" />}
          {model4Data.length > 0 && <Scatter name="Model 4" data={model4Data} fill="#04D9FF" />}
          {model5Data.length > 0 && <Scatter name="Model 5" data={model5Data} fill="#FF00FF" />} */}
          {asmeb31gData.length > 0 && <Scatter name="Shell92" data={asmeb31gData} fill="#39FF14" />}
          {pccorrcData.length > 0 && <Scatter name="ASME" data={pccorrcData} fill="#FF9933" />}
          {dnvrpData.length > 0 && <Scatter name="M. ASME" data={dnvrpData} fill="#FF6EC7" />}
          {modasmeData.length > 0 && <Scatter name="B31G" data={modasmeData} fill="#" />}
                
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