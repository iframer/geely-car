import React, { useState } from 'react';
import Image360Viewer from '../Image360/Image360Viewer.jsx';
import ImageViewer from '../ImageViewer/ImageViewer.jsx';
import InfoImageRow from '../InfoImageRow/InfoImageRow.jsx';
import Modal from '../Modal/Modal.jsx';
import carsData from '../Data/data.jsx';
import './CarInfoLeft.css';

const CarInfoLeft = () => {
  const data = carsData.okavango;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + data.image.length) % data.image.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % data.image.length);
  };

  return (
    <div className="CarInfoLeft">
      <Image360Viewer images={data.images_360[currentColorIndex].images} />
      <div className="color-selector">
        {data.images_360.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: `#${color.color_code}`, margin: '5px' }}
            onClick={() => setCurrentColorIndex(index)}
          >
          </button>
        ))}
      </div>
      <ImageViewer images={data.image} openImage={(index) => openImage(index)} />
      <InfoImageRow info={data.info} />
      <Modal
        isOpen={isOpen}
        closeImage={closeImage}
        currentImage={data.image[currentIndex]}
        prevImage={prevImage} nextImage={nextImage}/>
    </div>
  );
};

export default CarInfoLeft;
