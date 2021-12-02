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

    const {getingCartProduct, getCartProduct, getCardErrorMessage} = useSelector(state => state.getCartReducer)
    // console.log(getCartProduct)
    
    // if(getCartProduct){
    //     console.log(getCartProduct.data)
    // }
    // console.log(selector.length)


    return (
        <div>
            <div className={styles.cartTop} style={{backgroundImage: `url(${cartBg})`, backgroundPosition: '50% 10%'}}>
                <h2>Səbət</h2>
            </div>
            <div className={!getingCartProduct && getCartProduct && getCartProduct.data.length > 0 ? styles.cart : styles.none}>
                <ProductInCart/>
                <TotalInCart/>
            </div>
            <div className={!getingCartProduct && !getCartProduct ? styles.emptyCart : styles.none}>
                <BsCartX/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </div>
    )
}

export default Cart;
