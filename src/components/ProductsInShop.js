import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/Shop.module.css'
// import '../css/Pure.css'
// import styles from '../css/ProductsInShop.module.css'
import Card from '../components/Card'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'


function ProductsInShop() {

    const selectorData = useSelector(state => state.newOfferData)
    console.log(selectorData)

    return (
        <div className={styles.products}>
                <div className={styles.productsTop}>
                    <div className={styles.productsTopLeft}>
                        <p><span>{selectorData.length}</span> 'dən <span>{9}</span> 'u göstərilir</p>
                    </div>
                    <div className={styles.productsTopRight}>
                        <div>
                            <label for='select'>Sırala: </label>
                            <select name='select'>
                                <option>Tövsiyə olunan</option>
                                <option>Çox satılanlar</option>
                                <option>Qiymətə görə</option>
                                <option>Ən yenilər</option>
                            </select>
                        </div>
                        <div className={styles.grids}>
                            <Link to='/Butun-Kateqoriyalar'><BsFillGrid3X3GapFill/></Link>
                            <div className={styles.gridSame}>
                                <Link to='/Grid12'><RiLayoutGridFill/><RiLayoutGridFill/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productsBottom}>
                    {
                        selectorData.map((item) => (
                            <div className={styles.productsBottomItem}>
                                <Card item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default ProductsInShop;
