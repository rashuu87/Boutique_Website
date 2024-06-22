// import React from 'react';
// import styles from './Cart.module.css';

// const Cart = (props) => {
//     return (
//         <div className={styles.cart}>
//             <img src={props.product.image} alt={props.product.name} className={styles.img}/>
//             <h1 className={styles.title}>{props.product.name}</h1>
//             <span className={styles.content}>
//                 <p>{props.product.brand}</p>
//                 <span className={styles.priceANDdiscount}>
//                     <p className={styles.price}> 
//                         ₹ {props.product.price}
//                     </p>
//                     <p className={styles.discount}>
//                         ₹ {props.product.discount}
//                     </p>
//                 </span>  
//             </span>
//             <p className={styles.desc}>{props.product.description}</p>
//         </div>
//     );
// }

// export default Cart;


import React from 'react';
import styles from './Cart.module.css';

const Cart = (props) => {
    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cart}>
                <img src={props.product.image} alt={props.product.name} className={styles.img}/>
                <h1 className={styles.title}>{props.product.name}</h1>
                <span className={styles.content}>
                    <p>{props.product.brand}</p>
                    <span className={styles.priceANDdiscount}>
                        <p className={styles.price}> 
                            ₹ {props.product.price}
                        </p>
                        <p className={styles.discount}>
                            ₹ {props.product.discount}
                        </p>
                    </span>  
                </span>
                <p className={styles.desc}>{props.product.description}</p>
            </div>
        </div>
    );
}

export default Cart;
