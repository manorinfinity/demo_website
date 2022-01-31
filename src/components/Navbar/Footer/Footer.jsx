import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Styles from './Footer.module.css'
import Link from 'next/link'

function Footer() {
    return <footer className={Styles.footer}>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                Logo
            </div>
            <ul className={Styles.link}>
                <li><Link href='/'>About us</Link></li>
                <li><Link href='/'>Privacy</Link></li>
                <li><Link href='/article'>Articles</Link></li>
                <li><Link href='/blog'>Blogs</Link></li>
                <li><Link href='/'>Contact us</Link></li>
                <li><Link href='/'>Terms and conditions</Link></li>
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
