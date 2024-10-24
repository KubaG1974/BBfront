import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ isPlaying, setIsPlaying ] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000); 
      return () => clearInterval(slideInterval);
    }
  }, [ isPlaying, slides.length ]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className = "carousel">
      <div className = "carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className = "slide-caption">{slide.title}</div>
          </div>
        ))}
      </div>

      <button className = "carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className = "carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className = "carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <button className = "carousel-play-btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Carousel;
