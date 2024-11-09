import React from 'react';
import CarInfoLeft from '../CarInfoLeft/CarInfoLeft';
import CarInfoRight from '../CarInfoRight/CarInfoRight';
import Header from '../Header/Header';
import UnderHeader from '../UnderHeader/UnderHeader';
import Slider from '../SliderImage/Slider';
import InfoSection from '../InfoSection/InfoSection';
import CarModels from '../CarModels/CarModels';
import SectionAllCar from '../SectionAllCar/SectionAllCar';


const App = () => {
    

  return (
    <div>
      <div>
        <Header/>
        <UnderHeader/>
        <Slider/>
        <InfoSection/>
        <CarModels/>
        <SectionAllCar/>
    {/* <CarInfoLeft/> */}
        </div>
    </div>
  );
};

export default App;
