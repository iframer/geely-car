import React from 'react';
import './PhoneInput.css';

const PhoneInput = () => {
  return (
    <div className="phone-input-container">
      <div className="flag-icon">
        <span role="img" aria-label="Kazakhstan Flag">🇰🇿</span>
      </div>
      <span className="country-code">+7</span>
      <input
        type="tel"
        placeholder="(999) 999-99-99"
        className="phone-input"
      />
    </div>
  );
};

export default PhoneInput;
