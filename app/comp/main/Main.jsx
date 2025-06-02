'use client';
import { motion } from 'framer-motion';
import styles from './main.module.css';
import Background from '../background/Background';


const letters = [
  { src: "/img/coolest/c.png", alt: "c", className: styles.coolest_c },
  { src: "/img/coolest/o.png", alt: "o", className: styles.coolest_o },
  { src: "/img/coolest/o_1.png", alt: "o", className: styles.coolest_o_1 },
  { src: "/img/coolest/l.png", alt: "l", className: styles.coolest_l },
  { src: "/img/coolest/e.png", alt: "e", className: styles.coolest_e },
  { src: "/img/coolest/s.png", alt: "s", className: styles.coolest_s },
  { src: "/img/coolest/t.png", alt: "t", className: styles.coolest_t },
];

export default function Main() {
  return (
    <>


      <Background />
      <motion.section className={styles.section}>

        <div className={styles.image_block}>
          <motion.img
            src="/img/spray.png"
            alt="spray"
            className={styles.sprayImage}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              damping: 20,
              delay: 0.6
            }}
            style={{ transformOrigin: 'center' }}
          />
          <motion.img
            src="/img/spray.png"
            alt="spray"
            className={styles.sprayImage_2}
            initial={{ x: -200, scale: 0.3, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              damping: 20,
              delay: 0.3
            }}
          />

          <div className={styles.imageElipse}>
            <motion.img
              src="/img/Elips.png"
              alt="Ellipse"
              className={styles.elipseImage}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            />

            <motion.div
              className={styles.gradient_circle}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >

            </motion.div>

            <motion.img
              src="/img/erasebg.png"
              alt="erasebg"
              className={styles.erasebgImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: "easeInOut"
              }}
            />




            <div className={styles.coolestImage_block}>
              <div className={styles.coolestImage_block_block}>
                <motion.img
                  src="/img/The.png"
                  alt="The"
                  className={styles.the}
                  initial={{ y: -100, x: 200, opacity: 0, scale: 0.55 }}
                  animate={{
                    y: 0,
                    x: 0,
                    scale: 1,
                    opacity: [0, 0, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    opacity: {
                      duration: 2.5,
                      ease: "easeOut",
                      times: [0, 0.3, 1],
                    },
                  }}
                />

                <div className={styles.coolest_block}>
                  {letters.map((letter, index) => (
                    <motion.img
                      key={index}
                      src={letter.src}
                      alt={letter.alt}
                      className={letter.className}
                      initial={{
                        scale: 0,
                        rotate: 0,
                        opacity: 0,
                        y: 100,
                        filter: "blur(0px)",
                      }}
                      animate={{
                        scale: [0, 1, 1.2, 1],
                        rotate: [0, 360],
                        opacity: [0, 0.5, 1, 1],
                        y: [100, 50, -10, 0],
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                        ease: "easeOut",
                        times: [0, 0.5, 0.7, 1],
                      }}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 100,
                }}
                animate={{
                  width: "100%",
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 1.2,
                }}
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src="/img/children`s parties.png"
                  alt="children's parties"
                  className={styles.children_parties}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </motion.div>
            </div>

          </div>

          <motion.img
            src="/img/sun.png"
            alt="sun"
            className={styles.sunImage}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1.0,
              ease: "easeOut",
            }}
          />

          <motion.img
            src="/img/ladybug.png"
            alt="ladybug"
            className={styles.ladybugImage}
            initial={{ x: 300, y: 200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 40,
              damping: 14,
              delay: 2,
              mass: 0.5,
            }}
          />
        </div>
      </motion.section>
    </>
  );
}