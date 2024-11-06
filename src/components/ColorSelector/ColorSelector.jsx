import React from 'react';

import './ColorSelector.css'

const ColorSelector = ({ colors, currentColorIndex, setCurrentColorIndex }) => {
  return (
    <div className="color-selector">
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ 
            backgroundColor: `#${color.color_code}`, 
            margin: '5px', 
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
          }}
          onClick={() => setCurrentColorIndex(index)}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
