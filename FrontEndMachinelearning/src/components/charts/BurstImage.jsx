import React, { useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import html2canvas from "html2canvas";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from '../pdf/PdfFile'

const MyChart = () => {
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 }
  ];

  const captureChart = () => {
    if (!chartRef.current) return;

    html2canvas(chartRef.current)
      .then((canvas) => {
        const capturedImage = canvas.toDataURL("image/png");
        setChartImage(capturedImage);
      })
      .catch((error) => {
        console.error("Error capturing chart:", error);
      });
  };

  return (
    <div>
      <button onClick={captureChart}>Capture Chart</button>
      <div ref={chartRef}>
        <LineChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      {chartImage && <PDFDownloadLink document={<PdfFile chartImage={chartImage} />} fileName="Chart.pdf">
        {({loading}) =>(loading ? <button>loading document...</button>  : <button>Download Chart PDF</button>)}
      </PDFDownloadLink>}
    </div>
  );
};

export default MyChart;
