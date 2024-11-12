import "./CarRequest.css";
import { useState, useEffect } from 'react';

const CarRequest = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneInputChange = (e) => {
        let input = e.target.value.replace(/\D/g, '');
        if (input.startsWith('7')) input = input.slice(1);
        if (input.length > 10) input = input.slice(0, 10);

        let formatted = '+7 (';
        if (input.length >= 1) formatted += input.slice(0, 3);
        if (input.length >= 4) formatted += `) ${input.slice(3, 6)}`;
        if (input.length >= 7) formatted += `-${input.slice(6, 8)}`;
        if (input.length >= 9) formatted += `-${input.slice(8, 10)}`;

        setPhone(formatted);
    };

    return (
        <div className="car-info-section">
            <div className="car-background-section">
                <form action="submit" className="car-form-container">
                    <h2>НОВЫЙ 
                        <span style={{color : "#0067B2"}}> ATLAS </span> 
                        4 WD</h2>
                    <p style={{color : "#020b24"}}>с полным приводом</p>
                    <div style={{display: "flex", alignItems : "center", gap : "1vw"}}>
                        <img src="https://static.tildacdn.pro/tild3333-6536-4866-a232-646265373439/thumbUpPl.svg"
                            alt="" style={{width: "10vh"}} />
                        <h2 style={{}}>Выгода до 
                           <span style={{color : "#0067B2"}}> 3 500 000 тенге!</span></h2>
                    </div>
                    <div className="car-form-elements">
                        <input
                            type="text"
                            className="car-phone-input"
                            placeholder="+7 (999) 999-99-99"
                            value={phone}
                            onChange={handlePhoneInputChange}
                            maxLength="18"
                        />
                        <button type="submit" className="car-submit-button">Получить предложение</button>
                    </div>
                </form>
                <img 
                    src="https://optim.tildacdn.pro/tild3264-3565-4030-b634-323939653733/-/format/webp/monjaro-usp4.jpg" 
                    alt="" 
                    className="CarImageRight"
                />
            </div>

            <div className="InfoAboutCar">
                <ul>
                    <li>
                        <img src="https://optim.tildacdn.pro/tild3336-3430-4337-b435-373239373664/-/resize/160x/-/format/webp/1198423.png" 
                        alt="" />
                        <p>Гарантия до 7 лет <br />или до 200 000 км</p>
                    </li>
                    <li>
                        <img src="https://optim.tildacdn.pro/tild3464-3933-4135-a332-353535303736/-/resize/160x/-/format/webp/617255.png"
                         alt="" />
                        <p>Первоначальный <br />взнос от 10%</p>
                    </li>
                    <li>
                        <img src="https://optim.tildacdn.pro/tild6134-3732-4965-b962-333738616233/-/resize/208x/-/format/webp/free-car-icon-2897-t.png"
                         alt="" />
                        <p>Разработаны по <br />технологиям Volvo</p>
                    </li>
                    <li>
                        <img src="https://optim.tildacdn.pro/tild3235-3038-4930-b264-303437626638/-/resize/268x/-/format/webp/1000_F_409332572_LEQ.png"
                         alt="" />
                        <p>Выгода по <br />Trade-in</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CarRequest;
