
import Header from '../comp/header/Header'
import styles from './barby.modyle.css'
import MainGallery from './main/MainGallery'
import Carousel from './carousel/Carousel'
import Footer from './footer/Footer'

export default function Barby () {
return (
 <div className={styles.container}>
<Header/>
<MainGallery/>
<Carousel/>
<Footer/>
</div>
  

)
}