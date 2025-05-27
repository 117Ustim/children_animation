'use client';

import { useEffect } from 'react';
import styles from './rain.module.css';

const Rain = () => {
  useEffect(() => {
    const nbDrop = 858;

    

    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rainContainer = document.querySelector(`.${styles.rain}`);
    if (rainContainer) {
      for (let i = 1; i < nbDrop; i++) {
        const drop = document.createElement('div');
        drop.className = styles.drop;
        drop.style.left = `${randRange(0, 1600)}px`;
        drop.style.top = `${randRange(-1000, 1400)}px`;
        rainContainer.appendChild(drop);
      }
    }
  }, []);

  return <section className={styles.rain}></section>;
};

export default Rain;