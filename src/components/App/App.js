import React from 'react';
import CarInfoLeft from '../CarInfoLeft/CarInfoLeft';
import CarInfoRight from '../CarInfoRight/CarInfoRight';


const App = () => {
    

  return (
    <div>
      <div style={{display: 'flex'}}>
        <CarInfoLeft/>
        <CarInfoRight/>
        </div>
    </div>
  );
};

export default App;
