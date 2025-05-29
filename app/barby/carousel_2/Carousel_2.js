'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './carousel_2.module.css';

const teamMembers = [
  { name: "Emily Kim", role: "Дитяче", imgSrc: "/img/gallery/carousel/1.jpg" },
  { name: "Emma Steward", role: "Мама", imgSrc: "/img/gallery/carousel/2.jpg" },
  { name: "Emma Rodriguez", role: "Дитяче", imgSrc: "/img/gallery/carousel/3.jpg" },
  { name: "Julia Gimmel", role: "Дитяче", imgSrc: "/img/gallery/carousel/4.jpg" },
  { name: "Lisa Anderson", role: " Manager", imgSrc: "/img/gallery/carousel/5.jpg" },
  { name: "James Wilson", role: "Портрет", imgSrc: "/img/gallery/carousel/6.jpg" },
  { name: "Emily Gimmel", role: "Свято", imgSrc: "/img/gallery/carousel/7.jpg" }
];

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateCarousel = useCallback((change) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsZoomed(false); // сбрасываем зум при смене карточки

    setCurrentIndex(prevIndex => {
      const newIndex = (prevIndex + change + teamMembers.length) % teamMembers.length;
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(-1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(1);
        } else {
          updateCarousel(-1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [updateCarousel]);

  const handleCardClick = (i) => {
    if (i === currentIndex) {
      setIsZoomed(prev => !prev); // переключаем zoom
    } else {
      updateCarousel(i - currentIndex);
    }
  };

  const getCardClasses = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return `${styles.center} ${isZoomed ? styles.zoomed : ''}`;
    if (offset === 1) return styles.right1;
    if (offset === 2) return styles.right2;
    if (offset === teamMembers.length - 1) return styles.left1;
    if (offset === teamMembers.length - 2) return styles.left2;

    return styles.hidden;
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navArrow} ${styles.left}`}
          onClick={() => updateCarousel(-1)}
        >
          ‹
        </button>

        <div className={styles.carouselTrack}>
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`${styles.card} ${getCardClasses(i)}`}
              data-index={i}
              onClick={() => handleCardClick(i)}
            >
              <Image
                src={member.imgSrc}
                alt={`Team Member ${i + 1}`}
                width={280}
                height={380}
                priority={i === currentIndex}
              />
            </div>
          ))}
        </div>

        <button
          className={`${styles.navArrow} ${styles.right}`}
          onClick={() => updateCarousel(1)}
        >
          ›
        </button>
      </div>

      <div className={styles.memberInfo}>
        <h2 className={styles.memberName}>{teamMembers[currentIndex].name}</h2>
        <p className={styles.memberRole}>{teamMembers[currentIndex].role}</p>
      </div>

      {/* <div className={styles.dots}>
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
            onClick={() => updateCarousel(i - currentIndex)}
          ></div>
        ))}
      </div> */}
    </>
  );
};

export default Carousel2;