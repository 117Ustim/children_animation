import Image from 'next/image';
import styles from'./main_gallery.module.css';



export default function MainGallery () {
return (
<div className={styles.container}>
   
      <div className={styles.left}>
        <div className={styles.image_block}>
          <Image
            src="/img/gallery/elipse_gallery.png"
            alt="Photo 1"
            width={694}
            height={694}
            className={styles.elipse_gallery}
          />
          <Image
            src="/img/gallery/erasebg_gallery.png"
            alt="Photo 2"
            width={624}
            height={792}
            className={styles.image_gallery}
          />
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
       <img src="/img/gallery/spider.png" alt="spider" className={styles.spider} /> 
     
    </div>
  );
};
