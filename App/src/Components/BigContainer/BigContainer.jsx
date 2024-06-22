import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import styles from './BigContainer.module.css'
import axios from 'axios';

const BigContainer = (props) => {
    const [products,setProducts]=useState([])
    const getData=()=>{
        let url='http://localhost:3001/products'
        let p=axios.get(url)
        p.then((res)=>{
           // console.log(res.data.bestSelling)
            setProducts(res.data.bestSelling)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <div className={styles.fakeContainer}>
                {
                products.map((item)=><Cart key={item.id} product={item} />)
                }
            </div>
        </div>
    );
}

export default BigContainer;
