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


const getProductDetailLoadStart = () => ({
	type: actionTypes.PRODUCTS_LOAD_START,
});

const getProductDetailLoadSuccess = (products) => ({
	type: actionTypes.PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const getProductDetailLoadError = (errorMessage) => ({
	type: actionTypes.PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
})







const getDiscountProductLoadStart = () => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_START,
});

const getDiscountProductLoadSuccess = (products) => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const getDiscountProductLoadError = (errorMessage) => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
})


export default {
	productsLoadStart,
	productsLoadSuccess,
	productsLoadError,
	getProductsLoadStart,
	getProductsLoadSuccess,
	getProductsLoadError,
	getProductDetailLoadStart,
	getProductDetailLoadSuccess,
	getProductDetailLoadError,

	getDiscountProductLoadStart,
	getDiscountProductLoadSuccess,
	getDiscountProductLoadError
};