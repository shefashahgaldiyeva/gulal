import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../css/Cart.module.css'
import ProductInCart from './ProductInCart';
import TotalInCart from './TotalInCart'
import { BsCartX } from 'react-icons/bs'
import cartBg from '../img/cardBg.jpg'


function Cart() {

    const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)
    const { gettingProductInCart,productInCart,errorMessage } =  useSelector(state => state.getShoppingCart)

	const [guestCartProducts, setGuestCartProducts] = useState();
    const [cartProducts, setCartProducts] = useState();
	const [products, setProducts] = useState(null);
	useEffect(() => {
		if(!gettingProductInCart && guestCart){
			setProducts(guestCart)
		}
		else if(!gettingProductInCart && productInCart){
			setProducts(productInCart)
		}
	}, [products])
	console.log(products)

    return (
        <div>
            <div className={styles.cartTop} style={{backgroundImage: `url(${cartBg})`, backgroundPosition: '50% 10%'}}>
                <h2>Səbət</h2>
            </div>
            <div className={products && products.data.length>0 ? styles.cart : styles.none}>
                <ProductInCart/>
                <TotalInCart/>
            </div>
            <div className={!products ? styles.emptyCart : styles.none}>
                <BsCartX/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </div>
    )
}

export default Cart;
