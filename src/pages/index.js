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
        <div className={Styles.blogShowcase}>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
