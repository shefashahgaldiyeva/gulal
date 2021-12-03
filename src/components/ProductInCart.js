import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import styles from '../css/ProductInCart.module.css'
import { GrClose } from 'react-icons/gr'
import { loadIncrementAsync, loadQuantityAsync, loadDecrementAsync  } from '../redux/reducers/products/products.thunks';
import { getCartAsync } from '../redux/reducers/products/products.thunks';
import { loadCartDeleteAsync } from '../redux/reducers/products/products.thunks';
import IncDecButton from './IncDecButton';
import CartTotalPrice from './CartTotalPrice'


const ProductInCart = () =>{

    const {getingCartProduct, getCartProduct, getCardErrorMessage} = useSelector(state => state.getCartReducer)
    // console.log(getCartProduct)
    useSelector(state => console.log(state.quantityReducer))
    
    // if(getCartProduct){
    //     console.log(getCartProduct.data)
    // }

    const dispatch = useDispatch();

    // const handlePlus = (id) =>{
    //     dispatch(loadIncrementAsync({
    //         'pid': id
    //     }))
    //     dispatch(getCartAsync())
    // }
    // const handleMinus = (id) =>{
    //     dispatch(loadDecrementAsync({
    //         'pid': id
    //     }))
    //     dispatch(getCartAsync())
    // }
    // props.data && props.data.map((item)=>{
    //     item.product.totalPrice = Number(item.price) * item.quantity
    // })
    // props.data && props.data.map((item)=>{
    //     console.log(item.quantity)
    // })


    function handleDelete(id){
        dispatch(loadCartDeleteAsync({
            pid: id,
          }))
        dispatch(getCartAsync)
    }


    return (
        <div className={styles.table}>
            <table>
                <thead id='table'>
                    <tr>
                        <th style={{with:'30%'}}>Məhsul</th>
                        <th style={{with:'30%'}}>Qiymət</th>
                        <th style={{with:'25%'}}>Say</th>
                        <th style={{with:'25%'}}>Cəm</th>
                        <th style={{with:'10%'}}></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                {
                    !getingCartProduct && getCartProduct && getCartProduct.data.map((item)=>(
                    <tr key={item.product.id}>
                        <td style={{with:'30%'}} className={styles.tdImgName}>
                            <div>
                                <img className={styles.img} src={item.product.photo}/>
                                <h3>{item.product.text}</h3>
                            </div>
                        </td>
                        <td style={{with:'30%'}} className={styles.price}><span>{item.product.price} azn</span></td>
                        <td style={{with:'25%'}}>
                            <div className={styles.quantity}>
                                <IncDecButton id={item.product.id}/>
                            </div>
                        </td>
                       <td style={{with:'25%'}}>
                            <CartTotalPrice id={item.product.id}/>
                        </td>
                        <td style={{with:'10%'}}><button className={styles.btn} onClick={()=>handleDelete(item.product.id)}>
                            <GrClose/>
                        </button></td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductInCart;
