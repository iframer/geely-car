import React, { useState } from 'react';

import carsData from '../Data/data.jsx';
import Image360Viewer from '../Image360/Image360Viewer.jsx';
import ImageViewer from '../ImageViewer/ImageViewer.jsx';
import InfoImageRow from '../InfoImageRow/InfoImageRow.jsx';
import Modal from '../Modal/Modal.jsx';
import ColorSelector from '../ColorSelector/ColorSelector.jsx';
import CarInfoRight from '../CarInfoRight/CarInfoRight.jsx';

import './CarInfoLeft.css';

const CarInfoLeft = () => {
  const data = carsData.emgrand;
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
    <div className="CarInfo">
      <div className="CarInfoLeft">
      <Image360Viewer images={data.images_360[currentColorIndex].images} />
      <ColorSelector 
        colors={data.images_360} 
        currentColorIndex={currentColorIndex} 
        setCurrentColorIndex={setCurrentColorIndex} 
      />
      <ImageViewer images={data.image} openImage={(index) => openImage(index)} />
      <InfoImageRow info={data.info} />
      <Modal
        isOpen={isOpen}
        closeImage={closeImage}
        currentImage={data.image[currentIndex]}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </div>
    <div className="CarInfoRight">
      <CarInfoRight nameCar = {data.name} priceCar = {data.price}/>
    </div>
    </div>
  );
};

export default CarInfoLeft;
