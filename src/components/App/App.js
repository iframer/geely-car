import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarInfoLeft from '../CarInfoLeft/CarInfoLeft';
import Header from '../Header/Header';
import UnderHeader from '../UnderHeader/UnderHeader';
import Slider from '../SliderImage/Slider';
import CarModels from '../CarModels/CarModels';
import SectionAllCar from '../SectionAllCar/SectionAllCar';
import CarRequest from '../CarRequest/CarRequest';
import carsData from '../Data/data.jsx';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null); // Начально машина не выбрана

  const handleSelectCar = (carName) => {
    setSelectedCar(carName); // Устанавливаем выбранную машину
  };

  return (
    <div>
      <Header />
      <UnderHeader onSelectCar={handleSelectCar} />

      {/* Если машина выбрана, показываем только CarInfoLeft, иначе показываем другие компоненты */}
      <AnimatePresence mode="wait">
        {selectedCar && (
          <motion.div
            key={selectedCar}
            initial={{ opacity: 0, y: -50 }} // Начальная позиция сверху
            animate={{ opacity: 1, y: 0 }}    // Конечная позиция (по оси Y)
            exit={{ opacity: 0, y: 50 }}      // Позиция при уходе вниз
            transition={{ duration: 0.3 }}
          >
            <CarInfoLeft carData={carsData[selectedCar]} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Показываем остальные компоненты, если машина не выбрана */}
      {!selectedCar && (
        <div className="main-components">
          <Slider />
          <CarRequest />
          <CarModels />
          <SectionAllCar />
        </div>
      )}
    </div>
  );
};

export default App;
