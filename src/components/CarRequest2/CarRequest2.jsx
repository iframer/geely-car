import './CarRequest2.css';

import FormCarRequest from '../FormCarRequest2/FormCarRequest2';


const CarRequest2 = () => {
    return (
        <div className="CarRequest2">
            <img 
                className="CarRequestImg1" 
                src="https://optim.tildacdn.pro/tild6634-3664-4430-a234-353834336562/-/format/webp/banner2_1.jpg" 
                alt="Coolray Car" 
            />
            
            <div className="RequestForm">
                <FormCarRequest />
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
