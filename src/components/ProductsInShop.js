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
import { getProductByFilter } from '../redux/reducers/getterReducer/product/product.thunk'


function ProductsInShop(props) {

    // console.log(props.data)

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
        dispatch(getProductByFilter(catId, paramsHeader));
    }

    return (
        <div className={styles.products}>
                <div className={styles.productsTop}>
                    <div className={styles.productsTopLeft}>
                        {/* <p>Mövcuddur: <span>{props.data ? props.data.length : 0}</span>, Göstərilir: <span>{props.data ? props.data.length : 0}</span></p> */}
                        {/* <p><span>{props.data.length}</span> 'dən <span>{props.data.length}</span> 'u göstərilir</p> */}
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


