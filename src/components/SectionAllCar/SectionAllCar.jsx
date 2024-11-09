import React, { useState, useEffect, useRef } from 'react';
import './SectionAllCar.css';

const carsData = [
  { id: 1, model: 'Coolray', trim: 'Standard', specs: '1.5T, 7DCT, 177л.с', image: 'https://optim.tildacdn.com/stor3232-3931-4163-b332-306433356361/-/resize/400x/-/format/webp/56608850.png' },
  { id: 2, model: 'Coolray', trim: 'Comfort', specs: '1.5T, 7DCT, 177л.с', image: 'https://optim.tildacdn.com/stor3537-3562-4839-b531-633539396238/-/resize/400x/-/format/webp/45343089.png' },
  { id: 3, model: 'Coolray', trim: 'Luxury', specs: '1.5T, 7DCT, 177л.с', image: 'https://optim.tildacdn.com/stor6432-3331-4162-b864-323434316234/-/resize/400x/-/format/webp/79972793.png' },
  { id: 4, model: 'Coolray', trim: 'Flagship', specs: '1.5T, 7DCT, 177л.с', image: 'https://optim.tildacdn.com/stor3562-6633-4839-a636-623537303831/-/resize/400x/-/format/webp/77486654.png' },
  { id: 5, model: 'Tugella', trim: 'Luxury', specs: '2.0T, 8AT, 238л.с', image: 'https://optim.tildacdn.com/stor3562-6633-4839-a636-623537303831/-/resize/400x/-/format/webp/77486654.png' },
  { id: 6, model: 'Tugella', trim: 'Flagship', specs: '2.0T, 8AT, 238л.с', image: 'https://optim.tildacdn.com/stor6366-3862-4431-b264-623234366439/-/resize/400x/-/format/webp/40730266.png' },
  { id: 7, model: 'Tugella', trim: 'Luxury', specs: '2.0T, 8AT, 238л.с', image: 'https://optim.tildacdn.com/stor3562-6633-4839-a636-623537303831/-/resize/400x/-/format/webp/77486654.png' },
  { id: 8, model: 'Tugella', trim: 'Flagship', specs: '2.0T, 8AT, 238л.с', image: 'https://optim.tildacdn.com/stor6366-3862-4431-b264-623234366439/-/resize/400x/-/format/webp/40730266.png' },

];

const SectionAllCar = () => {
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedTrims, setSelectedTrims] = useState([]);
  const [visibleCarsCount, setVisibleCarsCount] = useState(3);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isTrimDropdownOpen, setIsTrimDropdownOpen] = useState(false);

  // Используем useRef для хранения ссылок на dropdowns
  const modelDropdownRef = useRef(null);
  const trimDropdownRef = useRef(null);

  useEffect(() => {
    // Обработчик клика по всему документу
    const handleClickOutside = (event) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target)) {
        setIsModelDropdownOpen(false);
      }
      if (trimDropdownRef.current && !trimDropdownRef.current.contains(event.target)) {
        setIsTrimDropdownOpen(false);
      }
    };

    // Добавляем событие при монтировании компонента
    document.addEventListener('click', handleClickOutside);

    // Убираем событие при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleModelChange = (e) => {
    const value = e.target.value;
    setSelectedModels((prevModels) =>
      prevModels.includes(value) ? prevModels.filter((model) => model !== value) : [...prevModels, value]
    );
    setVisibleCarsCount(3); // Сброс количества видимых машин при изменении фильтра
  };

  const handleTrimChange = (e) => {
    const value = e.target.value;
    setSelectedTrims((prevTrims) =>
      prevTrims.includes(value) ? prevTrims.filter((trim) => trim !== value) : [...prevTrims, value]
    );
    setVisibleCarsCount(3); // Сброс количества видимых машин при изменении фильтра
  };

  const toggleModelDropdown = (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    setIsModelDropdownOpen((prevState) => {
      // Если меню модели открывается, закрываем меню комплектации
      if (!prevState) {
        setIsTrimDropdownOpen(false);
      }
      return !prevState;
    });
  };
  
  const toggleTrimDropdown = (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    setIsTrimDropdownOpen((prevState) => {
      // Если меню комплектации открывается, закрываем меню модели
      if (!prevState) {
        setIsModelDropdownOpen(false);
      }
      return !prevState;
    });
  };
  

  const removeSelectedModel = (model) => {
    setSelectedModels((prevModels) => prevModels.filter((m) => m !== model));
  };

  const removeSelectedTrim = (trim) => {
    setSelectedTrims((prevTrims) => prevTrims.filter((t) => t !== trim));
  };

  const filteredCars = carsData.filter(car =>
    (selectedModels.length === 0 || selectedModels.includes(car.model)) &&
    (selectedTrims.length === 0 || selectedTrims.includes(car.trim))
  );

  const loadMoreCars = () => {
    setVisibleCarsCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="section-all-car-container">
      <h1 className="section-all-car-title">Подобрать Комплектацию</h1>

      <div className="section-all-car-filters">
        <div className="section-all-car-filter">
        <button onClick={toggleModelDropdown} className="dropdownButton">
          ВЫБЕРИТЕ МОДЕЛЬ
          </button>
          {isModelDropdownOpen && (
            <div ref={modelDropdownRef} className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  value="Coolray"
                  checked={selectedModels.includes("Coolray")}
                  onChange={handleModelChange}
                />
                Coolray
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Tugella"
                  checked={selectedModels.includes("Tugella")}
                  onChange={handleModelChange}
                />
                Tugella
              </label>
            </div>
          )}
        </div>

        <div className="section-all-car-filter">
        <button onClick={toggleTrimDropdown} className="dropdownButton">
          КОМПЛЕКТАЦИЯ
        </button>
          {isTrimDropdownOpen && (
            <div ref={trimDropdownRef} className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  value="Standard"
                  checked={selectedTrims.includes("Standard")}
                  onChange={handleTrimChange}
                />
                Standard
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Comfort"
                  checked={selectedTrims.includes("Comfort")}
                  onChange={handleTrimChange}
                />
                Comfort
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Luxury"
                  checked={selectedTrims.includes("Luxury")}
                  onChange={handleTrimChange}
                />
                Luxury
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Flagship"
                  checked={selectedTrims.includes("Flagship")}
                  onChange={handleTrimChange}
                />
                Flagship
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="selected-filters">
        {selectedModels.map((model) => (
          <span key={model} className="selected-filter">
            {model} <span className="remove-filter" onClick={() => removeSelectedModel(model)}>×</span>
          </span>
        ))}
        {selectedTrims.map((trim) => (
          <span key={trim} className="selected-filter">
            {trim} <span className="remove-filter" onClick={() => removeSelectedTrim(trim)}>×</span>
          </span>
        ))}
      </div>

      <div className="car-cards">
        {filteredCars.slice(0, visibleCarsCount).map((car) => (
          <div key={car.id} className="car-card">
            <div style={{display : 'flex', gap : '2vw'}}>
            <img src={car.image} alt={`${car.model} ${car.trim}`} />
            <div className="car-card-content">
              <h2 className="car-card-title">{car.model} {car.trim}</h2>
              <p className="car-card-specs">{car.specs}</p>
            </div>
            </div>
            <div style={{display : 'flex', gap : '7px'}}>
            <button className="car-card-button">Узнать свою цену</button>
            <button className="car-card-button car-card-button-secondary">Рассчитать кредит</button>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length > visibleCarsCount && (
        <button onClick={loadMoreCars} className="load-more-button">
          Load more
        </button>
      )}
    </div>
  );
};

export default SectionAllCar;
