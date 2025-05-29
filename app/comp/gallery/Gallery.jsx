

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './gallery.module.css';
import Rain from './rain/Rain';
import Link from 'next/link';

// Определяем базовый путь, который должен соответствовать basePath в next.config.mjs
// Это важно, чтобы он был доступен на клиентской стороне и в сборке
const IS_PROD = process.env.NODE_ENV === 'production';
const BASE_PATH = IS_PROD ? '/children_animation' : '';

// Функция для получения правильного пути к статическому ресурсу
// Она добавит /children_animation к пути только в продакшн-сборке
const getPublicAssetPath = (path) => {
  return `${BASE_PATH}${path}`;
};


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
      staggerChildren: 0,     // Задержка между прямыми дочерними элементами
      delayChildren: 0.1      // Задержка перед началом анимации первого дочернего элемента
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
    scale: [1, 1.2, 1.2, 1],
    y: [0, 0, 0, 0], // Y остается на месте
    transition: {
      duration: 1.0,
      ease: "easeOut",
      times: [0, 0.2, 0.7, 1], // Тайминги для opacity и scale

      scale: { // Эти параметры применяются ТОЛЬКО к свойству scale
        repeat: Infinity, // Повторять бесконечно
        repeatType: "mirror", // Плавно анимировать вперед и назад
        repeatDelay: 0.2, // Задержка между циклами биения (например, 0.2 секунды)
        duration: 0.6, // Длительность одного цикла биения (например, 0.6 секунды)
        delay: 1.0, // Задержка перед началом первого биения (после завершения основной анимации)
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
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={styles.container}>

        {/* 1. block_elipse */}
        <motion.div className={styles.block_elipse} variants={itemVariants}>
          <motion.img
            src={getPublicAssetPath("/img/elipse_sm.png")} // ИЗМЕНЕНО
            alt="elipse_sm"
            className={styles.elipse_sm}
            variants={elipseSmVariants}
          />
          <Link href="/barby">
            <motion.img
              src={getPublicAssetPath("/img/elipseImage.png")} // ИЗМЕНЕНО
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
            src={getPublicAssetPath("/img/circle_sm_1.png")} // ИЗМЕНЕНО
            alt="elipse_sm"
            className={styles.circle_sm_1}
            variants={elipseSmVariants}
          />
          <Link href="/barby">
            <motion.img
              src={getPublicAssetPath("/img/circle_image_sm_1.png")} // ИЗМЕНЕНО
              alt="image" className={styles.circle_sm_1_image} variants={elipseImageVariants2} />
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
            src={getPublicAssetPath("/img/circle_sm_2.png")} // ИЗМЕНЕНО
            alt="image" className={styles.circle_sm_2} variants={elipseSmVariants} />
          <Link href="/barby">
            <motion.img
              src={getPublicAssetPath("/img/circle_image_sm_2.png")} // ИЗМЕНЕНО
              alt="image" className={styles.circle_sm_2_image} variants={elipseImageVariants3}/>
          </Link>
          <Link href="/barby">
            <motion.div className={styles.elipse_text} variants={itemVariants}>
              <p>Barbie and Ken</p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.img
          src={getPublicAssetPath("/img/rain_block/heart_1.png")} // ИЗМЕНЕНО
          alt="rainbow"
          className={styles.heartImage_1}
          variants={heart}
        />
        <motion.img
          src={getPublicAssetPath("/img/rain_block/heart_2.png")} // ИЗМЕНЕНО
          alt="rainbow"
          className={styles.heartImage_2}
          variants={heart}
        />
        <motion.img
          src={getPublicAssetPath("/img/rain_block/heart_3.png")} // ИЗМЕНЕНО
          alt="rainbow"
          className={styles.heartImage_3}
          variants={heart}
        />
        <img src={getPublicAssetPath("/img/rainbow_1.png")} alt="rainbow" className={styles.rainbowImage} /> {/* ИЗМЕНЕНО */}
        <Rain />
      </div>
    </motion.section>
  );
}
