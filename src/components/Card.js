import * as React from 'react';
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
import { loadAddToCartProductAsnync } from '../redux/reducers/products/products.thunks';
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import flower from '../img/flower.jpg'


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

  const [openSnack, setOpenSnack] = React.useState(false);
  const handleClickSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
    const handleOpenSnack = () => setOpenSnack(true);
//   const handleClose = () => setOpen(false);
    // const selectorAll = useSelector(state => state.allDataReducer)
    // selectorAll.map((item)=>{
    //         console.log(item.id)
    // })
    
   
    const dispatch = useDispatch();
  
    
    const bucket = useSelector(state => state.bucketReducer)
    const handleAdd = (item) =>{
        const addedItem = bucket.filter(index => index.id === item.id)
        if(addedItem.length !== 0){
            addedItem[0].quantity += 1
        }else{
            loadAddToCartProductAsnync({
                'uid': item.id,
                'pid': item.id
            })
            // dispatch({
            //     type: 'ELAVE_ET',
            //     payload: item 
            // })
        }
    }

    useSelector(state => console.log(state.cartReducer))
    const handleAddWishlist = (item) =>{
        dispatch({
            type: 'SEVIMLIYE_ELAVE_ET',
            payload: item 
        })
    }

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
        console.log(cardData.length)
            dispatch({
                type: 'ELAVE_ET',
                payload: item 
            })
    }
    const handleClose = () => setOpen(false);

    const cardData = useSelector(state => state.bucketReducer)

    // const handlePlus = (item) =>{
    //     const plusItem = cardData.filter(index => index.id == item.id)
    //     console.log(plusItem)
    //     if(plusItem){
    //         plusItem[0].quantity += 1
    //     }
    //     // item.quantity += 1
    //     // console.log(item.quantity)
    // }
    // const handleMinus = (item) =>{
    //     const minusItem = cardData.filter(index => index.id == item.id)
    //     console.log(minusItem)
    //     if(minusItem){
    //         minusItem[0].quantity -= 1
    //     }
    // }

    const handlePlus = (item) =>{
        console.log(item)
        dispatch({
            type: 'UPDATE_BUCKET_MINUS',
            payload: {
                id: item.id,
                quantity: 1
            }
        })
    }
    const handleMinus = (item) =>{
        dispatch({
            type: 'UPDATE_BUCKET_PLUS',
            payload: {
                id: item.id,
                quantity: 1
            }
        })
    }
    // cardData.map((item)=>{
    //     console.log(item.quantity)
    // })

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
                                BackdropProps={{
                                timeout: 600,
                                }}
                            >
                                <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-description" sx={{ mt: 20 }}>
                                        <div style={{width: '100%'}}><img className={styles.modalInImg} src={props.item.image} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.image}}/></div>
                                    </Typography>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <h3>{props.item.text}</h3>
                                        <span className={styles.price}>{props.item.price} azn</span>
                                        <p>{props.item.p}</p>
                                        <div className={styles.df}>
                                            <div className={styles.quantity}>
                                                {
                                                    cardData.map( item => (
                                                        <>
                                                        <button onClick={() => handleMinus(item)}>
                                                        -
                                                        </button>
                                                        {item.quantity} 
                                                        <button onClick={() => handlePlus(item)}>
                                                        +
                                                        </button>
                                                        </>
                                                    ))

                                                }
                                            </div>

                                            {/* <a href='javascript:void(0)'><button className={styled.btn} onClick={()=>dispatch({
                                                type: 'ELAVE_ET',
                                                payload: props.item
                                            })}><FaCartPlus/>SATIN AL</button></a> */}
                                              <a href='javascript:void(0)'><button className={styled.btn}><FaCartPlus/>SATIN AL</button></a>
                                       </div>
                                    </Typography>
                                </Box>
                                </Fade>
                            </Modal>
                        </div>
                        <Link onClick={()=>allFlowersAdd(props.item)} to={`/${props.item.id}`}><img src={props.item.image} onMouseOver={(a)=>{a.target.src = props.item.photo}} onMouseOut={(a)=>{a.target.src = props.item.photo}}/></Link>
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
                            {/* <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                                    This is a success message!
                                </Alert>
                            </Snackbar> */}
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
