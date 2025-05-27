'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './gallery.module.css';
import Rain from './rain/Rain';
import Link from 'next/link';

// Variants for the overall Gallery container (motion.section)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
      when: "beforeChildren", // Анимировать родителя сначала
      staggerChildren: 0,   // Задержка между прямыми дочерними элементами
      delayChildren: 0.1    // Задержка перед началом анимации первого дочернего элемента
    }
  }
};


const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const heart = {
  hidden: { opacity: 0, scale: 1, y: 0 },
  visible: {
    opacity: [0, 1, 1, 1], // Появление: невидима -> видима -> остается видимой
    // ИЗМЕНЕНО: scale для ПЕРВОНАЧАЛЬНОГО увеличения на 20%
    scale: [1, 1.2, 1.2, 1],
    y: [0, 0, 0, 0], // Y остается на месте
    transition: {
      // Общая длительность основной анимации opacity и scale
      duration: 1.0,
      ease: "easeOut",
      times: [0, 0.2, 0.7, 1], // Тайминги для opacity и scale

      // Параметры для "биения сердца" (повторяющейся анимации scale)
      scale: { // Эти параметры применяются ТОЛЬКО к свойству scale
        repeat: Infinity, // Повторять бесконечно
        repeatType: "mirror", // Плавно анимировать вперед и назад
        repeatDelay: 0.2, // Задержка между циклами биения (например, 0.2 секунды)
        duration: 0.6, // Длительность одного цикла биения (например, 0.6 секунды)
        delay: 1.0, // Задержка перед началом первого биения (после завершения основной анимации)
        // ИЗМЕНЕНО: keyframes для биения на 10% (от 100% до 110% и обратно)
        keyframes: [1, 1.05, 1] // Биение от 100% до 110% и обратно
      }
    }
  }
};


const elipseSmVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0 },
  },
};

const elipseImageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};
const elipseImageVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.9 },
  },
};
const elipseImageVariants3 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.1 },
  },
};



export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 }); // `once: false` для повтора анимации


  

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Теперь div.container содержит только изображения/Rain,
          которые не участвуют в основной последовательности.
          Если они тоже должны анимироваться, их нужно обернуть в motion.div и дать variants. */}
      <div className={styles.container}>

        {/* Элементы, которые должны появляться последовательно, теперь являются прямыми потомками motion.section */}

        {/* 1. block_elipse */}
        <motion.div className={styles.block_elipse} variants={itemVariants}>
          {/* Внутренние элементы в block_elipse также будут анимированы */}
          <motion.img
            src="/img/elipse_sm.png"
            alt="elipse_sm"
            className={styles.elipse_sm}
            variants={elipseSmVariants} // Применяем variants и к этим элементам
          />
          <Link href="/barby">
            <motion.img
              src="/img/elipseImage.png"
              alt="elipse_sm_image"
              className={styles.elipse_sm_image}
              variants={elipseImageVariants}
            />
          </Link>
          <Link href="/barby">
            <motion.div className={styles.elipse_text} variants={itemVariants}>
              <p>Adventurers</p>
            </motion.div>
          </Link>
        </motion.div>

        {/* 2. block_circle_1 */}
        <motion.div className={styles.block_circle_1} variants={itemVariants}>
          <motion.img
            src="/img/circle_sm_1.png"
            alt="elipse_sm"
            className={styles.circle_sm_1}
            variants={elipseSmVariants} 
          />
       
          <Link href="/barby">
  <motion.img

            src="/img/circle_image_sm_1.png" alt="image" className={styles.circle_sm_1_image}variants={elipseImageVariants2} />
          </Link>
          <Link href="/barby">
        
            <motion.div className={styles.circle_1_text} variants={itemVariants}>
              <p>Adventurers</p>
            </motion.div>
          </Link>
        </motion.div>

        {/* 3. block_circle_2 */}
        <motion.div className={styles.block_circle_2} variants={itemVariants}>

           <motion.img
           src="/img/circle_sm_2.png" alt="image" className={styles.circle_sm_2}variants={elipseSmVariants}  />
          <Link href="/barby">
          <motion.img
             src="/img/circle_image_sm_2.png" alt="image" className={styles.circle_sm_2_image} variants={elipseImageVariants3}/>
          </Link>
          <Link href="/barby">
            <motion.div className={styles.elipse_text} variants={itemVariants}>
              <p>Barbie and Ken</p>
            </motion.div>
          </Link>
        </motion.div>

     
        <motion.img
          src="/img/rain_block/heart_1.png"
          alt="rainbow"
          className={styles.heartImage_1}
          variants={heart} 
         
        />
        <motion.img
          src="/img/rain_block/heart_2.png"
          alt="rainbow"
          className={styles.heartImage_2}
          variants={heart} 
        />
        <motion.img
          src="/img/rain_block/heart_3.png"
          alt="rainbow"
          className={styles.heartImage_3}
          variants={heart} 
        />

       
        <img src="/img/rainbow_1.png" alt="rainbow" className={styles.rainbowImage} />
        <Rain />
      </div> {/* Закрываем div.container */}
    </motion.section>
  );
}