import React from 'react';
import './ImageViewer.css';

const ImageViewer = ({ images, openImage }) => {
  return (
    <div className="ImageViewer">
      {images.map((img, index) => (
        <div className="imageCollector" key={index}>
          <img
            className={`imageViewerImage ${
              index === 0 ? 'first' : index === images.length - 1 ? 'last' : ''
            }`}
            src={img}
            alt={`Additional view ${index}`}
            onClick={() => openImage(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageViewer;
