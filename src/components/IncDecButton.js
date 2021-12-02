import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadIncrementAsync } from '../redux/reducers/products/products.thunks'
import { loadDecrementAsync } from '../redux/reducers/products/products.thunks'
import { getCartAsync } from '../redux/reducers/products/products.thunks'

function IncDecButton(props) {

    const dispatch = useDispatch()
    const {getingCartProduct, getCartProduct, getCardErrorMessage} = useSelector(state => state.getCartReducer)
    console.log(getCartProduct)
      
    if(getCartProduct){
        console.log(getCartProduct.data)
    }

    const handlePlus = (id) =>{
        dispatch(loadIncrementAsync({
            'pid': id
        }))
        dispatch(getCartAsync())
    }
    const handleMinus = (id) =>{
        dispatch(loadDecrementAsync({
            'pid': id
        }))
        dispatch(getCartAsync())
    }
    return (
            <div>
                <button onClick={() => handleMinus(props.id)}>
                    -
                </button>{props.quantity && props.quantity}
                <button onClick={() => handlePlus(props.id)}>
                    +
                </button>
            </div>
    )
    }

export default IncDecButton;
