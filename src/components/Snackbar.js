import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {

    const [openSnack, setOpenSnack] = useState(false);
    const {addingToCart,addedToCart,addedErrorMessage} = useSelector(state => state.setAddToCart)
	const {addingCartForGuest,addedCartForGuest,errorMessageForGuest} = useSelector(state => state.guestAddToCartReducer)
	const {isLoadingLogin,logging,errorMessageLogin} = useSelector(state=>state.loginReducer)

    const count = useSelector(state=>state.productIdForSnackReducer)

    const handleCloseSnack = () => {
        setOpenSnack(false);
    };

    const [snackContent,setSnackContent] = useState(null)

    useEffect(() => {
        if((!addingToCart && addedToCart) || (!addingCartForGuest && addedCartForGuest)){
            if(!openSnack){
                setSnackContent('Səbətə uğurla əlavə edildi!')
                setOpenSnack(true)
            }  
        }if(!isLoadingLogin && logging && logging.msg=='unsuccessfull'){
            if(!openSnack){
                setSnackContent('İstifadəçi yoxdur..')
                setOpenSnack(true)
            }  
        }
    }, [count.id])
  

    return (
        <Snackbar style={{position: 'fixed'}} open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                {snackContent}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar;
