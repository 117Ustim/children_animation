'use client';

import styles from './footer.module.css'; 
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // задержка между анимациями
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      z: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.div className={styles.networks_block} variants={containerVariants}>
          {["f.png", "in.png", "sc.png"].map((icon, index) => (
            <motion.img
              key={index}
              src={`/img/${icon}`}
              alt={icon}
              className={styles.icon}
              variants={iconVariants}
            />
          ))}
        </motion.div>
      <img src="/img/grass.png" alt="grass" className={styles.grassImage} />  
       <img src="/img/fence.png" alt="fence" className={styles.fenceImage} />  
      </div>
    </motion.section>
  );
}



