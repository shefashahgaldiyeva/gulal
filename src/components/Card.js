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

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



function Card(props) { 
    // console.log(props)

  const [openSnack, setOpenSnack] = useState(false);
  const {addingToCart,addedToCart,addedErrorMessage} = useSelector(state => state.setAddToCart)
  const [countToCart,setCountToCart] = useState(false);
 
  const handleClickSnack = () => {
  };
  const handleCloseSnack = (event, reason) => {
    // if (reason === 'clickaway') { 
    //   return;
    // }
    if(openSnack===true){
        setOpenSnack(false);
        // setOpenSnack(null);
    }
  };
    const [itemQuantity, setitemQuantity] = useState(1)
    const dispatch = useDispatch();
    const {isLoading,users,userErrorMessage} = useSelector(state => state.users)
    
    const handleAdd = (item) =>{
        if(!isLoading && users){
            dispatch(addToCart({pid : item.id, quantity: itemQuantity}))
        }
        setCountToCart(countToCart=>countToCart+1)
    }
    useEffect(() => {
        if(!addingToCart && addedToCart){
            if(!openSnack){
                setOpenSnack(true)
            }  
        }
        console.log(openSnack)
    }, [countToCart])


        
        // useEffect(() => {
            // if(!addingToCart && addedToCart){
            //     setOpenSnack(!openSnack);
            //     console.log(`openSnack: ${openSnack}`)
            // }
        // }, [addedToCart])
    
    const handleAddWishlist = (item) =>{
        if(!isLoading && users){
            dispatch(addToWishlist({pid : item.id}))
       }
    }
// useSelector(state => console.log(state.addToWishlist))
    // if(!settingToWishlist && setedToWishlist){
    //     console.log(setedToWishlist)
    // }

    const allFlowersAdd = (item) =>{
        dispatch({
            type: 'GELEN_DATA',
            payload: item 
        })
        // console.log(index)
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = (item) => {
        setOpen(true);
        // if(quantityView != null){
        //     quantityView.data.map((index)=>{
        //         if(index.id == item.id){
        //             setitemQuantity(index.quantity)
        //             // console.log(index.quantity,index.id)
        //         }
        //     })
        // }
        console.log(item.id)
    }
    const handleClose = () => setOpen(false);

    const cardData = useSelector(state => state.bucketReducer)
    const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
    const [quantityView, setQuantityView] = useState(null)
   
    useEffect(() => {
        if(!gettingProductInCart && productInCart){
            setQuantityView(productInCart)
            // console.log(quantityView)
        }
    }, [productInCart])
    const {decrementingQuantityToCart,decrementedQuantityToCart,decrementedQuantityerrorMessage} = useSelector((state) => state.decrementQuantityReducer);
    const {incrementingQuantityToCart,incrementedQuantityToCart,incrementedQuantityerrorMessage} = useSelector((state) => state.incrementQuantityReducer);

    const [cartProducts, setCartProducts] = useState(null);

    useEffect(() => {
        dispatch(getCartProducts());
    }, []);
    useEffect(() => {
        if (!gettingProductInCart && productInCart) {
            setCartProducts(productInCart.data);
        }
    }, [productInCart]);

    const handlePlus = (e, id) => {
        setitemQuantity(itemQuantity+1)

      };
    const handleMinus = (e, id) => {
        setitemQuantity(itemQuantity-1)
        
  };

  function handleAddQuantity(item){
    console.log(item.id)

  }
//    if (!decrementingQuantityToCart && decrementedQuantityToCart) {
//         Array.from(document.getElementsByClassName("decrement")).map((item) => item.disabled = false);
//   }
//   if (!incrementingQuantityToCart && incrementedQuantityToCart) {
//         Array.from(document.getElementsByClassName("increment")).map((item) => item.disabled = false);
//   }

    // const {gettingProduct,products,productsErrorMessage} = useSelector((state) => state.getProducts)
    // if(!gettingProduct && products){
    //     if(!gettingProduct && products){
    //         console.log(products)
    //     }
    // }


    return (
        <div className={styles.shoppingCardWrapper}>
               <Snackbar className={styles.snackbar} style={{position: 'fixed'}} open={openSnack} autoHideDuration={60000} onClose={handleCloseSnack}>
                    <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                        Səbətə uğurla əlavə edildi!
                    </Alert>
                </Snackbar>
                    <div key={props.item.id} className={styles.ShoppingCard}>
                    <div className={styles.image}>
                        <div className={styles.view}>
                            <a href='javascript:void(0)' onClick={() => handleAddWishlist(props.item)}><span>sevimliyə əlavə et</span><FiHeart/></a>
                            <a onClick={()=>handleOpen(props.item)} href='javascript:void(0)' title='ön baxış'><FaRegEye/></a>
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
                                    <Typography id="transition-modal-description" sx={{ mt: 20 }}>
                                        <div style={{width: '100%'}}><img className={styles.modalInImg} src={props.item.image} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.image}}/></div>
                                    </Typography>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <h3>{props.item.name}</h3>
                                        <span className={styles.price}>{props.item.price} azn</span>
                                        <p>{props.item.p}</p>
                                        <div className={styles.df}>
                                            <div className={styles.quantity}>
                                               
                                                        <button className="decrement" onClick={(e) => handleMinus(e, 184)}>
                                                        -
                                                        </button>
                                                        <span>{itemQuantity}</span>
                                                        <button className="increment" onClick={(e) => handlePlus(e, 184)}>
                                                        +
                                                        </button>
                                                       
                                            </div>
                                            {/* <a href='javascript:void(0)'><button className={styled.btn} onClick={()=>dispatch({
                                                type: 'ELAVE_ET',
                                                payload: props.item
                                            })}><FaCartPlus/>SATIN AL</button></a> */}
                                              <a href='javascript:void(0)'><button onClick={()=>handleAdd(props.item)} className={styled.btn}><FaCartPlus/>SATIN AL</button></a>
                                       </div>
                                    </Typography>
                                </Box>
                                </Fade>
                            </Modal>
                        </div>
                        <Link onClick={()=>allFlowersAdd(props.item)} to={`/${props.item.id}`}><img src={props.item.photo} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.photo}}/></Link>
                    </div>
                    <div className={styles.bottom}>
                        {/* <div className={styles.category}><a href='#'>{props.item.category}</a></div> */}
                        <h3><a href='javascript:void(0)'>{props.item.name}</a></h3>
                        <span className={styles.price}>{props.item.price} azn</span>
                        <div>
                            {/* <div className={styles.stars}>stars</div> */}
                            <span className={styles.review}>({props.item.review} baxış)</span>
                        </div>
                        <div className={styles.btn}>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button variant="outlined" onClick={()=>handleClickSnack()}>
                                <a href='javascript:void(0)' onClick={() => handleAdd(props.item)}><span><BsCartPlus/></span>Satın al</a>
                            </Button>
                        </Stack>
                        </div>
                    </div>
            </div>
                        {/* <Snackbar style={{position: 'fixed'}} open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                                    Səbətə uğurla əlavə edildi!
                                </Alert>
                        </Snackbar> */}
        </div>
    )
}

export default Card;