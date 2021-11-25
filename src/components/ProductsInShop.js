import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { Link, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/Shop.module.css'
// import '../css/Pure.css'
// import styles from '../css/ProductsInShop.module.css'
import Card from '../components/Card'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {RiLayoutGridFill} from 'react-icons/ri'
import { loadByFilterAsync } from "../redux/reducers/products/products.thunks";


function ProductsInShop(props) {

    const dispatch = useDispatch();
    const match = useRouteMatch();
  
    const catId = match.params.catId;
    const selectorData = useSelector(state => state.newOfferData)
    const paramsHeader = useSelector((state) => state.paramsReducer);
    const [changeClass, setChangeClass] = useState(false)

    function handleChangeClassGrid3(){
        setChangeClass(!changeClass)
    }
    function handleChangeClassGrid4(){
        setChangeClass(!changeClass)
    }

    function sortable(e){
        dispatch({
            type: 'SET_SORT',
            payload: e.target.value,
        })
        console.log(paramsHeader)
        console.log(e.target.value)
        dispatch(loadByFilterAsync(catId, paramsHeader));
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
                            <select name='select' onChange={(e)=>sortable(e)}>
                                <option>Çox satılanlar</option>
                                <option value="0">Artan Qiymət</option>
                                <option value="1">Azalan Qiymət</option>
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
                    {props.data &&
                        props.data.map((item) => (
                            <Switch>
                                    <div className={changeClass ? styles.productsBottomItem3 : styles.productsBottomItem4}>
                                        <Card item={item}/>
                                    </div>
                            </Switch>
                        ))
                    }
                </div>
            </div>
    )
}

export default ProductsInShop;


