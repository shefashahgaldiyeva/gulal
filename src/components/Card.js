import React,{ useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  styled  from '../css/WishList.module.css';
import  styles from '../css/Card.module.css'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import flower from '../img/flower.jpg'
import { addToCart } from '../redux/reducers/setterReducer/addToCartProduct/addToCart.thunk';
import { addToWishlist } from '../redux/reducers/setterReducer/addToWishlistProduct/addToWishlist.thunk'
import { getCartProducts } from "../redux/reducers/getterReducer/shoppingCart/shoppingCart.thunk";
import { decrementQuantityToCart } from "../redux/reducers/setterReducer/cartDecrementQuantity/decrementQuantity.thunk";
import { incrementQuantityToCart } from "../redux/reducers/setterReducer/cartIncrementQuantity/incrementQuantity.thunk";
import { guestAddToCartAsync } from '../redux/reducers/setterReducer/guestAddToCart/guestAddToCart.thunk';
import GuestStore from '../services/GuestStore';
import AuthStore from '../services/AuthStore';
import { guestSetTokenAsync } from '../redux/reducers/setterReducer/guestSetToken/guestSetToken.thunk';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 25,
    outline: 'none',
    p: 4,
    display: 'flex',
    justifyContent: 'space-evenly'
};


function Card(props) { 

    // const {addingToCart,addedToCart,addedErrorMessage} = useSelector(state => state.setAddToCart) 
    // if(!addingToCart && addedToCart){
    //     console.log('addedToCart: ' + addedToCart)
    // }
    const [itemQuantity, setitemQuantity] = useState(1)
    const dispatch = useDispatch();
    const {isLoading,users,userErrorMessage} = useSelector(state => state.users)
    const {isLoadingGuest,guestAssignedToken,guestErrorMessage} = useSelector(state => state.guestSetTokenReducer)
    // if(!isLoadingGuest && guestAssignedToken){
    //     console.log(guestAssignedToken)
    // }

    AuthStore.getToken();
    GuestStore.getGuestToken()
    // console.log(GuestStore.appState)
    const handleAdd = (item) =>{
        if(!AuthStore.appState && !GuestStore.appState){
            dispatch(guestSetTokenAsync())
            if(!isLoadingGuest && guestAssignedToken){
                console.log(guestAssignedToken)
                GuestStore.saveGuestToken(guestAssignedToken.guestToken)
            }
        }
        if(!users && !isLoadingGuest && guestAssignedToken){
            console.log(itemQuantity)
            dispatch(guestAddToCartAsync({product_id : item.id, quantity: itemQuantity, guestToken: GuestStore.appState}))
        }
        else if(!isLoading && users){
            console.log(itemQuantity)
            dispatch(addToCart({pid : item.id, count: itemQuantity}))
        }
        dispatch({
            type: 'SET_COUNT',
            payload : item
        })
    }
    const {addingCartForGuest,addedCartForGuest,errorMessageForGuest} = useSelector(state => state.guestAddToCartReducer)
    if(!addingCartForGuest && addedCartForGuest){
        console.log(addedCartForGuest)
    }

   
    const {addingToWishlist,addedToWishlist,addedErrorMessage} = useSelector(state=>state.addToWishlist)
    const [heartColor,setHeartColor] = useState()
    const handleAddWishlist = (item) =>{
        if(!isLoading && users){
            dispatch(addToWishlist({pid : item.id}))
        }
        setHeartColor(!heartColor)
        console.log(item)
    }
    // useEffect(()=>{
    //     if(!addingToWishlist && addedToWishlist){
    //         console.log(addedToWishlist.data.operation)
    //         if(addedToWishlist.data.operation){
    //             console.log('users wishlist added')
    //        }
    //    }
    // },[])

    const [open, setOpen] = useState(false);
    const handleOpen = (item) => {
        setOpen(true);
        // console.log(item.id)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(!isLoading && users){
            dispatch(getCartProducts());
        }
    }, []);

    const handlePlus = () => {
        setitemQuantity(itemQuantity+1)
        console.log(itemQuantity)
      };
    const handleMinus = () => {
        setitemQuantity(itemQuantity-1)
        console.log(itemQuantity)
    };

   
    return (
        <div id='card' className={styles.shoppingCardWrapper}>
                    <div key={props.item.id} className={styles.ShoppingCard}>
                    <div className={styles.image}>
                        <div className={styles.view}>
                            <a style={ heartColor ? { backgroundColor:'#e4dad7', color: 'white' } : null } onClick={() => handleAddWishlist(props.item)}><span>sevimliyə əlavə et</span><FiHeart/></a>
                            {/* <a href='javascript:void(0)' onClick={() => handleAddWishlist(props.item)}><span>sevimliyə əlavə et</span><FiHeart/></a> */}
                            <a onClick={()=>handleOpen(props.item)} title='ön baxış'><FaRegEye/></a>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{timeout: 600}}
                            >
                                <Fade in={open}>
                                <Box sx={style}>
                                    <Typography style={{width: '50%'}}  id="transition-modal-description" sx={{ mt: 20 }}>
                                        <div style={{width: '100%'}}><img className={styles.modalInImg} src={props.item.photo} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.photo}}/></div>
                                    </Typography>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <h3>{props.item.name}</h3>
                                        <span className={styles.price}>{props.item.price} azn</span>
                                        <p>{props.item.p}</p>
                                        <div className={styles.df}>
                                            <div className={styles.quantity}>
                                                <button className="decrement" onClick={() => handleMinus()}>
                                                    -
                                                </button>
                                                <span>{itemQuantity}</span>
                                                <button className="increment" onClick={() => handlePlus()}>
                                                    +
                                                </button>
                                            </div>
                                            {/* <a href='javascript:void(0)'><button className={styled.btn} onClick={()=>dispatch({
                                                type: 'ELAVE_ET',
                                                payload: props.item
                                            })}><FaCartPlus/>SATIN AL</button></a> */}
                                              <a><button onClick={()=>handleAdd(props.item)} className={styled.btn}><FaCartPlus/>SATIN AL</button></a>
                                       </div>
                                    </Typography>
                                </Box>
                                </Fade>
                            </Modal>
                        </div>
                        <Link to={`/product/${props.item.slug}/${props.item.id}`}><img src={props.item.photo} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.photo}}/></Link>
                    </div>
                    <div className={styles.bottom}>
                        {/* <div className={styles.category}><a href='#'>{props.item.category}</a></div> */}
                        <h3><a>{props.item.name}</a></h3>
                        <span className={styles.price}>{props.item.price} azn</span>
                        <div>
                            {/* <div className={styles.stars}>stars</div> */}
                            <span className={styles.review}>({props.item.review} baxış)</span>
                        </div>
                        <div className={styles.btn}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button variant="outlined">
                                <a onClick={() => handleAdd(props.item)}><span><BsCartPlus/></span>Satın al</a>
                            </Button>
                        </Stack>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Card;