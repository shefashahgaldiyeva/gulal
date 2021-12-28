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
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import { getProductByFilter, getProductsByCategory } from '../redux/reducers/getterReducer/product/product.thunk'
// import { Pagination, Stack } from '@mui/material'
import axios from 'axios'
import {Pagination} from 'react-laravel-paginex'


function ProductsInShop(props) {
    console.log(props)

    const dispatch = useDispatch();
    const match = useRouteMatch();
  
    const catId = match.params.catId;
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
        
        dispatch(getProductByFilter(catId, paramsHeader));
    }
    // props.data.meta.last_
    // const [page, setPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState(6)
    const [data, setData] = useState(props.data.data)
    const [params, setParams] = useState({});
    const handleChange = (data) => {
        dispatch({
            type: "SET_PAGE",
            payload: data.page
        });
        dispatch(getProductByFilter(catId, paramsHeader));
        window.scroll(0,0)
    }
 

    return (
        <div className={styles.products}>
                <div className={styles.productsTop}>
                    <div className={styles.productsTopLeft}>
                        <p>Mövcuddur: <span>{props.data.data ? props.data.meta.total : 0}</span>, Göstərilir: <span>{data ? data.length : 0}</span></p>
                        {/* <p><span>{props.length}</span> 'dən <span>{props.length}</span> 'u göstərilir</p> */}
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
                    {data &&
                        data.map((item) => (
                            <Switch>
                                    <div className={changeClass ? styles.productsBottomItem3 : styles.productsBottomItem4}>
                                        <Card item={item}/>
                                    </div>
                            </Switch>
                        ))
                    }
                </div>
                    {/* <Stack spacing={2} className={styles.pagination}>
                        <Pagination 
                            onChange={(e)=>console.log(e.target.textContent)}
                            count={numberOfPages} 
                            variant="outlined" 
                            // color="secondary" 
                        />
                    </Stack> */}
                    <div className={styles.paginationWrapper}>
                        <Pagination className={styles.paginex} changePage={handleChange} data={props.data} prevButtonText={<IoIosArrowBack/>} nextButtonText={<IoIosArrowForward/>}/>
                    </div>
            </div>
    )
}

export default ProductsInShop;


