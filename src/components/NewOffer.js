import React, { useEffect, useState } from 'react'
import styles from '../css/NewOffer.module.css'
import NewOfferCard from './NewOfferCard';
import {BiSpa} from 'react-icons/bi'
import { useSelector } from  'react-redux'
import svg from '../img/bottomHeading.jpg'

function NewOffer() {

    const selector = useSelector(state => state.newOfferData)
    // selector.map((item)=>{
    //     console.log(item)
    // })
    // console.log(selector)
    return (
        <div className={styles.newOffer}>
            <div className={styles.newOfferInner}>
                <div className={styles.heading}>
                    <span><BiSpa/></span>
                    <div className={styles.headingInner}>
                        <h2>Ən yeni təkliflər</h2>
                        {/* <img src={svg}/> */}
                    </div>
                    <span><BiSpa/></span>
                </div>
                <div className={styles.newOfferCards}>
                {
                selector.map((item)=>(
                    <NewOfferCard data={item}/>))
                }
                </div>
            </div>
        </div>
    )
}

export default NewOffer;
