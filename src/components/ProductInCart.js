import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import styles from '../css/ProductInCart.module.css'
import { GrClose } from 'react-icons/gr'


const ProductInCart = () =>{

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.bucketReducer)
    console.log(cardData)
    // const table = document.getElementById('table')
    // const tbody = document.getElementById('tbody')
    // console.log(table,tbody)
    // tbody ? table : table.style.display = 'none'
    // let bool = true; 
    // if(bool){
        // table.style.display = 'block'
    // }else{
        // table.style.display = 'none'
    // }

    const handlePlus = (item) =>{
        // const plusItem = cardData.filter(index => index.id == item.id)
        // if(plusItem){
        //     plusItem[0].quantity += 1
        // }

        // console.log({
        //     id: item.id,
        //     quantity: 1
        // })

        dispatch({
            type: 'UPDATE_BUCKET_MINUS',
            payload: {
                id: item.id,
                quantity: 1
            }
        })
        // item.quantity += 1
        // console.log(item.quantity)
    }
    const handleMinus = (item) =>{
        // const minusItem = cardData.filter(index => index.id == item.id)
        // console.log(minusItem)
        // if(minusItem){
        //     minusItem[0].quantity -= 1
        // }

        dispatch({
            type: 'UPDATE_BUCKET_PLUS',
            payload: {
                id: item.id,
                quantity: 1
            }
        })
    }
    cardData.map((item)=>{
        item.total = Number(item.price) * item.quantity
        // console.log(item.total)
    })

  

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
                    cardData.map((item)=>(
                        <tr key={item.id}>
                        <td className={styles.tdImgName}>
                            <div>
                                <img className={styles.img} src={item.img}/>
                                <h3>{item.text}</h3>
                            </div>
                        </td>
                        <td className={styles.price}><span>{item.price} azn</span></td>
                        <td>
                            <div className={styles.quantity}>
                                <button onClick={() => handleMinus(item)}>
                                    -
                                </button>{item.quantity && item.quantity}
                                <button onClick={() => handlePlus(item)}>
                                    +
                                </button>
                            </div>
                        </td>
                        <td><p className={styles.total}>{item.total} azn</p></td>
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
