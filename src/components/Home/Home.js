import React, { useState } from 'react';
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/seoul.jpeg","/pexels-julien-pannetier-3336754-8049081.jpg", "/paris3.jpeg","/pexels-pok-rie-33563-321470.jpg"];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div id="home" className="home-container">
      <div className="slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <button onClick={prevSlide} className="prev">&#10094;</button>
        <button onClick={nextSlide} className="next">&#10095;</button>
      </div>
      <div className="content">
        <h1>Travel Far, Travel Wide</h1>
        <p>Let the journey be your guide.</p>
        <a href="#" className="btn">Book a Trip</a>
      </div>
    </div>
  );
}

export default Home;
