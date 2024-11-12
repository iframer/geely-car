import React, { useEffect, useRef, useState } from 'react';
import './Image360Viewer.css';

const Image360Viewer = ({ images }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const viewerRef = useRef(null);
    const lastMouseXRef = useRef(0);
    const sensitivity = 25;
    const totalFrames = images.length;

    // Предварительная загрузка изображений
    useEffect(() => {
        const preloadImages = () => {
            images.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        preloadImages();
    }, [images]);

    const changeImage = (delta) => {
        setCurrentFrame((prevFrame) => (prevFrame + delta + totalFrames) % totalFrames);
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        lastMouseXRef.current = event.clientX;
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const deltaX = event.clientX - lastMouseXRef.current;
            if (Math.abs(deltaX) > sensitivity) {
                changeImage(deltaX > 0 ? 1 : -1);
                lastMouseXRef.current = event.clientX;
            }
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleMouseLeave = () => setIsDragging(false);

    const handleTouchStart = (event) => {
        lastMouseXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        event.preventDefault();
        const touchEndX = event.touches[0].clientX;
        const touchDelta = touchEndX - lastMouseXRef.current;
        if (Math.abs(touchDelta) > 30) {
            changeImage(touchDelta > 0 ? -1 : 1);
            lastMouseXRef.current = touchEndX;
        }
    };

    return (
        <div className="viewer-container">
            <div
                ref={viewerRef}
                className="viewer"
                style={{ backgroundImage: `url(${images[currentFrame]})` }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}>
            </div>
            <div className="garantCarImage">
                {/* Дополнительный элемент, например, логотип или текст */}
                <img src="your-image-url-here.png" alt="Garant Car Logo" />
            </div>
        </div>
    );
};

export default Image360Viewer;
