import actionTypes from "./all.products.inHome.actionTypes";

const allProductsLoadStart = () => ({
	type: actionTypes.ALL_PRODUCTS_LOAD_START,
});

const allProductsLoadSuccess = (products) => ({
	type: actionTypes.ALL_PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const allProductsLoadError = (errorMessage) => ({
	type: actionTypes.ALL_PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
});

export default{
    allProductsLoadStart,
	allProductsLoadSuccess,
	allProductsLoadError,
}