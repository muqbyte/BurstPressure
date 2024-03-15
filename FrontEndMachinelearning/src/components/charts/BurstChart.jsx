import React, { useRef, useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from "html2canvas";
import PdfFile from "../pdf/PdfFile";
import { PDFDownloadLink } from '@react-pdf/renderer';

const BurstChart = (props) => {
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);
  const [asmeb31gData, setAsmeb31gData] = useState([]);
  const [pccorrcData, setPccorrcData] = useState([]);
  const [dnvrpData, setDnvrpData] = useState([]);
  const [modasmeData, setModasmeData] = useState([]);
  const [allData, setAllData]= useState([])
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
    }, 5000);
  };

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      console.log("props",props.data)
      // setAllData(props.data)
      // console.log("all data", allData)
      captureChart();
    }
  }, [props.data]);

  return  (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} ref={chartRef}>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <XAxis dataKey="x" tick={{ fill: '#6ad6d6' }} stroke="orange" />
          <YAxis dataKey="y" tick={{ fill: '#6ad6d6' }} stroke="orange" />
          <Legend />
           <Scatter name="asme" data={props.data} fill="#39FF14" />
          <Tooltip cursor={{ stroke: 'black', strokeDasharray: "3 3" }} />
        </ScatterChart>
      </ResponsiveContainer>
      <div style={{marginTop:20}}>
        {chartImage && (
          <PDFDownloadLink document={<PdfFile chartImage={chartImage} />}  fileName="Chart.pdf">
            {({ loading }) => (
              loading ? <button>loading document...</button> : <button className="px-6 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Download Chart PDF</button>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}

export default BurstChart;
