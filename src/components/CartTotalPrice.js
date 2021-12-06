import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadIncrementAsync,
  loadQuantityAsync,
} from "../redux/reducers/products/products.thunks";
import { loadDecrementAsync } from "../redux/reducers/products/products.thunks";
import { getCartAsync } from "../redux/reducers/products/products.thunks";
import styles from "../css/ProductInCart.module.css";

function CartTotalPrice(props) {
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

    return (
        <div>
            {!getingQuantity && getDetail &&
                getDetail.data.map(item => item.product_id == props.id ? 
                    <p className={styles.total}>{item.totalPrice} azn</p> : null
                )}
        </div>
    );
}

export default CartTotalPrice;