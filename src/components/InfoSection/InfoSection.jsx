import "./InfoSection.css"

const InfoSection = () => {
    return(
        <div className="InfoSection">
            <div className="backgroundInfoSection">
            <img 
            src="https://optim.tildacdn.pro/tild3263-3436-4532-a362-623530313337/-/format/webp/noroot.png" alt="" />
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
    )
}

export default InfoSection;