import React from 'react';
import './ImageViewer.css';

const ImageViewer = ({ images, openImage }) => {
  return (
    <div className="ImageViewer">
      {images.map((img, index) => (
        <img
          className="imageViewerImage"
          key={index}
          src={img}
          alt={`Additional view ${index}`}
          onClick={() => openImage(index)}
        />
      ))}
    </div>
  );
};

export default ImageViewer;
