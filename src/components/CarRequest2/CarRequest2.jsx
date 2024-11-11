import './CarRequest2.css';

import { useState, useEffect } from 'react';

const CarRequest2 = () => {
    const [phone, setPhone] = useState('+7(___) ___-__-__');
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
        <div className="CarRequest2">
            <img 
                className="CarRequestImg1" 
                src="https://optim.tildacdn.pro/tild6634-3664-4430-a234-353834336562/-/format/webp/banner2_1.jpg" 
                alt="Coolray Car" 
            />
            
            <div className="RequestForm">
            
            </div>

            <img 
                className="CarRequestImg2"
                src="https://optim.tildacdn.pro/tild3035-3464-4536-a437-353531613137/-/format/webp/monjaro-usp3_1.jpg" 
                alt="Monjaro Car" 
            />
        </div>
    );
};

export default CarRequest2;
