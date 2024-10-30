import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';



const Image360Viewer = ({data}) => {
    const { test } = useParams();
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const car_data = data;
    const totalFrames = car_data[currentColorIndex].images.length;
    const images = car_data[currentColorIndex].images;
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const viewerRef = useRef(null);
    const imagesRef = useRef([]);
    const lastMouseXRef = useRef(0);
    const sensitivity = 25;

    useEffect(() => {
        console.log(test);
        const loadImages = async () => {
            // Очищаем массив с изображениями перед загрузкой новых
            imagesRef.current = [];

            images.forEach((src) => {
                const img = new Image();
                img.src = src;
                imagesRef.current.push(img);
            });

            await Promise.all(imagesRef.current.map(img => new Promise(resolve => {
                img.onload = resolve;
            })));

            setIsLoaded(true);
        };

        loadImages();
    }, [currentColorIndex]); // Добавляем currentColorIndex в зависимости, чтобы перезагрузить изображения при изменении цвета

    const changeImage = (delta) => {
        setCurrentFrame(prevFrame => (prevFrame + delta + totalFrames) % totalFrames);
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        lastMouseXRef.current = event.clientX;
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const deltaX = event.clientX - lastMouseXRef.current;
            if (Math.abs(deltaX) > sensitivity) {
                const delta = Math.round(deltaX / sensitivity);
                changeImage(delta);
                lastMouseXRef.current = event.clientX;
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (event) => {
        lastMouseXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        const touchEndX = event.touches[0].clientX;
        const touchDelta = touchEndX - lastMouseXRef.current;
        if (Math.abs(touchDelta) > 30) {
            changeImage(touchDelta > 0 ? -1 : 1);
            lastMouseXRef.current = touchEndX;
        }
    };

    const handleColorChange = (index) => {
        if (index === currentColorIndex) {
            // Если нажата кнопка уже активного цвета, ничего не делаем
            return;
        }
        
        setCurrentColorIndex(index); // Меняем набор изображений на основе выбранного цвета
        setCurrentFrame(0); // Сбрасываем текущий кадр на первый
        setIsLoaded(false); // Сбрасываем состояние загрузки
    };

    return (
        <div>
            <div
                ref={viewerRef}
                className="viewer"
                style={{ backgroundImage: isLoaded ? `url(${imagesRef.current[currentFrame]?.src})` : 'none' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            />

            <div className="color-selector">
                {car_data.map((color, index) => (
                    <button 
                        key={index}
                        style={{ backgroundColor: `#${color.color_code}` }}
                        onClick={() => handleColorChange(index)}
                    >
                        {color.color_code}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Image360Viewer;