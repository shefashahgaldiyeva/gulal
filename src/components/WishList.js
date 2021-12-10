import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import  styles  from '../css/WishList.module.css';
import  styled  from '../css/Cart.module.css';
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { GrClose } from "react-icons/gr";
import wishBg from '../img/wishBg.jpg'
import {getWishlistProducts} from '../redux/reducers/getterReducer/getWishlist/getWishlist.thunk';

function WishList() {

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.wishListReducers)
    const reducerData = useSelector(state => state.bucketReducer)

    const selector = useSelector(state => state.wishListReducers)

    // cardData.map((item)=>{
    //     item.total = Number(item.price) * item.quantity
    //     console.log(item.total)
    // })

    
    useEffect(() => {
        dispatch(getWishlistProducts());
    }, []);
    const { gettingProductInWishlist,productInWishlist,errorMessage} = useSelector(state=>state.getWishlist)

    const [cartProducts, setCartProducts] = useState(null);
    function handleDelete(id) {
        // dispatch(deleteCartProduct({ pid: id}))
        // setCartProducts((cartProducts) =>
        //     cartProducts.filter(
        //         (item) => item.id !== id)
        // );
      }
    
    return (
        <>
        <div className={styled.cartTop} style={{backgroundImage: `url(${wishBg})`,backgroundPosition: '50% 100%'}}>
            <h2>Sevimlilər</h2>
        </div>
        <div className={!gettingProductInWishlist && productInWishlist ? styles.table : styles.none}>
            <table className={styles.table}>
                <thead id='table'>
                    <tr>
                        <th>Məhsul</th>
                        <th>Qiymət</th>
                        <th>Stok</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                {!gettingProductInWishlist &&  productInWishlist &&
                    productInWishlist.data.map((item)=>(
                        <tr key={item.id}>
                            <td>
                                <div>
                                    <img src={item.photo}/>
                                    <h3>{item.productName}</h3>
                                </div>
                            </td>
                            <td><span className={styles.price}>{item.price} azn</span></td>
                            <td className={styles.tdP}><p>Stokda var</p></td>
                            <td>
                                <Link to='/cart'><button className={styles.btn} onClick={()=>dispatch({
                                    type: 'ELAVE_ET',
                                    payload: item
                                })}><FaCartPlus/>SATIN AL</button></Link>
                            </td>
                            <td >
                                <button className={styles.btn,'removeCart'} onClick={() => handleDelete(item.id)} >
                                    <GrClose />
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <div className={gettingProductInWishlist && !productInWishlist ? styled.emptyCart : styles.none}>
                <FiHeart/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </>
    )
}

export default WishList;
