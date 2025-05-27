"use client"; 

import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 50 }, // Начальное состояние: невидимый, сдвинут вниз на 50px
  visible: {
    opacity: 1,
    y: 0, // Конечное состояние: полностью видимый, в естественном положении
    transition: {
      duration: 0.8, // Длительность анимации
      ease: "easeOut" // Функция плавности
    }
  }
};

const AnimateOnViewport = ({ children, threshold = 0.3, once = true, variants = defaultVariants }) => {
  return (
    <motion.div
      initial="hidden" // Устанавливаем начальное состояние
      whileInView="visible" // Запускаем анимацию в состояние 'visible' при появлении в видимой области
      viewport={{
        once: once, // `true` - анимация сработает только один раз, при первом появлении
        amount: threshold // `threshold` - анимация сработает, когда указанный процент (например, 0.3 = 30%) компонента будет виден
      }}
      variants={variants} // Передаем варианты анимации
      style={{ willChange: 'opacity, transform' }} // Оптимизация производительности
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnViewport;