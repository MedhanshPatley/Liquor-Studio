import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import image1 from '../Assets/Slider_img01.jpg';
import image2 from '../Assets/Slider_img02.jpg';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2]; 

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img className="slider-image" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Slider;
