import React from 'react'
import styles from '../css/Cart.module.css'
import ProductInCart from './ProductInCart';
import TotalInCart from './TotalInCart'
import cartBg from '../img/cardBg.jpg'


function Cart() {
    return (
        <div>
            <div className={styles.cartTop} style={{backgroundImage: `url(${cartBg})`, backgroundPosition: '50% 10%'}}>
                <h2>Səbət</h2>
            </div>
            <div className={styles.cart}>
                <ProductInCart/>
                <TotalInCart/>
            </div>
        </div>
    )
}

export default Cart;
