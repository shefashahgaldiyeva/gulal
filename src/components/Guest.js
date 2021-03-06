import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import styles from '../css/Guest.module.css'
import styled from '../css/TotalInCart.module.css'
import TotalInCart from './TotalInCart'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { HiOutlineRefresh } from 'react-icons/hi'
import { saleAsync } from '../redux/reducers/setterReducer/sale/sale.thunk';
import AuthStore from '../services/AuthStore';
import GuestStore from '../services/GuestStore';
import MapWithASearchBox from './Map';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getCartProducts } from '../redux/reducers/getterReducer/shoppingCart/shoppingCart.thunk';
import { guestGetCartAsync } from '../redux/reducers/getterReducer/guestShoppingCart/guestGetShoppingCart.thunk';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    ['@media (max-width:426px)']: {
        width: 273
      }
  };

function Guest(props) {

    // console.log(props.props)

    const dispatch = useDispatch();
    const [dateValue, setDateValue] = React.useState(new Date());
    // const cardData = useSelector(state => state.bucketReducer)
    
    //     let subTotal = 0;
    //     cardData.map(item=>{
    //         subTotal += item.total
    //     })

    // const [total, setTotal] = useState(0)

    // const shippingClick = () => {
    //     let val = document.querySelector('input[name="shipping"]:checked').value;
    //     console.log(val)
    //     // let totall = subTotal + Number(val);
    //     // setTotal(totall)
    //     // console.log(totall)
    //     // return totall
    // }

    
    AuthStore.getToken()
    GuestStore.getGuestToken()
    const {isLoading,users,userErrorMessage} = useSelector(state => state.users)
    const {isLoadingGuest,guestAssignedToken,guestErrorMessage} = useSelector(state => state.guestSetTokenReducer)
    const [userType, setUserType] = useState()
    const [tokenType, setTokenType] = useState()
    function handleSale(e){
        console.log(dateValue)
        const fullname = document.getElementById('fullname')
        const phone = document.getElementById('phone')
        const recipient_fullname = document.getElementById('recipient_fullname')
        const recipient_phone = document.getElementById('recipient_phone')
        const location = document.getElementById('location')
        const delivery_datetime = document.getElementById('delivery_datetime')
        const note = document.getElementById('note')
        if(!isLoading && users && guestAssignedToken){
            setUserType('user')
        }else if(!users && !isLoadingGuest && guestAssignedToken){
            setUserType('guest')
        }
        var dateTime = new Date(dateValue);
        let options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            second : 'numeric',
            hour12: false
        }
        console.log(dateTime.toLocaleDateString('sv-SE',options))
        const article = {
            fullname: fullname.value,
            phone: phone.value,
            recipient_fullname: recipient_fullname.value,
            recipient_phone: recipient_phone.value,
            location: location.value,
            delivery_datetime: '2021-12-20 12:53:17',
            date: '2012-12-12',
            // '2021-12-20 12:53:17' ---------- 994(70)-777-77-77
            note: note.value,
            latitude: lat,
            longitude: lng,
            email: 'shefa@gmail.com'
        }
        if(!isLoadingGuest && guestAssignedToken){
            article.token = GuestStore.appState
        }
        console.log(article)
        dispatch(saleAsync(article))
    }
    // const {setingSale,setedSale,saleErrorMessage} = 
    //    useSelector(state => console.log(state.saleReducer))

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [mapFare,setMapFare] = useState(0);
    const [lat,setLat] = useState(null);
    const [lng,setLng] = useState(null);
    function handleCallback(lat,lng){
        setLat(lat)
        setLng(lng)
    }
    const [destAdress,setDestAdress] = useState('Adres daxil et');
    const [titleAdress,setTitleAdress] = useState();
    function handleCallbackForDest(childData){
        setDestAdress(childData)
        setTitleAdress(childData)
    }
  useEffect(()=>{
    if(destAdress){
        if (destAdress.length > 15) {
            setDestAdress(destAdress.substring(0, 15)+'...')
        }
    }
  },[destAdress])

    const {settingOrigin,setOrigin,originError} = useSelector((state)=> state.setOriginReducer)
    useEffect(()=>{
        if(!settingOrigin && setOrigin){
            console.log(setOrigin)
            setMapFare(setOrigin.toFixed(2))
        }
    },[setOrigin])

    const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
	const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)

    useEffect(() => {
        if(!isLoading && users){
            dispatch(getCartProducts());
        }
      }, []);
    useEffect(() => {
        if(GuestStore.appState){
          dispatch(guestGetCartAsync({
            guestToken: GuestStore.appState
          }))
        }
    }, [])

    const [total, setTotal] = useState(0)
	useEffect(() => {
		if(!gettingGuestCart && guestCart.data){
            console.log('guestCart=======>',guestCart)
            let sum = 0;
            guestCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		}
		if(!gettingProductInCart && productInCart.data){
            console.log('productInCart =====>',productInCart)
            let sum = 0;
            productInCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		} 
	}, [productInCart,guestCart])

    // const [origin,setOrigin] = useState([])
    // useEffect(()=>{
    //     if(!gettingProductInCart && productInCart){
    //         productInCart.data.map((item)=>{
    //             // let array = {lat: item.latitude,lng: item.longitude}
    //             // origin.push(array)
    //             // origin.push([`Number(${item.latitude}/${item.longitude})`])
    //             origin.push([item.latitude + `/` + item.longitude])
    //         })
    //     }
    // },[])
    // console.log('origin ==>',origin)

    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Sifari????i m??lumatlar??</h2>
                    <input required id='fullname' type='text' placeholder='Sifari????inin Ad v?? Soyad??...'/>
                    <input required id='phone' type='tel' placeholder='Mobil Telefon...'/>
                    <input required id='recipient_fullname' type='text' placeholder='??atd??r??lacaq ????xsin Ad v?? Soyad??...'/>
                    <input required id='recipient_phone' type='tel' placeholder='??atd??r??lacaq ????xsin Mobil Telefonu...'/>
                    <input required id='location' type='text' placeholder='??nvan...'/>
                    {/* <input required type='text' placeholder='??atd??r??lacaq g??n v?? saat...'/> */}
                    <div className={styles.date}>
                        <LocalizationProvider className={styles.LocalProvider} dateAdapter={AdapterDateFns}>
                        <DateTimePicker  
                            className={styles.DatePicker}
                            renderInput={(props) => <TextField {...props} />}
                            label="??atd??r??lacaq g??n v?? saat"
                            id='delivery_datetime'
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </div>
                    <textarea id='note' type='text' placeholder='Qeyd...'/>
                </div>
                <div className={styles.right}>
                    {/* <TotalInCart className={styles.total}/> */}
                    <div className={styles.total}>
                    <div className={styled.totalGuest}>
                        <div className={styled.subTotal}>
                            <h3>Toplam</h3>
                            <div className={styled.sum}>
                                <span>??mumi c??m:</span>
                                <span>{total} azn</span>
                            </div>
                            <form style={mapFare ? {display: 'block'} : {display: 'none'}}>
                                <p>??atd??r??lma qiym??ti:</p>
                                {/* <div className={styled.shipping}>
                                    <label htmlFor='free'>
                                        <input tabindex="0" checked="checked" onChange={shippingClick} id='free' name='shipping' value={0} type='radio'/>&nbsp;
                                        Ma??azadan al????:
                                    </label>
                                    <span>0.00 azn</span>
                                </div> */}
                                <div className={styled.shipping}>
                                    {/* <label htmlFor='standart'>
                                        <input tabindex="0" onChange={shippingClick} id='standart' name='shipping' value={5} type='radio'/>&nbsp;
                                        Standard ??atd??r??lma:
                                    </label> */}
                                    <span>{mapFare} azn</span>
                                </div>
                                {/* <div className={styled.shipping}>
                                    <label htmlFor='express'>
                                        <input tabindex="0" onChange={shippingClick} id='express' name='shipping' value={10} type='radio'/>&nbsp;
                                        Express:
                                    </label>
                                    <span>10.00 azn</span>
                                </div> */}
                            </form>
                            <div className={styled.adres}>
                                <h2>B??lg??ni se??in:</h2>
                                <Button 
                                    id={'btn'}
                                    onClick={handleOpen}
                                    title={titleAdress}
                                    >{destAdress}</Button>
                                <Modal
                                 aria-labelledby="transition-modal-title"
                                 aria-describedby="transition-modal-description"
                                 open={open}
                                 onClose={handleClose}
                                 closeAfterTransition
                                 BackdropComponent={Backdrop}
                                 BackdropProps={{
                                    timeout: 600 
                                 }}
                                 style={{ zIndex: '999' }}
                                 >
                                    <Fade in={open}>
                                        <Box sx={style}>
                                            <div>
                                                <MapWithASearchBox 
                                                    parentCallback={(lat,lng)=>handleCallback(lat,lng)}
                                                    parentCallbackForDest={(childData)=>handleCallbackForDest(childData)}
                                                    sellerLocation={origin}
                                                    style={{ zIndex: '1000' }}
                                                    store={props.props}
                                                />
                                            </div>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </div>
                            <div className={styled.totalSpan}>
                                <span>Toplam:</span>
                                <span>{(eval((parseFloat(mapFare) + parseFloat(total)))).toFixed(2)} azn</span>
                            </div>
                            <Link className={styled.btn} to='/Sifari??-et' onClick={()=>handleSale()}>SIFAR???? ET </Link>
                        </div>
                        <div>
                        <Link className={styled.continue} to='/'>
                            ALI?? VER?????? DAVAM ET
                            <HiOutlineRefresh/>
                        </Link>
                        </div>
                    </div>
                    <div className={styled.bgColor}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guest;
