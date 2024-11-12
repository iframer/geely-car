import { useState } from "react";
import "./FormCarRequest2.css"

const FormCarRequest = () => {

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
    return(
        <div className="FormCarRequest">
            <form action="">
                <h2>ТЕСТ-ДРАЙВ</h2>
                <p>Оставьте заявку, <br /> чтобы записаться на тест-драйв</p>
                <input
                    type="text"
                    className="phone-input"
                    placeholder="+7 (999) 999-99-99"
                    value={phone}
                    onChange={handlePhoneInputChange}
                    maxLength="18"
                />
                
                <select>
                    <option value="" selected>Выберите модель</option>
                    <option value="model1">Модель 1</option>
                    <option value="model2">Модель 2</option>
                    <option value="model3">Модель 3</option>
                    <option value="model4">Модель 4</option>
                </select>
                
                <button type="submit">Получить предложение</button>

            </form>

        </div>
    )
}

export default FormCarRequest;