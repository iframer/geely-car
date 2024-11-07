
import { useState, useEffect } from 'react';
import './Slider.css';

const images = [
    'https://optim.tildacdn.pro/tild3631-3738-4035-b833-363336303832/-/format/webp/Untitled_9.jpg',
    'https://optim.tildacdn.pro/tild3235-3135-4063-a666-396466626336/-/format/webp/Untitled_10.jpg',
  ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={goToPrevious}>❮</button>
      <button className="slider-button next" onClick={goToNext}>❯</button>
      <div className="dots">
      </div>
    </div>
  );
};

export default Slider;

