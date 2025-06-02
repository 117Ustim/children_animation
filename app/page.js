import "./page.module.css";
import Header from "./comp/header/Header";

import Gallery from "./comp/gallery/Gallery";
import Main from "./comp/main/Main";
import Footer from "./comp/footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <Main />

      <Gallery />

      <Footer />
    </div>
  );
}
