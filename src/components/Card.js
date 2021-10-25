import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  styled  from '../css/WishList.module.css';
import  styles from '../css/Card.module.css'
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

function Card(props) { 
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
            dispatch({
                type: 'ELAVE_ET',
                payload: item 
            })
        }
        
    }
    const handleAddWishlist = (item) =>{
        dispatch({
            type: 'SEVIMLIYE_ELAVE_ET',
            payload: item 
        })
    }

    const allFlowersAdd = (index) =>{
        dispatch({
            type: 'GELEN_DATA',
            payload: index 
        })
        // console.log(index)
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const cardData = useSelector(state => state.bucketReducer)

    const handlePlus = (item) =>{
        const plusItem = cardData.filter(index => index.id == item.id)
        console.log(plusItem)
        if(plusItem){
            plusItem[0].quantity += 1
        }
        // item.quantity += 1
        // console.log(item.quantity)
    }
    const handleMinus = (item) =>{
        const minusItem = cardData.filter(index => index.id == item.id)
        console.log(minusItem)
        if(minusItem){
            minusItem[0].quantity -= 1
        }
    }

    return (
        <div className={styles.shoppingCardWrapper}>
            {/* {
                selectorAll.map((item)=>{ */}
                    <div key={props.item.id} className={styles.ShoppingCard}>
                    <div className={styles.image}>
                        <div className={styles.view}>
                            <a href='javascript:void(0)' onClick={() => handleAddWishlist(props.item)}><span>sevimliyə əlavə et</span><FiHeart/></a>
                            {/* <a href='javascript:void(0)'><span>sevimliyə əlavə et</span><FiHeart/></a> */}
                            {/* <Link to={`/${item.id}`} title='quick view'><FaRegEye/></Link> */}
                            <a onClick={handleOpen} href='javascript:void(0)' title='quick view'><FaRegEye/></a>
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
                                        <div style={{width: '100%'}}><img  style={{width: '100%'}} src={props.item.img} onMouseOver={(a)=>{a.target.src = props.item.img2}} onMouseOut={(a)=>{a.target.src = props.item.img}}/></div>
                                    </Typography>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        <h3>{props.item.text}</h3>
                                        <span className={styles.price}>{props.item.price} azn</span>
                                        <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                                       <div className={styles.df}>
                                            <div className={styles.quantity}>
                                                <button onClick={() => handleMinus(props.item.quantity)}>
                                                    -
                                                </button>
                                                {props.item.quantity && props.item.quantity}
                                                <button onClick={() => handlePlus(props.item.quantity)}>
                                                    +
                                                </button>
                                            </div>
                                            <Link to='/cart'><button className={styled.btn} onClick={()=>dispatch({
                                                type: 'ELAVE_ET',
                                                payload: props.item
                                            })}><FaCartPlus/>SATIN AL</button></Link>
                                       </div>
                                    </Typography>
                                </Box>
                                </Fade>
                            </Modal>
                        </div>
                        <Link onClick={()=>allFlowersAdd(props.item)} to={`/${props.item.id}`}><img src={props.item.img} onMouseOver={(a)=>{a.target.src = props.item.img2}} onMouseOut={(a)=>{a.target.src = props.item.img}}/></Link>
                    </div>
                    <div className={styles.bottom}>
                        {/* <div className={styles.category}><a href='#'>{props.item.category}</a></div> */}
                        <h3><a href='javascript:void(0)'>{props.item.text}</a></h3>
                        <span className={styles.price}>{props.item.price} azn</span>
                        <div>
                            {/* <div className={styles.stars}>stars</div> */}
                            <span className={styles.review}>({props.item.review} baxış)</span>
                        </div>
                        <div className={styles.btn}>
                            <a href='javascript:void(0)' onClick={() => handleAdd(props.item)}><span><BsCartPlus/></span>Satın al</a>
                            {/* <a href='#'><span><BsCartPlus/></span>Satin al</a> */}
                        </div>
                    </div>
            </div>
                {/* })
            } */}
            
        </div>
    )
}

export default Card;
