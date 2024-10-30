// components/InfoImageRow.jsx
import React from 'react';

const InfoImageRow = ({ info }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
      {info.map((item, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
          <img
            src={item.image}
            alt={`Info view ${index}`}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '10px',
              marginBottom: '5px'
            }}
          />
          <span style={{ textAlign: 'center' }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoImageRow;
