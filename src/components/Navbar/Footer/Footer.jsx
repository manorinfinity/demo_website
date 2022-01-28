import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Styles from './Footer.module.css'

function Footer() {
    return <footer className={Styles.footer}>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                Logo
            </div>
            <ul className={Styles.link}>
                <li><a href='/'>About us</a></li>
                <li><a href='/'>Privacy</a></li>
                <li><a href='/'>Articles</a></li>
                <li><a href='/'>Blogs</a></li>
                <li><a href='/'>Contact us</a></li>
                <li><a href='/'>Terms and conditions</a></li>
            </ul>
            <ul className={Styles.sociaLink}>
                <li><Facebook /></li>
                <li><Instagram /></li>
                <li><Twitter /></li>
            </ul>
        </nav>
    </footer>;
}

export default Footer;
