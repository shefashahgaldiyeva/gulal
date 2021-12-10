import actionTypes from "./discount.actionTypes";

const discountProductsLoadStart = () => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_START,
});

const discountProductsLoadSuccess = (products) => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_SUCCESS,
	payload: products,
});

const discountProductsLoadError = (errorMessage) => ({
	type: actionTypes.DISCOUNT_PRODUCTS_LOAD_ERROR,
	payload: errorMessage,
});

export default{
    discountProductsLoadStart,
	discountProductsLoadSuccess,
	discountProductsLoadError,
}