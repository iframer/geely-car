import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeImage, currentImage, prevImage, nextImage }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={closeImage}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={closeImage}>×</button>
        
        <button className="prevButton" onClick={prevImage}>⟨</button>
        <img src={currentImage} alt="Selected" className="modalImage" />
        <button className="nextButton" onClick={nextImage}>⟩</button>
      </div>
    </div>
  );
};

export default Modal;
