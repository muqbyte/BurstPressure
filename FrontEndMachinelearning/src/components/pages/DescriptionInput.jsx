import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const DescriptionInput=()=>{
   
  return (
    <Popup trigger={<button>Open Modal</button>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
          </div>
          <div className="actions">
            <button className="button" onClick={close}>
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default DescriptionInput;