import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import styles from '../css/ProductInCart.module.css'
import { GrClose } from 'react-icons/gr'
import { loadIncrementAsync } from '../redux/reducers/products/products.thunks';
import { loadDecrementAsync } from '../redux/reducers/products/products.thunks';
import { getCartAsync } from '../redux/reducers/products/products.thunks';
import IncDecButton from './IncDecButton';


const ProductInCart = () =>{

    const {getingCartProduct, getCartProduct, getCardErrorMessage} = useSelector(state => state.getCartReducer)
    // console.log(getCartProduct)
    
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


    return (
        <div className={styles.table}>
            <table>
                <thead id='table'>
                    <tr>
                        <th>Məhsul</th>
                        <th>Qiymət</th>
                        <th>Say</th>
                        <th>Cəm</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                {
                    !getingCartProduct && getCartProduct && getCartProduct.data.map((item)=>(
                        <tr key={item.product.id}>
                        <td className={styles.tdImgName}>
                            <div>
                                <img className={styles.img} src={item.product.photo}/>
                                <h3>{item.product.text}</h3>
                            </div>
                        </td>
                        <td className={styles.price}><span>{item.product.price} azn</span></td>
                        <td>
                            <div className={styles.quantity}>
                                <IncDecButton id={item.product.id} quantity={item.quantity}/>
                            </div>
                        </td>
                        <td><p className={styles.total}>{item.product.totalPrice} azn</p></td>
                        <td><button className={styles.btn} onClick={()=>dispatch({
                            type: 'SEBETDEN_SIL',
                            payload: item
                        })}><GrClose/></button></td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductInCart;
