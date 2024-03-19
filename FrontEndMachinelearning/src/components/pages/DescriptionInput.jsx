import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import InputLayout from '../layout/InputLayout';
import SecondNavigation from '../navigation/SecondNavigation';
import DetailsDrawing from '../DescriptionPage/DetailsDrawing';

const DescriptionInput=()=>{
   
  return (
    <div style={{backgroundColor:"#193948",opacity:0.8}}>
      <InputLayout>
        <SecondNavigation/>
        <div>
          <DetailsDrawing/>
        </div>
      </InputLayout>

    </div>
  )
}

export default DescriptionInput;