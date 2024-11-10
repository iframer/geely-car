import './CarInfoRight.css'


const CarInfoRight = (props) => {
    return(
        <div className='CarInfoRight'>
            <h2>{props.nameCar}</h2>
            <h3>ПЕРВОНАЧАЛЬНЫЙ ВЗНОС ОТ 10%*</h3>
            <ul>
            <li className="div1">
    <div style={{display : 'flex', alignItems: 'center'}}>
        <img src="https://static.tildacdn.pro/tild3861-6337-4964-b130-653464316362/mdi-light_credit-car.svg" alt="" />
        В кредит до 7 лет*
    </div>
</li>
<li className="div2">
    <div style={{display : 'flex', alignItems: 'center'}}>
        <div className="circleForAnimation">
        </div>
        
        <img src="https://static.tildacdn.pro/tild3633-6432-4664-b362-653733383133/pepicons-print_arrow.svg" alt="" className='rotateImg'/>
        Купить в трейд-ин
    </div>
</li>
<li className="div3">
    <div style={{display : 'flex', alignItems: 'center'}}>
        <img src="https://static.tildacdn.pro/tild3635-3564-4164-b830-313231343131/sale-512_1.svg" alt=""/>
        Цена от {props.priceCar} ₸**
    </div>
</li>

            </ul>
            <div style={{display : "flex", flexDirection : "column"}}>
                <button className="btn1">Купить в кредит</button>
                <button className="btn2">Обменять свой автомобиль на GEELY</button>
                <button className="btn3">ТЕСТ-ДРАЙВ</button>
            </div>
        </div>
    )
}

export default CarInfoRight;