import './CarRequest2.css';

const CarRequest2 = () => {
    return (
        <div className="CarRequest2">
            <img 
                className="CarRequestImg1" 
                src="https://optim.tildacdn.pro/tild6634-3664-4430-a234-353834336562/-/format/webp/banner2_1.jpg" 
                alt="Coolray Car" 
            />
            
            <div className="RequestForm">
                <h2>ТЕСТ-ДРАЙВ</h2>
                <p>Оставьте заявку, чтобы записаться на тест-драйв</p>
                <input type="tel" placeholder="+7 (999) 999-99-99" />
                <select>
                    <option>New Coolray</option>
                    <option>Monjaro</option>
                </select>
                <button>Получить предложение</button>
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
