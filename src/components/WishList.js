import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import  styles  from '../css/WishList.module.css';
import  styled  from '../css/Cart.module.css';
// import { GrClose } from 'react-icons/gr'
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import wishBg from '../img/wishBg.jpg'

function WishList(item) {

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.wishListReducers)
    const reducerData = useSelector(state => state.bucketReducer)

    const selector = useSelector(state => state.wishListReducers)

  
    cardData.map((item)=>{
        item.total = Number(item.price) * item.quantity
        console.log(item.total)
    })

    
    return (
        <>
        <div className={styled.cartTop} style={{backgroundImage: `url(${wishBg})`,backgroundPosition: '50% 100%'}}>
            <h2>Sevimlilər</h2>
        </div>
        <div className={selector.length != 0 ? styles.table : styles.none}>
            <table>
                <thead id='table'>
                    <tr>
                        <th>Məhsul</th>
                        <th>Qiymət</th>
                        <th>Stok haqqında</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                {
                    cardData.map((item)=>(
                        <tr key={item.id}>
                            <td>
                                <div>
                                    <img src={item.img}/>
                                    <h3>{item.text}</h3>
                                </div>
                            </td>
                            <td><span className={styles.price}>{item.price} azn</span></td>
                            <td><p>Stokda var</p></td>
                            <td><Link to='/cart'><button className={styles.btn} onClick={()=>dispatch({
                                type: 'ELAVE_ET',
                                payload: item
                            })}><FaCartPlus/>SATIN AL</button></Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <div className={selector.length == 0 ? styled.emptyCart : styles.none}>
                <FiHeart/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </>
    )
}

export default WishList;
