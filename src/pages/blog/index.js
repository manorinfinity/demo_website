import Footer from "../../components/Navbar/Footer/Footer";
import Header from "../../components/Navbar/Header/Header";
import Styles from "../../styles/Blog.module.css";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <Header/>
            <section className={Styles.mainSection}>
                <div className={Styles.blogSection}>
                    <Image
                        alt="Blog1"
                        src="/blog/Mask Group 28.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className={Styles.blogTitleTexts}>
                        <p className={Styles.smallText}>
                        Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                        </p>
                        <p className={Styles.smallestText}>
                        What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                        </p>
                    </div>
                </div>
                <div className={Styles.blogSection}>
                    <Image
                        alt="Blog2"
                        src="/blog/Mask Group 28.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />    
                    <div className={Styles.blogTitleTexts}>
                        <p className={Styles.smallText}>
                        Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                        </p>
                        <p className={Styles.smallestText}>
                        What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                        </p>
                    </div>
                </div>
                <div className={Styles.blogSection}>
                    <Image
                        alt="Blog3"
                        src="/blog/Mask Group 28.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />    
                    <div className={Styles.blogTitleTexts}>
                        <p className={Styles.smallText}>
                        Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                        </p>
                        <p className={Styles.smallestText}>
                        What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                        </p>
                    </div>
                </div>
            </section>
            <section className={Styles.midNav}>
                <div className={`${Styles.midNavItem} ${Styles.active}`}>
                Recently Added
                </div>
                <div className={Styles.midNavItem}>
                All
                </div>                
                <div className={Styles.midNavItem}>
                Basic Finance
                </div>                
                <div className={Styles.midNavItem}>
                Planning
                </div>
                <div className={Styles.midNavItem}>
                Market  
                </div>
                <div className={Styles.midNavItem}>
                Basic Finance
                </div>
                
            </section>
            <section className={Styles.blogList}>
                <div className={Styles.blogItem}>
                    <div className={Styles.blogImg}>
                        <Image
                            alt="Blog4"
                            src="/blog/Mask Group 28.png"                            
                            width="300"
                            height="250"
                            quality={100}
                        />
                    </div>
                    <div className={Styles.blogContent}>
                        <div className={Styles.blogTitleTextsContent}>
                            <div className={Styles.smallTextContent}>
                            Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                            </div>
                            <div className={Styles.smallestTextContent}>
                            What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.blogItem}>
                    <div className={Styles.blogImg}>
                        <Image
                            alt="Blog4"
                            src="/blog/Mask Group 28.png"                            
                            width="300"
                            height="250"
                            quality={100}
                        />
                    </div>
                    <div className={Styles.blogContent}>
                        <div className={Styles.blogTitleTextsContent}>
                            <div className={Styles.smallTextContent}>
                            Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                            </div>
                            <div className={Styles.smallestTextContent}>
                            What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.blogItem}>
                    <div className={Styles.blogImg}>
                        <Image
                            alt="Blog4"
                            src="/blog/Mask Group 28.png"                            
                            width="300"
                            height="250"
                            quality={100}
                        />
                    </div>
                    <div className={Styles.blogContent}>
                        <div className={Styles.blogTitleTextsContent}>
                            <div className={Styles.smallTextContent}>
                            Decoding Foreign Institutional Investors (FIIs) and Their Importance In Indian Stock Markets
                            </div>
                            <div className={Styles.smallestTextContent}>
                            What a great start to the new year-2022 with fresh Foreign Institutional Investors inflows pushing the
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
