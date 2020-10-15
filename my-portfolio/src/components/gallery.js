import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Login from '../assets/Login.png'
import Home from '../assets/Home.png'
import Questions from '../assets/Questions.gif'




const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <img src={Login} onDragStart={handleDragStart} className="gallery" alt="poop"/>,
  <img src={Home} onDragStart={handleDragStart} className="gallery" alt="poop"/>,
  <img src={Questions} onDragStart={handleDragStart} className="gallery" alt="poop" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} responsive={responsive}/>
  );
}

export default Gallery