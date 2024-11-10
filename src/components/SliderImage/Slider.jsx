import { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  'https://optim.tildacdn.pro/tild3631-3738-4035-b833-363336303832/-/format/webp/Untitled_9.jpg',
  'https://optim.tildacdn.pro/tild3235-3135-4063-a666-396466626336/-/format/webp/Untitled_10.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phone, setPhone] = useState('+7 ');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePhoneInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Удаляем все нечисловые символы

    // Удаляем начальный "7", если пользователь вводит его вручную
    if (input.startsWith('7')) input = input.slice(1);

    // Ограничиваем длину до 10 цифр
    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    // Форматируем номер по шаблону
    let formatted = '+7 (';
    if (input.length > 0) formatted += input.slice(0, 3);
    if (input.length >= 4) formatted += `) ${input.slice(3, 6)}`;
    if (input.length >= 7) formatted += `-${input.slice(6, 8)}`;
    if (input.length >= 9) formatted += `-${input.slice(8, 10)}`;

    setPhone(formatted);
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
      <form action="submit" className="SliderForm">
        <p>Успейте получить предложение</p>
        <div className="SliderFormElements">
          <input type="text" placeholder="Ваше имя" />
          <input
            type="text"
            className="phone-input"
            placeholder="+7 (999) 999-99-99"
            value={phone}
            onChange={handlePhoneInputChange}
            maxLength="18"
          />
          <button type="submit" className="SliderFormButton">Получить предложение</button>
        </div>
      </form>
      <button className="slider-button prev" onClick={goToPrevious}>❮</button>
      <button className="slider-button next" onClick={goToNext}>❯</button>
    </div>
  );
};

export default Slider;
