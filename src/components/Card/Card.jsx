import React from 'react';
import Styles from './Card.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'

function Card() {
    const router = useRouter();
    return <div className={Styles.card} onClick={() => { router.push('/article') }}>
        <p>By <strong>Abdullah</strong> | 3 march 2019</p>
        <p className={Styles.cardHeading}>Increasing prosperity with positive thinking</p>
    </div>;
}

export default Card;
