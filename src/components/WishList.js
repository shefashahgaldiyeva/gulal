import React,{ useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import  styles  from '../css/WishList.module.css';
import  styled  from '../css/Cart.module.css';
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { GrClose } from "react-icons/gr";
import wishBg from '../img/wishBg.jpg'
import {getWishlistProducts} from '../redux/reducers/getterReducer/getWishlist/getWishlist.thunk';
import { addToCart } from '../redux/reducers/setterReducer/addToCartProduct/addToCart.thunk'
import { deleteWishlistProduct } from '../redux/reducers/setterReducer/deleteWishlistProduct/deleteWishlistProduct.thunk'
import AuthStore from '../services/AuthStore';
import GuestStore from '../services/GuestStore';
import { guestAddToCartAsync } from '../redux/reducers/setterReducer/guestAddToCart/guestAddToCart.thunk';
import { guestSetTokenAsync } from '../redux/reducers/setterReducer/guestSetToken/guestSetToken.thunk';

function WishList() {

    const dispatch = useDispatch();
    const { gettingProductInWishlist,productInWishlist,errorMessage } = useSelector(state => state.getWishlist)
    const { isLoading,users,usersErrorMessage} = useSelector(state=>state.users)
    const { addingToCart, addedToCart, addedErrorMessage } = useSelector(state => state.setAddToCart)
    
    useSelector(state => console.log(state.getWishlist))

    if(!addingToCart && addedToCart){
        console.log(addedToCart)
    }

    useEffect(() => {
        if(!isLoading && users){
            dispatch(getWishlistProducts());
        }
    }, [])

    useEffect(() => {
        if(!gettingProductInWishlist && productInWishlist){
            setWishlistProducts(productInWishlist.data)
        }
    }, [productInWishlist])

    // function handleAdd(item){
    //     if(!isLoading && users){
    //         dispatch(addToCart({pid : item.id, count : 1}))
    //         // console.log(item)
    //     }
    // }

    const {isLoadingGuest,guestAssignedToken,guestErrorMessage} = useSelector(state => state.guestSetTokenReducer)

    const handleAdd = (item) =>{
        // if(!AuthStore.appState && !GuestStore.appState){
        //     dispatch(guestSetTokenAsync())
        //     if(!isLoadingGuest && guestAssignedToken){
        //         console.log(guestAssignedToken)
        //         GuestStore.saveGuestToken(guestAssignedToken.guestToken)
        //     }
        // }
        if(!isLoading && users){
            dispatch(addToCart({pid : item.id, count: 1}))
        }
        else if(!users && !isLoadingGuest && guestAssignedToken){
            dispatch(guestAddToCartAsync({product_id : item.id, quantity: 1, guestToken: GuestStore.appState}))
        }
        dispatch({
            type: 'SET_COUNT',
            payload : item
        })
    }
    const [wishlistProducts, setWishlistProducts] = useState(null)
    function handleDelete(id){
        setWishlistProducts(
            wishlistProducts.filter(
                item => item.id !== id
            )
        )
        dispatch(deleteWishlistProduct({pid: id}))
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
                {wishlistProducts &&
                    wishlistProducts.map((item)=>(
                        <tr key={item.id}>
                            <td>
                                <div>
                                    <img src={item.photo}/>
                                    <h3>{item.productName}</h3>
                                </div>
                            </td>
                            {/* <td><span className={styles.price}>{item.price} azn</span></td> */}
                            <td><span className={styles.price}><del className={item.price == item.currentPrice ? styles.display : styles.delPrice}>{item.price}azn &nbsp;  /</del> {item.currentPrice}azn</span></td>
                            <td className={styles.tdP}><p>Stokda var</p></td>
                            <td>
                                <Link to='/Sebet'><button className={styles.btn} onClick={()=>handleAdd(item)}><FaCartPlus/>SATIN AL</button></Link>
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
