import React from 'react';
import styles from './Cart.module.css';

const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <img src={props.product.image} alt={props.product.name} className={styles.img}/>
            <h1 className={styles.title}>{props.product.name}</h1>
            <span className={styles.content}>
                <p>{props.product.brand}</p>
                <p>{props.product.price}</p>
            </span>
            <p className={styles.desc}>{props.product.description}</p>
        </div>
    );
}

export default Cart;
