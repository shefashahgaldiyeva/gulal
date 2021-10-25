import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/Shop.module.css'
import '../css/Pure.css'
import Card from './Card'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'
import Filter from './Filter'
import ProductsInShop from './ProductsInShop'

function ShopAllCategory() {

   
   
    return (
        <div className={styles.shop}>
            <Filter/>
            <ProductsInShop/>
        </div>
    )
}

export default ShopAllCategory;
