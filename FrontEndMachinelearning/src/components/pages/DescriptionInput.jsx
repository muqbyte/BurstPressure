import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import InputLayout from '../layout/InputLayout';
import SecondNavigation from '../navigation/SecondNavigation';

const DescriptionInput=()=>{
   
  return (
    <div style={{backgroundColor:"#193948",opacity:0.8}}>
      <InputLayout>
        <SecondNavigation/>
      </InputLayout>

    </div>
  )
}

export default DescriptionInput;