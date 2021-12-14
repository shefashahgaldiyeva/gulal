import React, { useEffect, useState } from 'react'
import styles from '../css/NewOffer.module.css'
import NewOfferCard from './NewOfferCard';
import {BiSpa} from 'react-icons/bi'
import { useSelector,useDispatch } from  'react-redux'
import svg from '../img/bottomHeading.jpg'
import { getNewProductsAsync } from '../redux/reducers/getterReducer/newProducts/newProducts.thunk'

function NewOffer() {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.newOfferData)
    // selector.map((item)=>{
    //     console.log(item)
    // })
    // console.log(selector)
    useEffect(() => {
        dispatch(getNewProductsAsync())
    }, [])
    const {gettingNewProduct, newProducts, newProductsErrorMessage} = useSelector(state => state.getNewProducts)
    // if(!gettingNewProduct && newProducts){
    //     console.log(newProducts.data)
    // }
    
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
                {!gettingNewProduct && newProducts && 
                    newProducts.data.map((item)=>(
                        <NewOfferCard data={item}/>))
                }
                </div>
            </div>
        </div>
    )
}

export default NewOffer;
