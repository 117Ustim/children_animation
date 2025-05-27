'use client';

import { motion} from 'framer-motion';
import Image from 'next/image';
import styles from'./main_gallery.module.css';



export default function MainGallery () {




return (
   
<div className={styles.container}>
   
      <div className={styles.left}>
      <div className={styles.image_block}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0, z: -100 }}
          animate={{ scale: 1, opacity: 1, z: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/img/gallery/elipse_gallery.png"
            alt="Photo 1"
            width={694}
            height={694}
            className={styles.elipse_gallery}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/img/gallery/erasebg_gallery.png"
            alt="Photo 2"
            width={624}
            height={792}
            className={styles.image_gallery}
          />
        </motion.div>
      </div>
    </div>

      {/* Правая колонка с текстом */}
      <div className={styles.right}>
        <div className={styles.textContent}>
          <h1>Ласкаво просимо до Академії краси Barbie !
</h1>
          <p>
         <span className={styles.lineNormal}>Так-так, вам не почулося! Саме тут Барбі та Кени вчаться бути особливими.</span><br /><br />

  <span className={styles.lineWide}>Б'юті завдання, солодкі естафети, fashion-покази, казкові друзі, змагання між Барбі та Кенами та шалені танцювальні вечірки чекають на вас у Академії краси Barbie.</span><br /><br />

  <span className={styles.lineTitle}>Маленькі учні :</span><br /><br />

  <span className={styles.lineTight}>- прокачають навички стилю</span><br />
  <span className={styles.lineTight}>- вивчать предмети краси</span><br />
  <span className={styles.lineTight}>- познайомляться з основами здорового харчування</span><br />
  <span className={styles.lineTight}>- перевірять свої кулінарні навички</span><br />
  <span className={styles.lineTight}>- познайомляться з користю руханок та спорту</span><br />
  <span className={styles.lineTight}>- весело проведуть час</span><br />
  <span className={styles.lineTight}>- вивчать багато танців та влаштують справжню Барбі-вечірку.</span><br /><br />

  <span className={styles.lineNormal}>Наприкінці проходження Академії краси Barbie кожна Барбі та Кен отримають власний б'юті диплом!</span>
          </p>
           <div className={styles.table_block}>
           <img src="/img/gallery/table.png" alt="table" className={styles.table} /> 
              <img src="/img/gallery/barbie_and_ken.png" alt="barbie_and_ken" className={styles.table_text} /> 
          </div>
           
        </div>
       
      </div>
    <motion.img
      src="/img/gallery/spider.png"
      alt="spider"
      className={styles.spider}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 2.5, // более плавное появление
        ease: [0.25, 0.1, 0.25, 1] // кастомная кривая (ease-in-out)
      }}
    />
     
    </div>
   
  );
};
