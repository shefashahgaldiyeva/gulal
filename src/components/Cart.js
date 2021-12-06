import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../css/Cart.module.css'
import ProductInCart from './ProductInCart';
import TotalInCart from './TotalInCart'
import { BsCartX } from 'react-icons/bs'
import cartBg from '../img/cardBg.jpg'


function Cart() {

    // useEffect(() => {
    //     window.location.reload()
    // }, [])

    const {gettingProductInCart,productInCart,errorMessage} =  useSelector(state => state.getShoppingCart)
    // console.log(getCartProduct)
    

    return (
        <div>
            <div className={styles.cartTop} style={{backgroundImage: `url(${cartBg})`, backgroundPosition: '50% 10%'}}>
                <h2>Səbət</h2>
            </div>
            <div className={!gettingProductInCart && productInCart ? styles.cart : styles.none}>
                <ProductInCart/>
                <TotalInCart/>
            </div>
            <div className={!gettingProductInCart && !productInCart ? styles.emptyCart : styles.none}>
                <BsCartX/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </div>
    )
}

export default Cart;
