// components/InfoImageRow.jsx
import React from 'react';
import './InfoImageRow.css'

const InfoImageRow = ({ info }) => {
  return (
    <div className='InfoImageRow' >
      {info.map((item, index) => (
        <div 
          key={index} 
          className='InfoImageItem'>
          <img
            src={item.image}
            alt={`Info view ${index}`}
            style={{
              width: '3.5vw',
              height: '7vh',
              borderRadius: '10px',
              marginBottom: '5px'
            }}
          />
          <span style={{ textAlign: 'center', width: '9vw',fontSize : '2.05vh' }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoImageRow;
