import React from 'react';
import Styles from './Header.module.css'

function Header() {
    return <header className={Styles.header}>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>Logo</div>
            <ul className={Styles.link}>
                <li><a href='/'>Articles</a></li>
                <li><a href='/'>Blog</a></li>
            </ul>
        </nav>
    </header>;
}

export default Header;
