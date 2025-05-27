'use client';
import { motion } from 'framer-motion';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';





export default function Header() {


  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,delay: 1.1 }}
      // viewport={{ once: true }}
       className={styles.section}
    >
    <div className={styles.imageRow}>
       <div className={styles.imageWrapper_1}>
          
    <Image
      src="/img/cloud_1.png"
      alt="cloud"
      fill
      className={styles.image_1}
      priority
    />
  </div>
  <div className={styles.imageWrapper_2}>
   <Link href="/">
      <motion.div
        className={styles.header_text_1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.1, // ⏱ Задержка появления на 2 секунды
          duration: 2,
          ease: 'easeOut',
        }}
      >
        Головна
      </motion.div>
    </Link>
    <Image
      src="/img/cloud_2.png"
      alt="cloud"
      fill
      className={styles.image_2}
      priority
    />
  </div>
  <div className={styles.imageWrapper_3}>
      {/* <Link href="/gallery"><div className={styles.header_text_2}>Галерея</div></Link> */}

       <Link href="/barby">
      <motion.div
        className={styles.header_text_2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.4, // ⏱ Задержка появления на 2 секунды
          duration: 2,
          ease: 'easeOut',
        }}
      >
        Галерея
       
      </motion.div>
       </Link>
    <Image
      src="/img/cloud_3_1.png"
      alt="cloud"
      fill
      className={styles.image_3}
      priority
    />
   <motion.img
  src="/img/airplane.png"
  alt="airplane"
  className={styles.airplaneImage}
  initial={{ x: -1000, opacity: 0, rotate: 55 }}
  animate={{ x: 0, opacity: 1, rotate: -10 }}
  transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
/>
  </div>
  
   <div className={styles.imageWrapper_4}>
     {/* <Link href="/contact"><div className={styles.header_text_3}>Контакти</div></Link> */}
<motion.div
        className={styles.header_text_3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.6, // ⏱ Задержка появления на 2 секунды
          duration: 2,
          ease: 'easeOut',
        }}
      >
        Контакти
      </motion.div>
     
    <Image
      src="/img/cloud_4_1.png"
      alt="cloud"
      fill
      className={styles.image_4}
      priority
    />
  </div>
 
     
      </div>
    </motion.section>
  );
}