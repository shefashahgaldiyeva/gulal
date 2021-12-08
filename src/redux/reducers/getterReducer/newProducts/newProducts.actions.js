import actionTypes from "./newProducts.actionTypes";

const getNewProduct = () => ({
	type: actionTypes.GET_NEW_PRODUCT_LOAD_START,
});

const setNewProduct = (products) => ({
	type: actionTypes.SET_NEW_PRODUCT_SUCCESS,
	payload: products,
});

const errorNewProduct = (errorMessage) => ({
	type: actionTypes.ERROR_NEW_PRODUCT_MESSAGE,
	payload: errorMessage,
});


export default {
	getNewProduct,
	setNewProduct,
	errorNewProduct,
}; 