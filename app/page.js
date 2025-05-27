
import styles from "./page.module.css";
import Header from "./comp/header/Header";

import Gallery from './comp/gallery/Gallery';
import Main from './comp/main/Main';
import Footer from './comp/footer/Footer';
// import AnimateOnScroll from "./AnimateOnScroll";



// const componentVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

export default function Home() {
  return (
   

  
    <div className="container">
    {/* <AnimateOnScroll threshold={0} variants={componentVariants}> */}
  <Header/>
    {/* </AnimateOnScroll> */}
   
    
        {/* <AnimateOnScroll threshold={0} variants={componentVariants}> */}
       <Main/>
    {/* </AnimateOnScroll>  */}
     
        {/* <AnimateOnScroll threshold={0.3} variants={componentVariants}> */}
      <Gallery/>
    {/* </AnimateOnScroll> */}
      
      <Footer/>
      
     
    </div>
   
  );
}
