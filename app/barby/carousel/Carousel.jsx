'use client';

import { useState } from 'react';

import  './carousel.css';

const images = [
  { src: "/img/gallery/carousel/1.JPG", alt: "IMG1", link: "#IMG1" },
  { src: "/img/gallery/carousel/2.JPG", alt: "IMG2", link: "#IMG2" },
  { src: "/img/gallery/carousel/3.JPG", alt: "IMG3", link: "#IMG3" },
  { src: "/img/gallery/carousel/4.JPG", alt: "IMG4", link: "#IMG4" },
  { src: "/img/gallery/carousel/5.JPG", alt: "IMG5", link: "#IMG5" },
];


export default function Carousel  ()  {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - selectedIndex + images.length) % images.length;
    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };

  return (
    <div id="carousel-area">
      <div id="carousel">
        {images.map((image, index) => (
          <div className={getClassName(index)} key={index}>
            <div className="img-wrap">
              {/* <span className="img-text"></span> */}
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="icon-btn" onClick={() => moveToSelected("prev")}>
          <img src="/img/b_1.png" alt="prev" className='icon-img' />
        </button>
        <button className="icon-btn" onClick={() => moveToSelected("next")}>
          <img src="/img/b_2.png" alt="next" className='icon-img' />
        </button>
      </div>
    </div>
  );
};
