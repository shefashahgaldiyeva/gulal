import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/TotalInCart.module.css'
import { HiOutlineRefresh } from 'react-icons/hi'


const TotalInCart = () =>{

    const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
	const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)

    const [total, setTotal] = useState(0)
	useEffect(() => {
		if(!gettingGuestCart && guestCart.data){
            let sum = 0;
            guestCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		}
		if(!gettingProductInCart && productInCart){
            let sum = 0;
            productInCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		}
	}, [productInCart,guestCart])
	// console.log(total)
    
    return (
        <div className={styles.total}>
            <div className={styles.subTotal}>
                <div className={styles.totalSpan}>
                    <span>Toplam:</span>
                    <span>{total} azn</span>
                </div>
                <Link className={styles.btn} to='/Sifariş-et'>SIFARİŞ ET </Link>
            </div>
            <div>
            <Link className={styles.continue} to='/'>
                ALIŞ VERİŞƏ DAVAM ET
                <HiOutlineRefresh/>
            </Link>
            </div>
        </div>
    )
}

export default TotalInCart;
