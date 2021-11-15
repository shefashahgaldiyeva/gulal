import actionTypes from "./categories.actionTypes";

const categoriesLoadStart = () => ({
	type: actionTypes.CATEGORIES_LOAD_START,
});

const categoriesLoadSuccess = (categories) => ({
	type: actionTypes.CATEGORIES_LOAD_SUCCESS,
	payload: categories,
});

const categoriesLoadError = (errorMessage) => ({
	type: actionTypes.CATEGORIES_LOAD_ERROR,
	payload: errorMessage,
});





const getProductsLoadStart = () => ({
	type: actionTypes.PRODUCTS_LOAD_START,
});

const getProductsLoadSuccess = (products) => ({
	type: actionTypes.PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const getProductsLoadError = (errorMessage) => ({
	type: actionTypes.PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
});



export default {
	categoriesLoadStart,
	categoriesLoadSuccess,
	categoriesLoadError,
	getProductsLoadStart,
	getProductsLoadSuccess,
	getProductsLoadError
};