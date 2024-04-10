import React, { useState } from 'react';
import './Slider.css'; // You can create this CSS file for styling
import image1 from '../Assets/Slider_img01.jpg'; // Import the first image
import image2 from '../Assets/Slider_img02.jpg'; // Import the second image

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2]; // Array of imported images

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      <button className="prev-button" onClick={prevImage}>{'<'}</button>
      <img className="slider-image" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button className="next-button" onClick={nextImage}>{'>'}</button>
    </div>
  );
};

export default Slider;