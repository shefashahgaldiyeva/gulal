import React,{useState,useEffect} from 'react'
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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

function Guest() {

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
        }
        if(!isLoadingGuest && guestAssignedToken){
            article.token = GuestStore.appState
        }
        console.log(article)
        dispatch(saleAsync(article))
    }
    // const {setingSale,setedSale,saleErrorMessage} = 
       useSelector(state => console.log(state.saleReducer))

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [mapFare,setMapFare] = useState(0);
    function handleCallback(childData){
        setMapFare(childData)
        console.log('FARE=>',mapFare)
    }

    const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
	const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)

    const [total, setTotal] = useState(0)
	useEffect(() => {
		if(!gettingGuestCart && guestCart.data){
            let sum = 0;
            guestCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		}
		if(!gettingProductInCart && productInCart){
            let sum = 0;
            productInCart.data.map((item)=>{
                sum = sum + item.totalPrice
                setTotal(sum.toFixed(2))
            })
		} 
	}, [productInCart,guestCart])

    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Sifarişçi məlumatları</h2>
                    <input required id='fullname' type='text' placeholder='Sifarişçinin Ad və Soyadı...'/>
                    <input required id='phone' type='tel' placeholder='Mobil Telefon...'/>
                    <input required id='recipient_fullname' type='text' placeholder='Çatdırılacaq Şəxsin Ad və Soyadı...'/>
                    <input required id='recipient_phone' type='tel' placeholder='Çatdırılacaq Şəxsin Mobil Telefonu...'/>
                    <input required id='location' type='text' placeholder='Ünvan...'/>
                    {/* <input required type='text' placeholder='Çatdırılacaq gün və saat...'/> */}
                    <div className={styles.date}>
                        <LocalizationProvider className={styles.LocalProvider} dateAdapter={AdapterDateFns}>
                        <DateTimePicker  
                            className={styles.DatePicker}
                            renderInput={(props) => <TextField {...props} />}
                            label="Çatdırılacaq gün və saat"
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
                    <div className={styled.totalInSale}>
                        <div className={styled.subTotal}>
                            <h3>Toplam</h3>
                            <div className={styled.sum}>
                                <span>Ümumi cəm:</span>
                                <span>{total} azn</span>
                            </div>
                            <form style={mapFare ? {display: 'block'} : {display: 'none'}}>
                                <p>Çatdırılma qiyməti:</p>
                                {/* <div className={styled.shipping}>
                                    <label for='free'>
                                        <input tabindex="0" checked="checked" onChange={shippingClick} id='free' name='shipping' value={0} type='radio'/>&nbsp;
                                        Mağazadan alış:
                                    </label>
                                    <span>0.00 azn</span>
                                </div> */}
                                <div className={styled.shipping}>
                                    {/* <label for='standart'>
                                        <input tabindex="0" onChange={shippingClick} id='standart' name='shipping' value={5} type='radio'/>&nbsp;
                                        Standard çatdırılma:
                                    </label> */}
                                    <span>{mapFare} azn</span>
                                </div>
                                {/* <div className={styled.shipping}>
                                    <label for='express'>
                                        <input tabindex="0" onChange={shippingClick} id='express' name='shipping' value={10} type='radio'/>&nbsp;
                                        Express:
                                    </label>
                                    <span>10.00 azn</span>
                                </div> */}
                            </form>
                            <div className={styled.adres}>
                                <h2>Bölgəni seçin:</h2>
                                <Button onClick={handleOpen}>Adres daxil et</Button>
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
                                                <MapWithASearchBox parentCallback={(childData)=>handleCallback(childData)} data={mapFare} style={{ zIndex: '1000' }}/>
                                            </div>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </div>
                            <div className={styled.totalSpan}>
                                <span>Toplam:</span>
                                <span>{eval((parseFloat(mapFare) + parseFloat(total)))}</span>
                            </div>
                            <Link className={styled.btn} to='/Sifariş-et' onClick={()=>handleSale()}>SIFARİŞ ET </Link>
                        </div>
                        <div>
                        <Link className={styled.continue} to='/'>
                            ALIŞ VERİŞƏ DAVAM ET
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
