import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../css/ProductInCart.module.css";
import { GrClose } from "react-icons/gr";
import {
  loadIncrementAsync,
  loadQuantityAsync,
  loadDecrementAsync,
} from "../redux/reducers/products/products.thunks";
import { getCartAsync } from "../redux/reducers/products/products.thunks";
import { loadCartDeleteAsync } from "../redux/reducers/products/products.thunks";
import IncDecButton from "./IncDecButton";
import CartTotalPrice from "./CartTotalPrice";
import { getCartProducts } from "../redux/reducers/getterReducer/shoppingCart/shoppingCart.thunk";
import { decrementQuantityToCart } from "../redux/reducers/setterReducer/cartDecrementQuantity/decrementQuantity.thunk";
import { incrementQuantityToCart } from "../redux/reducers/setterReducer/cartIncrementQuantity/incrementQuantity.thunk";
import { deleteCartProduct } from "../redux/reducers/setterReducer/deleteCartProduct/deleteCartProduct.thunk";

const ProductInCart = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppinCartProducts);
=======
  const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
>>>>>>> master
  const {decrementingQuantityToCart,decrementedQuantityToCart,decrementedQuantityerrorMessage} = useSelector((state) => state.decrementQuantityReducer);
  const {incrementingQuantityToCart,incrementedQuantityToCart,incrementedQuantityerrorMessage} = useSelector((state) => state.incrementQuantityReducer);
  const {deletingCartProduct,deletedCartProduct,deletedErrorMessage} = useSelector((state) => state.deleteCartProductReducer);
  
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
    e.target.disabled = true;
    dispatch(incrementQuantityToCart({pid: id,}));
    setCartProducts((cartProducts) =>
        cartProducts.map(
            (item) => item.id == id  ? { ...item,quantity: item.quantity + 1,totalPrice: item.totalPrice + item.currentPrice,} : item
        )
    );
  };
<<<<<<< HEAD
  const handleMinus = (e,id) => {
    e.target.disabled = true;
    dispatch(decrementQuantityToCart({pid: id,}));
    setCartProducts((cartProducts) => 
        cartProducts.map(
            (item) =>  item.id == id? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.currentPrice } : item
        )
    );
=======
  const handleMinus = (e, id) => {
        e.target.disabled = true;
        dispatch(decrementQuantityToCart({pid: id}));
        setCartProducts((cartProducts) => 
            cartProducts.map(
                (item) =>  item.id == id ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.currentPrice } : item
            )
        );
>>>>>>> master
  };

  function handleDelete(id) {
    // Array.from(document.getElementsByClassName("removeCart")).map((item) => item.disabled=true);
    dispatch(deleteCartProduct({ pid: id}))
    setCartProducts((cartProducts) =>
<<<<<<< HEAD
      cartProducts.filter(
          (item) => item.id !== id)
    );
  }
  if (!decrementingQuantityToCart && decrementedQuantityToCart) {
    Array.from(document.getElementsByClassName("decrement")).map((item) => item.disabled=false);
  }
  if (!incrementingQuantityToCart && incrementedQuantityToCart) {
    Array.from(document.getElementsByClassName("increment")).map((item) => item.disabled=false);
=======
        cartProducts.filter(
            (item) => item.id !== id)
    );
  }
  if (!decrementingQuantityToCart && decrementedQuantityToCart) {
        Array.from(document.getElementsByClassName("decrement")).map((item) => item.disabled = false);
  }
  if (!incrementingQuantityToCart && incrementedQuantityToCart) {
        Array.from(document.getElementsByClassName("increment")).map((item) => item.disabled = false);
>>>>>>> master
  }

  return (
    <div className={styles.table}>
      <table>
        <thead id="table">
          <tr>
            <th >Məhsul</th>
            <th >Qiymət</th>
            <th >Endirim</th>
            <th >hazirki Qiymet</th>
            <th >Say</th>
            <th >Cəm</th>
            <th ></th>
          </tr>
        </thead>
        <tbody id="tbody">
          {cartProducts &&
            cartProducts.map((item) => (
              <tr key={item.id}>
                <td  className={styles.tdImgName}>
                  <div>
                    <img className={styles.img} src={item.photo}/>
                    {/* <h3>{item.productName}</h3> */}
                  </div>
                </td>
                <td  className={styles.price}>
                  <span> {item.price}azn</span>
                </td>
                <td  className={styles.price}>
                  <span> {item.discount ? item.discount : 0} %</span>
                </td>
                <td  className={styles.price}>
                  <span> {item.currentPrice}azn</span>
                </td>
                <td >
                  <div className={styles.quantity}>
                    {/* <IncDecButton id={item.product.id}/> */}
                    <button className="decrement" onClick={(e) => handleMinus(e, item.id)} >
                      -
                    </button>
                    {item.quantity}
                    <button  className="increment" onClick={(e) => handlePlus(e, item.id)} >
                      +
                    </button>
                  </div>
                </td>
                <td >
                  {/* <CartTotalPrice id={item.product.id}/> */}
<<<<<<< HEAD
                  <p className={styles.total}>{item.totalPrice.toFixed(2)} azn</p>
=======
                  <p className={styles.total}>{item.totalPrice} azn</p>
>>>>>>> master
                </td>
                <td >
                  <button className={styles.btn,'removeCart'} onClick={() => handleDelete(item.id)} >
                    <GrClose />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInCart;