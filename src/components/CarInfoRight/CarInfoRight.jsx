import './CarInfoRight.css'


const CarInfoRight = () => {
    return(
        <div className='CarInfoRight'>
            <h2>OKAVANGO <span>7 мест</span></h2>
            <h3>ПЕРВОНАЧАЛЬНЫЙ ВЗНОС ОТ 10%*</h3>
            <div>
                <div className="div">В кредит до 7 лет*</div>
                <div className="div">Купить в трейд-ин</div>
                <div className="div">Цена от 13 340 000 ₸**</div>
            </div>
            <div>
                <button>Купить в рассрочку</button>
                <button>Получить предложение</button>
                <button>Подобрать комплектация</button>
            </div>
        </div>
    )
}

export default CarInfoRight;