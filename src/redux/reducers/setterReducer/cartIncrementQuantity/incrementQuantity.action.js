import actionTypes from "./incrementQuantity.actionTypes";

const incrementingQuantityToCart= () => ({
	type: actionTypes.INCREMENTING_QUANTITY_TO_CART,
});

const incrementedgQuantityToCart = (response) => ({
	type: actionTypes.INCREMENTED_QUANTITY_TO_CART_SUCCESS,
	payload: response,
});

const incrementedToCartError= (errorMessage) => ({
	type: actionTypes.INCREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	incrementingQuantityToCart,
	incrementedgQuantityToCart,
	incrementedToCartError,

};

