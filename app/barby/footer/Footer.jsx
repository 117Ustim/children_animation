
import styles from "./footer.module.css"


export default function Footer () {
return (
 <div className={styles.container}>
<div className={styles.branch_block}>
           <img src="/img/branch.png" alt="branch" className={styles.branch} /> 
            <div className={styles.sheet_block}>
             <img src="/img/sheet.png" alt="sheet" className={styles.sheetImage} /> 
             <img src="/img/drops.png" alt="drops" className={styles.dropsImage} /> 
             <img src="/img/ladybug.png" alt="ladybug" className={styles.ladybugImage} /> 
           </div>
         
          </div>



 <div className={styles.green_2}>
           <img src="/img/green_2.png" alt="green" className={styles.greenImage_1} /> 
         <img src="/img/green_2.png" alt="green" className={styles.greenImage_2} /> 
          </div>
</div>

);
}