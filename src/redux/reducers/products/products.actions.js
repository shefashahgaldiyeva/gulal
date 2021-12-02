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



const addToCartProductLoadStart = () => ({
	type: actionTypes.ADDTOCART_PRODUCTS_LOAD_START,
});

const addToCartProductLoadSuccess = (products) => ({
	type: actionTypes.ADDTOCART_PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const addToCartProductLoadError = (errorMessage) => ({
	type: actionTypes.ADDTOCART_PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
})


const getCartLoadStart = () => ({
	type: actionTypes.GETCART_PRODUCTS_LOAD_START,
});

const getCartSuccess = (products) => ({
	type: actionTypes.GETCART_PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const getCartError = (errorMessage) => ({
	type: actionTypes.GETCART_PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
})


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


const incrementLoadStart = () => ({
	type: actionTypes.INCREMENT_LOAD_START,
});

const incrementLoadSuccess = (payload) => ({
	type: actionTypes.INCREMENT_LOAD_SUCCESS,
	payload: payload,
});

const incrementLoadError = (errorMessage) => ({
	type: actionTypes.INCREMENT_LOAD_ERROR,
	payload: errorMessage,
});

const decrementLoadStart = () => ({
	type: actionTypes.DECREMENT_LOAD_START,
});

const decrementLoadSuccess = (payload) => ({
	type: actionTypes.DECREMENT_LOAD_SUCCESS,
	payload: payload,
});

const decrementLoadError = (errorMessage) => ({
	type: actionTypes.DECREMENT_LOAD_ERROR,
	payload: errorMessage,
});


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
	getDiscountProductLoadError,
	addToCartProductLoadStart,
	addToCartProductLoadSuccess,
	addToCartProductLoadError,
	getCartLoadStart,
	getCartSuccess,
	getCartError,
	allProductsLoadStart,
	allProductsLoadSuccess,
	allProductsLoadError,
	incrementLoadStart,
	incrementLoadSuccess,
	incrementLoadError,
	decrementLoadStart,
	decrementLoadSuccess,
	decrementLoadError,
};