import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './components/routes/index'
import './App.css'
import PdfFile from './components/pdf/PdfFile'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfSubmit from './components/pdf/PdfSubmit'
import MyChart from './components/charts/BurstImage'
import DownloadPDF from './components/pdf/PdfTable'
import Table from './components/pdf/TableExample'

function App() {
 

  return (
    <div>
    <AppRoutes/>
    {/* <PdfSubmit/> */}
    {/* <MyChart/> */}
    {/* <DownloadPDF/> */}
    {/* <Table/> */}
    </div>
  )
}

export default App
