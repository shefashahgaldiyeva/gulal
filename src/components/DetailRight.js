import React,{useState} from 'react'
import styles from '../css/DetailRight.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import { guestSetTokenAsync } from '../redux/reducers/setterReducer/guestSetToken/guestSetToken.thunk'
import { addToCart } from '../redux/reducers/setterReducer/addToCartProduct/addToCart.thunk'
import { guestAddToCartAsync } from '../redux/reducers/setterReducer/guestAddToCart/guestAddToCart.thunk'
import GuestStore from '../services/GuestStore'
import AuthStore from '../services/AuthStore'

function DetailRight(props) {

    console.log(props.item)
    const dispatch = useDispatch();
    const {isLoading,users,userErrorMessage} = useSelector(state => state.users)
    const {isLoadingGuest,guestAssignedToken,guestErrorMessage} = useSelector(state => state.guestSetTokenReducer)
    useSelector(state => console.log(state.setAddToCart))
    const [itemQuantity, setitemQuantity] = useState(1)

    const handlePlus = () => {
        setitemQuantity(itemQuantity+1)
      };
    const handleMinus = () => {
        setitemQuantity(itemQuantity-1)
    };

    GuestStore.getGuestToken()
    const handleAdd = (item) =>{
        console.log(item)
        if(!AuthStore.appState && !GuestStore.appState){
            dispatch(guestSetTokenAsync())
            if(!isLoadingGuest && guestAssignedToken){
                console.log(guestAssignedToken)
                GuestStore.saveGuestToken(guestAssignedToken.guestToken)
            }
        }
        if(!isLoading && users){
            dispatch(addToCart({pid : item.id, count: itemQuantity}))
        }
        if(!users && !isLoadingGuest && guestAssignedToken){
            dispatch(guestAddToCartAsync({product_id : item.id, quantity: itemQuantity, guestToken: GuestStore.appState}))
        }
    }

    return (
        <div className={styles.detailRight}>
            <h1>{props.item.name}</h1>
            <p className={styles.p}>{props.item.detail}</p>
            <span className={styles.review}>({props.item.review}5 baxış)</span>
            <span className={styles.price}>{props.item.price} azn</span>
            <div className={styles.df}>
                <div className={styles.quantity}>
                    <button onClick={() => handleMinus()}>
                         -
                    </button>
                    {itemQuantity}
                    <button onClick={() => handlePlus()}>
                         +
                    </button>
                </div>
                <Link to='/sebet'><button className={styles.btn} onClick={()=>handleAdd(props.item)}><FaCartPlus/>SATIN AL</button></Link>
                {/* <Link to='/cart'><button className={styles.btn}><FaCartPlus/>SATIN AL</button></Link> */}
            </div>
            <h3>Stokda var</h3>
        </div>
    )
}

export default DetailRight;
