import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
// import { loadCategoriesAsync,loadProductByCategoryAsync } from "../redux/reducers/categories/categories.thunks";
import { loadProductsAsync,loadProductByCategoryAsync } from "../redux/reducers/products/products.thunks";
import styles from '../css/Shop.module.css'
import '../css/Pure.css'
import Card from './Card'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'
import Filter from './Filter'
import ProductsInShop from './ProductsInShop'
import ProductsService from '../services/products.service'

function ShopAllCategory(props) {
   
    const dispatch = useDispatch();
    const match = useRouteMatch()
    const catId = match.params.catId;
    
    const {isLoading,products,errorMessage} = useSelector( 
        (state) => state.products
    );
    // if(products && !isLoading){
    //     console.log(products.data.data)
    // }

    useEffect(() => {
        dispatch(loadProductByCategoryAsync(catId));
    }, [catId]);

    return (
        <div className={styles.shop}>
            {
                props ? <Filter cats={props.cats}/> :  null
            }
            {
                products && !isLoading ? 
                    <ProductsInShop data={products.data.data}/>
                : null
            }
        </div>
    )
}

export default ShopAllCategory;
