
import Header from '../comp/header/Header'
import styles from './barby.modyle.css'
import MainGallery from './main/MainGallery'

import Carousel2 from './carousel_2/Carousel_2'
import Footer from './footer/Footer'

export default function Barby () {
return (
 <div className={styles.container}>
<Header/>
<MainGallery/>
<Carousel2/>
<Footer/>
</div>
  

)
}