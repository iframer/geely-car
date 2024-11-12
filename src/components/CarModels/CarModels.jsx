import "./CarModels.css";

const CarModels = () => {
    return (
        <div className="CarModels">
            <h1>МОДЕЛИ GEELY</h1>
            <div>
                <ul>
                    <li>
                        <div className="image-container">
                        <button className="image-btn">ПОДРОБНЕЕ</button>
                            <a href="#">
                                <img
                                    src="https://optim.tildacdn.pro/tild3463-6138-4635-a363-643735333436/-/resize/520x/-/format/webp/Frame_1.jpg"
                                    alt=""
                                />
                                <span className="image-text">OKAVANGO</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="image-container">
                        <button className="image-btn">ПОДРОБНЕЕ</button>
                            <a href="#">
                                <img
                                    src="https://optim.tildacdn.pro/tild6263-3738-4262-b238-353030653063/-/resize/520x/-/format/webp/emgrand.jpg"
                                    alt=""
                                />
                                <span className="image-text">EMGRAND</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="image-container">
                        <button className="image-btn">ПОДРОБНЕЕ</button>
                            <a href="#">
                                <img
                                    src="https://optim.tildacdn.pro/tild6632-6235-4235-b136-353465336133/-/resize/520x/-/format/webp/image_b.png"
                                    alt=""
                                />
                                <span className="image-text">COOLRAY</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className="image-container">
                        <button className="image-btn">ПОДРОБНЕЕ</button>
                            <a href="#">
                                <img
                                    src="https://optim.tildacdn.pro/tild6463-3939-4435-b165-366233343661/-/resize/520x/-/format/webp/image_b.png"
                                    alt=""
                                />
                                <span className="image-text">ATLAS</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="image-container">
                        <button className="image-btn">ПОДРОБНЕЕ</button>
                            <a href="#">
                                <img
                                    src="https://optim.tildacdn.pro/tild6132-3866-4637-a131-346466336332/-/resize/520x/-/format/webp/image_b.jpg"
                                    alt=""
                                />
                                <span className="image-text">TUGELLA</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="image-container">
                            <a href="#">
                                <button className="image-btn">ПОДРОБНЕЕ</button>
                                <img
                                    src="https://optim.tildacdn.pro/tild3839-3632-4631-b663-316636626638/-/resize/520x/-/format/webp/image_b_2.png"
                                    alt=""
                                />
                                <span className="image-text">MONJARO</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CarModels;
