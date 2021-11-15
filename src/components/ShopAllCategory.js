import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { loadCategoriesAsync,loadProductByCategoryAsync } from "../redux/reducers/categories/categories.thunks";
import styles from '../css/Shop.module.css'
import '../css/Pure.css'
import Card from './Card'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'
import Filter from './Filter'
import ProductsInShop from './ProductsInShop'
import CategoriesService from '../services/categories.service'

function ShopAllCategory() {
   
    const dispatch = useDispatch();
    const match = useRouteMatch('/category/:catId')
    const catId = match.params.catId;

    const { isloading, products, errorMessage } = useSelector( 
        (state) => state.getProducts
    );
    
    // console.log(data)
    useEffect(() => {
        // dispatch(loadCategoriesAsync());
        dispatch(loadProductByCategoryAsync(catId));
        // console.log(catId)
    }, []);
    console.log(products)


    return (
        <div className={styles.shop}>
            <div >
                <Filter/>
                <ProductsInShop/>
            </div>
        </div>
    )
}

export default ShopAllCategory;
