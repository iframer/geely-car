import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image360Viewer from './Image360Viewer';
import './App.css';
import carsData from './data.js'

const Test = () => {
  const data = carsData.okavango;
  console.log(data.images_360);

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

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {data.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Additional view ${index}`}
            onClick={() => openImage(img)} // Обработчик клика для открытия изображения
            style={{ width: '10%', margin: '0', cursor: 'pointer' }} // добавьте курсор указателя
          />
        ))}
      </div>

      {/* Ряд изображений с текстом */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
        {data.info.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
            <img
              src={item.image}
              alt={`Info view ${index}`}
              style={{
                width: '50px', // ширина изображений информации
                height: '50px', // высота изображений информации
                borderRadius: '10px', // закругленные края
                marginBottom: '5px' // отступ между изображением и текстом
              }}
            />
            <span style={{ textAlign: 'center' }}>{item.text}</span> {/* Центрируем текст под изображением */}
          </div>
        ))}
      </div>

      {/* Модальное окно для изображения на полный экран */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // полупрозрачный фон
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000 // высокий индекс для отображения поверх других элементов
        }} onClick={closeImage}> {/* Закрытие по клику на фон */}
          <img src={currentImage} alt="Full screen view" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Router>    
    <Routes>
      <Route path="/" element={< Test />} />
      <Route path="/test" element={<Test />} />

    </Routes>
  </Router>
);

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App />);
