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
    const count = useSelector(state=>state.productIdForSnackReducer)

    const handleCloseSnack = () => {
        setOpenSnack(false);
    };

    useEffect(() => {
        if(!addingToCart && addedToCart){
            if(!openSnack){
                setOpenSnack(true)
            }  
        }
    }, [count.id])
  

    return (
        <Snackbar style={{position: 'fixed'}} open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                Səbətə uğurla əlavə edildi!
            </Alert>
        </Snackbar>
    )
}

export default SnackBar;
