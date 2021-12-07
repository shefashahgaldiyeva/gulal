import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
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
import { getProductsByCategory } from "../redux/reducers/getterReducer/product/product.thunk";

function ShopAllCategory(props) {
   
    const dispatch = useDispatch();
    const match = useRouteMatch()
    const catId = match.params.catId;
    
    const { gettingProduct, products, errorMessage } = useSelector(
        (state) => state.getProducts
    );
    useEffect(() => {
        dispatch(getProductsByCategory(catId));
    }, [catId]);
  

    return (
        <div className={styles.shop}>
            {
                props ? <Filter cats={props.cats}/> :  null
            }
            {
                !gettingProduct && products  ? 
                    <ProductsInShop data={products.data}/>  
                : null
            }
        </div>
    )
}

export default ShopAllCategory;
