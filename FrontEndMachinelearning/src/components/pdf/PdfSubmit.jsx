import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import AppRoutes from './components/routes/index'
// import './App.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfFile from './PdfFile'

function PdfSubmit() {
 

  return (
    <div>
    <PDFDownloadLink document={<PdfFile/>} fileName="FORM">
      {({loading}) =>(loading ? <button>loading document...</button>  : <button>Download</button>)}
    </PDFDownloadLink>
    </div>
  )
}

export default PdfSubmit;
