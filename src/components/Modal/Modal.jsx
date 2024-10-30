// components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, closeImage, currentImage }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={closeImage}
    >
      <img src={currentImage} alt="Full screen view" style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  );
};

export default Modal;
