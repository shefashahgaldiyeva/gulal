import React from 'react'
import styles from '../css/DetailRight.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  styled  from '../css/WishList.module.css';
import  styless from '../css/Card.module.css'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'

function DetailRight(props) {

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.bucketReducer)

    const handlePlus = (item) =>{
        const plusItem = cardData.filter(index => index.id == item.id)
        console.log(plusItem)
        if(plusItem){
            plusItem[0].quantity += 1
        }
        // item.quantity += 1
        // console.log(item.quantity)
    }
    const handleMinus = (item) =>{
        const minusItem = cardData.filter(index => index.id == item.id)
        console.log(minusItem)
        if(minusItem){
            minusItem[0].quantity -= 1
        }
    }

    return (
        <div className={styles.detailRight}>
            <h1>{props.item.text}</h1>
            <p className={styles.p}>{props.item.p}</p>
            <span className={styles.review}>({props.item.review} baxış)</span>
            <span className={styles.price}>{props.item.price} azn</span>
            <div className={styles.df}>
                <div className={styless.quantity}>
                    <button onClick={() => handleMinus(props.item)}>
                         -
                    </button>
                    {props.item.quantity && props.item.quantity}
                    <button onClick={() => handlePlus(props.item)}>
                         +
                    </button>
                </div>
                <Link to='/cart'><button className={styled.btn} onClick={()=>dispatch({
                    type: 'ELAVE_ET',
                    payload: props.item
                })}><FaCartPlus/>SATIN AL</button></Link>
            </div>
            <h3>Stokda var</h3>
        </div>
    )
}

export default DetailRight;
