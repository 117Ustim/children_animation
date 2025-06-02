'use client';
import { motion } from 'framer-motion';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';





export default function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}

      className={styles.section}
    >

      {isModalOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/img/table.png"
              alt="Contacts Background"
              width={400}
              height={400}
              className={styles.modalImage}
              priority
            />
            <Image
              src="/img/tel.png"
              alt="Contacts Background"
              width={400}
              height={400}
              className={styles.telImage}
              priority
            />

          </motion.div>

        </motion.div>
      )}
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
                delay: 3.1,
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


          <Link href="/barby">
            <motion.div
              className={styles.header_text_2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 3.4,
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

          <motion.div
            className={styles.header_text_3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3.6,
              duration: 2,
              ease: 'easeOut',
            }}
            onClick={openModal}
            style={{ cursor: 'pointer' }}
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