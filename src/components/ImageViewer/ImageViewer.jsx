// components/ImageViewer.jsx
import React from 'react';

const ImageViewer = ({ images, openImage }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Additional view ${index}`}
          onClick={() => openImage(img)}
          style={{ width: '10%', margin: '0', cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default ImageViewer;
