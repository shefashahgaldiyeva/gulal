import actionTypes from "./products.actionTypes";

const productsLoadStart = () => ({
	type: actionTypes.PRODUCTS_LOAD_START,
});

const productsLoadSuccess = (products) => ({
	type: actionTypes.PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const productsLoadError = (errorMessage) => ({
	type: actionTypes.PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	productsLoadStart,
	productsLoadSuccess,
	productsLoadError,
};