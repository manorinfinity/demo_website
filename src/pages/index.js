import Footer from "../components/Navbar/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <section className={Styles.mainSection}>
        <p className={Styles.findemy}>FINDEMY</p>
        <p className={Styles.tagline}>Your one stop financial soultion</p>
        <button className={Styles.comingSoon}>Coming Soon</button>
      </section>
      <section className={Styles.ovalSection}></section>
      <Footer />
    </>
  );
}
