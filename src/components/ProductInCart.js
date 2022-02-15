import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../css/ProductInCart.module.css";
import { GrClose } from "react-icons/gr";
// import {
//   loadIncrementAsync,
//   loadQuantityAsync,
//   loadDecrementAsync,
// } from "../redux/reducers/products/products.thunks";
// import { getCartAsync } from "../redux/reducers/products/products.thunks";
// import { loadCartDeleteAsync } from "../redux/reducers/products/products.thunks";
// import IncDecButton from "./IncDecButton";
// import CartTotalPrice from "./CartTotalPrice";
import { getCartProducts } from "../redux/reducers/getterReducer/shoppingCart/shoppingCart.thunk";
import { decrementQuantityToCart } from "../redux/reducers/setterReducer/cartDecrementQuantity/decrementQuantity.thunk";
import { incrementQuantityToCart } from "../redux/reducers/setterReducer/cartIncrementQuantity/incrementQuantity.thunk";
import { deleteCartProduct } from "../redux/reducers/setterReducer/deleteCartProduct/deleteCartProduct.thunk";
import { guestGetCartAsync } from '../redux/reducers/getterReducer/guestShoppingCart/guestGetShoppingCart.thunk';
import GuestStore from "../services/GuestStore";
import { guestIncrementQuantity } from "../redux/reducers/setterReducer/guestCartIncrementQuantity/guestCartIncrementQuantity.thunk";
import { guestDecrementQuantity } from "../redux/reducers/setterReducer/guestCartDecrementQuantity/guestCartDecrementQuantity.thunk";
import { deleteGuestCartProduct } from "../redux/reducers/setterReducer/deleteGuestCartProduct/deleteGuestCartProduct.thunk";


const ProductInCart = () => {

    const dispatch = useDispatch();
    const { gettingProductInCart, productInCart, errorMessage } = useSelector((state) => state.getShoppingCart);
    const { decrementingQuantityToCart,decrementedQuantityToCart,decrementedQuantityerrorMessage } = useSelector((state) => state.decrementQuantityReducer);
    const { incrementingQuantityToCart,incrementedQuantityToCart,incrementedQuantityerrorMessage } = useSelector((state) => state.incrementQuantityReducer);
    const { gettingGuestCartIncrement,guestCartIncrement,guestIncrementError } = useSelector((state) => state.guestIncrementReducer)
    const { gettingGuestCartDecrement,guestCartDecrement,guestDecrementError } = useSelector((state) => state.guestDecrementReducer)
    GuestStore.getGuestToken()
    useSelector((state) => console.log(state.getShoppingCart));
	// console.log(GuestStore.appState)
	useEffect(() => {
    if(GuestStore.appState){
      dispatch(guestGetCartAsync({
        guestToken: GuestStore.appState
      }))
    }
	}, [])

	const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)
	// if(!gettingGuestCart && guestCart){
	// 	console.log(guestCart)
	// }

	const [guestCartProducts, setGuestCartProducts] = useState(null);
	useEffect(() => {
		if (!gettingGuestCart && guestCart) {
			setGuestCartProducts(guestCart.data);
		}
	}, [gettingGuestCart]);
    // console.log(guestCartProducts)


  if (!gettingProductInCart && productInCart) {
    console.log(productInCart);
  }
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);
  useEffect(() => {
    if (!gettingProductInCart && productInCart) {
      setCartProducts(productInCart.data);
    //   console.log(productInCart.data)
    }
  }, [productInCart]);
//   console.log(cartProducts)

  const handlePlus = (e, id) => {
	  if(!gettingProductInCart && productInCart){
		e.target.disabled = true;
    console.log(id)
		dispatch(incrementQuantityToCart({pid: id}));
		setCartProducts((cartProducts) =>
			cartProducts.map(
				(item) => item.id == id  ? { ...item,quantity: item.quantity + 1,totalPrice: item.totalPrice + item.currentPrice} : item
			)
		);
	}else if(!gettingGuestCart && guestCart){
		e.target.disabled = true;
		dispatch(guestIncrementQuantity({
			guestToken: GuestStore.appState,
			product_id: id
		}));
		setGuestCartProducts((guestCartProducts) =>
			guestCartProducts.map(
				(item) => item.id == id  ? { ...item,quantity: item.quantity + 1,totalPrice: item.totalPrice + item.currentPrice} : item
			)
		);
		}
  };
  const handleMinus = (e, id) => {
	if(!gettingProductInCart && productInCart){
        e.target.disabled = true;
        dispatch(decrementQuantityToCart({pid: id}));
        setCartProducts((cartProducts) => 
            cartProducts.map(
               (item) => item.id == id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 , totalPrice:  item.totalPrice - item.currentPrice  } : item
           )
        );
    
        // setCartProducts((cartProducts) => 
        //     cartProducts.filter((item) => item.id !== id && item.quantity !== 0 )
        //     )

	}else if(!gettingGuestCart && guestCart){
		e.target.disabled = true;
		dispatch(guestDecrementQuantity({
			guestToken: GuestStore.appState,
			product_id: id
		}));
		setGuestCartProducts((guestCartProducts) =>
			guestCartProducts.map(
				(item) => item.id == id  ? { ...item,quantity: item.quantity + 1,totalPrice: item.totalPrice + item.currentPrice,} : item
			)
		);
		}
  };

  function handleDelete(id) {
	if(!gettingProductInCart && productInCart){
        dispatch(deleteCartProduct({ pid: id}))
        setCartProducts((cartProducts) =>
            cartProducts.filter(
                (item) => item.id !== id)
    )}
    if(!gettingGuestCart && guestCart){
        dispatch(deleteGuestCartProduct({
            guestToken: GuestStore.appState,
            product_id: id
        }))
        setGuestCartProducts((guestCartProducts) =>
            guestCartProducts.filter(
                (item) => item.id !== id)
    )}
  }
  if (!decrementingQuantityToCart && decrementedQuantityToCart || !gettingGuestCartDecrement && guestCartDecrement) {
        Array.from(document.getElementsByClassName("decrement")).map((item) => item.disabled = false);
  }
  if (!incrementingQuantityToCart && incrementedQuantityToCart || !gettingGuestCartIncrement && guestCartIncrement) {
        Array.from(document.getElementsByClassName("increment")).map((item) => item.disabled = false);
  }


	const [products, setProducts] = useState();
	useEffect(() => {
		if(guestCartProducts){
			setProducts(guestCartProducts)
            console.log('guestCart')
		}
		else if(cartProducts){
			setProducts(cartProducts)
            console.log('userCart')
		}
	}, [guestCartProducts,cartProducts])
	// console.log(products)

  return (
    <div className={styles.table}>
      <table>
        <thead id="table">
          <tr>
            <th >Məhsul</th>
            <th >Qiymət</th>
            {/* <th >Endirim</th> */}
            {/* <th >Endirimli Qiymət</th> */}
            <th >Say</th>
            <th >Cəm</th>
            <th ></th>
          </tr>
        </thead>
        <tbody id="tbody">
        { 
		  products &&
            products.map((item) => (
              <tr key={item.id}>
                <td  className={styles.tdImgName}>
                  <div>
                    <img className={styles.img} src={item.photo}/>
                    <h3>{item.productName}</h3>
                  </div>
                </td>
                <td  className={styles.price}>
                  <span> <del className={item.price == item.currentPrice ? styles.display : styles.delPrice}>{item.price}azn &nbsp;  /</del> {item.currentPrice}azn</span>
                </td>
                {/* <td  className={styles.price}>
                  <span> {item.discount ? item.discount : 0} %</span>
                </td> */}
                {/* <td  className={styles.price}>
                  <span> {item.currentPrice}azn</span>
                </td> */}
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
                  <p className={styles.total}>{item.totalPrice.toFixed(2)} azn</p>
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