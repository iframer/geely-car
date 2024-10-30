import React, { useState } from 'react';
import Image360Viewer from '../Image360/Image360Viewer.jsx';
import ImageViewer from '../ImageViewer/ImageViewer.jsx';
import InfoImageRow from '../InfoImageRow/InfoImageRow.jsx';
import Modal from '../Modal/Modal.jsx';
import carsData from '../Data/data.jsx';

const App = () => {
  const data = carsData.okavango;
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openImage = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <Image360Viewer data={data.images_360} />
      <ImageViewer images={data.image} openImage={openImage} />
      <InfoImageRow info={data.info} />
      <Modal isOpen={isOpen} closeImage={closeImage} currentImage={currentImage} />
    </div>
  );
};

export default App;
