import React from 'react';
import styles from './Cart.module.css';

const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <img src={props.image} alt={props.name} className={styles.img}/>
            <h1 className={styles.title}>title</h1>
            <span className={styles.content}>
                <p>sports</p>
                <p>$547</p>
            </span>
            <p className={styles.desc}>Ut kasd tempor sed sit amet, invidunt labore sed magna dolor sit lorem labore consetetur.</p>
        </div>
    );
}

export default Cart;
