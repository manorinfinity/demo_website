import Card from "../components/card/Card";
import Footer from "../components/Navbar/Footer/Footer";
import Header from "../components/Navbar/Header/Header";
import Styles from "../styles/Home.module.css";
import ComingSoon from "../svgs/ComingSoon";
import Carousel from "react-elastic-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <section className={Styles.mainSection}>
        <p className={Styles.findemy}>FINDEMY</p>
        <p className={Styles.tagline}>Your one stop financial soultion</p>
        <div className={Styles.comingSoon}>
          <ComingSoon />
        </div>
      </section>
      <section className={Styles.ovalSection}>
        <p>Suscribe for latest updates and early access</p>
        <p className={Styles.loremStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br /> eiusmod tempor incididunt ut
        </p>
        <div className={Styles.inputArea}>
          <input
            type="text"
            name=""
            id=""
            className={Styles.inputBox}
            placeholder="Enter email address"
          />
          <button className={Styles.searchButton}>Submit</button>
        </div>
      </section>
      <section className={Styles.blogSection}>
        <p className={Styles.checkBlog}>
          Check Our latest blog posts and articles
        </p>
        <p className={Styles.tagLine}>
          Join 40,000+ other marketers and get proven strategies on email
          marketing
        </p>
        <Carousel
          className={Styles.blogShowcase}
          itemsToShow={4}
          showArrows={false}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </section>
      <Footer />
    </>
  );
}
