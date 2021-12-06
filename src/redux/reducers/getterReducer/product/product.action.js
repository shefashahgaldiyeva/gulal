import actionTypes from "./product.actionTypes";

const getProduct = () => ({
	type: actionTypes.GET_PRODUCT_LOAD_START,
});

const setProduct = (products) => ({
	type: actionTypes.SET_PRODUCT_SUCCESS,
	payload: products,
});

const errorProduct = (errorMessage) => ({
	type: actionTypes.ERROR_PRODUCT_MESSAGE,
	payload: errorMessage,
});


export default {
	getProduct,
	setProduct,
	errorProduct,
};