import React, { useState } from 'react';
import './SectionAllCar.css';

// Пример данных для автомобилей
const carsData = [
  { id: 1, model: 'Coolray', trim: 'Standard', specs: '1.5T, 7DCT, 177л.с', image: 'coolray-standard.jpg' },
  { id: 2, model: 'Coolray', trim: 'Comfort', specs: '1.5T, 7DCT, 177л.с', image: 'coolray-comfort.jpg' },
  { id: 3, model: 'Coolray', trim: 'Luxury', specs: '1.5T, 7DCT, 177л.с', image: 'coolray-luxury.jpg' },
  { id: 4, model: 'Coolray', trim: 'Flagship', specs: '1.5T, 7DCT, 177л.с', image: 'coolray-flagship.jpg' },
  { id: 5, model: 'Tugella', trim: 'Luxury', specs: '2.0T, 8AT, 238л.с', image: 'tugella-luxury.jpg' },
  { id: 6, model: 'Tugella', trim: 'Flagship', specs: '2.0T, 8AT, 238л.с', image: 'tugella-flagship.jpg' },
  // Дополнительные автомобили для демонстрации кнопки "Load more"
];

const SectionAllCar = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedTrim, setSelectedTrim] = useState('');
  const [visibleCarsCount, setVisibleCarsCount] = useState(4);

  // Фильтрация автомобилей на основе выбранных параметров
  const filteredCars = carsData.filter(car =>
    (selectedModel === '' || car.model === selectedModel) &&
    (selectedTrim === '' || car.trim === selectedTrim)
  );

  const loadMoreCars = () => {
    setVisibleCarsCount(prevCount => prevCount + 4);
  };

  return (
    <div className="configurator-container">
      <h1 className="configurator-title">Подобрать Комплектацию</h1>

      <div className="configurator-filters">
        <div className="configurator-filter">
          <label>Выберите модель:</label>
          <select onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel}>
            <option value="">Все модели</option>
            <option value="Coolray">Coolray</option>
            <option value="Tugella">Tugella</option>
          </select>
        </div>

        <div className="configurator-filter">
          <label>Комплектация:</label>
          <select onChange={(e) => setSelectedTrim(e.target.value)} value={selectedTrim}>
            <option value="">Все комплектации</option>
            <option value="Standard">Standard</option>
            <option value="Comfort">Comfort</option>
            <option value="Luxury">Luxury</option>
            <option value="Flagship">Flagship</option>
          </select>
        </div>
      </div>

      {/* Отображение выбранной модели и комплектации */}
      <div className="selected-filters">
        {selectedModel && <span>Модель: {selectedModel}</span>}
        {selectedTrim && <span>Комплектация: {selectedTrim}</span>}
      </div>

      <div>
        {filteredCars.slice(0, visibleCarsCount).map(car => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={`${car.model} ${car.trim}`} />
            <div className="car-card-content">
              <h2 className="car-card-title">{car.model} {car.trim}</h2>
              <p className="car-card-specs">{car.specs}</p>
            </div>
            <button className="car-card-button">Узнать свою цену</button>
            <button className="car-card-button car-card-button-secondary">Рассчитать кредит</button>
          </div>
        ))}
      </div>

      {/* Кнопка Load More остается видимой */}
      <button onClick={loadMoreCars} className="load-more-button">
        Load more
      </button>
    </div>
  );
};

export default SectionAllCar;
