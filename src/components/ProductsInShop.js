import React, { useState } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/Shop.module.css'
// import '../css/Pure.css'
// import styles from '../css/ProductsInShop.module.css'
import Card from '../components/Card'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'
// import { Switch } from '@mui/material'


function ProductsInShop() {

    const selectorData = useSelector(state => state.newOfferData)
    console.log(selectorData)

    const [changeClass, setChangeClass] = useState(false)
    function handleChangeClassGrid3(){
        setChangeClass(!changeClass)
        // console.log(changeClass)
    }
    function handleChangeClassGrid4(){
        setChangeClass(!changeClass)
        // console.log(changeClass)
    }

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
                            <Link onClick={()=>handleChangeClassGrid3()} to={'#'}><BsFillGrid3X3GapFill/></Link>
                            <div className={styles.gridSame}>
                                <Link onClick={()=>handleChangeClassGrid4()} to={'#'}><RiLayoutGridFill/><RiLayoutGridFill/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='myDiv' className={styles.productsBottom}>
                    {
                        selectorData.map((item) => (
                            <Switch>
                                {/* <Redirect from="/Butun-Kateqoriyalar" to="/Grid3" /> */}
                                {/* <Redirect strict from="/Butun-Kateqoriyalar/" to="/Grid3" /> */}
                                {/* <Route path='/Grid3'> */}
                                    <div key={'grid'} id='grid' className={changeClass ? styles.productsBottomItem3 : styles.productsBottomItem4}>
                                        <Card item={item}/>
                                    </div>
                                {/* </Route>
                                <Route path='/Grid4'>
                                    <div className={styles.productsBottomItem4}>
                                        <Card item={item}/>
                                    </div>
                                </Route> */}
                            </Switch>
                        ))
                    }
                </div>
            </div>
    )
}

export default ProductsInShop;


