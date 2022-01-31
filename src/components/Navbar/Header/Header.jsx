import React from 'react';
import Styles from './Header.module.css'
import Link from 'next/link'

function Header() {
    return <header className={Styles.header}>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}><Link href='/'>Logo</Link></div>
            <ul className={Styles.link}>
                <li><Link href='/article'>Articles</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
            </ul>
        </nav>
    </header>;
}

export default Header;
