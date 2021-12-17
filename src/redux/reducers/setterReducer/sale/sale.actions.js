import actionTypes from "./sale.actionTypes";

const setingSale = () => ({
	type: actionTypes.SALE_LOAD,
});

const setedSale = (response) => ({
	type: actionTypes.SALE_SUCCESS,
	payload: response,
});

const saleError = (errorMessage) => ({
	type: actionTypes.SALE_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	setingSale,
	setedSale,
	saleError,
}; 