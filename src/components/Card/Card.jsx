import React from 'react';
import Styles from './Card.module.css';

function Card() {
    return <div className={Styles.card}>
        <p>By <strong>Abdullah</strong> | 3 march 2019</p>
        <p className={Styles.cardHeading}>Increasing prosperity with positive thinking</p>
    </div>;
}

export default Card;
