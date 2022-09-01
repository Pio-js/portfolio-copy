import { useState } from "react";
import './ImageSlider.css'

export default function ImageSlider ({ slides }) {
    console.log(slides);
    const [touchPosition, setTouchPosition] = useState(null);
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    //if mobile
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
    
        if (diff > 5) {
            nextSlide();
        }
    
        if (diff < -5) {
            prevSlide();
        }
    
        setTouchPosition(null);
    }

    let slider = slides.map((slide, index) => {
        return (
            <div key={index}>
                {index === current && slide}
            </div>
        );
    });

    let dots = slides.length > 1 && slides.map((slide, index) => {
        return (
            <div key={index} className="dot-container">
                <div className={index === current ? "dot-white" : "dot-gray"} onClick={() => setCurrent(index)}></div>
            </div>
        );
    });

    return (
        <>
            <div className='img-slider'>
                {slides.length > 1 && <div className='gallery-left-arrow' onClick={prevSlide}></div>}
                <div className="gallery-img-show" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className='slide-content'>
                        <div id="dots-menu">{dots}</div>
                        {slider}
                    </div>
                </div>
                {slides.length > 1 && <div className='gallery-right-arrow' onClick={nextSlide}></div>}
            </div>
        </>
    );
};