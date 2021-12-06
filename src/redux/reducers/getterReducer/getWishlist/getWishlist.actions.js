import actionTypes from "./getWishlist.actionTypes";

const getProduct = () => ({
	type: actionTypes.GET_PRODUCT_IN_WISHLIST_LOAD_START,
});

const setProduct = (products) => ({
	type: actionTypes.SET_PRODUCT_IN_WISHLIST_SUCCESS,
	payload: products,
});

const errorProduct = (errorMessage) => ({
	type: actionTypes.ERROR_PRODUCT_IN_WISHLIST_MESSAGE,
	payload: errorMessage,
});


export default {
	getProduct,
	setProduct,
	errorProduct,
}; 