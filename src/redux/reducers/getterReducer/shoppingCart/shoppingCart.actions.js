import actionTypes from "./shoppingCart.actionTypes";

const getProduct = () => ({
	type: actionTypes.GET_PRODUCT_IN_CART_LOAD_START,
});

const setProduct = (products) => ({
	type: actionTypes.SET_PRODUCT_IN_CART_SUCCESS,
	payload: products,
});

const errorProduct = (errorMessage) => ({
	type: actionTypes.ERROR_PRODUCT_IN_CART_MESSAGE,
	payload: errorMessage,
});


export default {
	getProduct,
	setProduct,
	errorProduct,
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
