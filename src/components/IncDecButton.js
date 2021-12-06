import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    loadIncrementAsync,
    loadQuantityAsync,
    loadDecrementAsync
  } from "../redux/reducers/products/products.thunks";
import { getCartAsync } from '../redux/reducers/products/products.thunks'

function IncDecButton(props) {

    const dispatch = useDispatch();
    const { getingQuantity, getDetail, getQuantityErrorMessage } = useSelector(
      (state) => state.quantityReducer
    ); 
    if(!getingQuantity && getDetail){
        console.log(getDetail)
    }
    useEffect(() => {
      dispatch(loadQuantityAsync());
    }, [props.id]);
    const handlePlus = (id) => {
      dispatch(
        loadIncrementAsync({
          pid: id,
        })
      );
       dispatch(loadQuantityAsync());
    };
    const handleMinus = (id) => {
      dispatch(
        loadDecrementAsync({
          pid: id,
        })
      );
      dispatch(loadQuantityAsync());
    };

return (
    <div>
        <button onClick={() => handleMinus(props.id)}>-</button>
        {!getingQuantity && getDetail &&
            getDetail.data.map(item => item.product_id == props.id ? 
               item.quantity : null
        )}
        <button onClick={() => handlePlus(props.id)}>+</button>
    </div>
  );
}

export default IncDecButton;
