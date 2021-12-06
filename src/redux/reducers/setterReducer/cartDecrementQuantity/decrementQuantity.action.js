import actionTypes from "./decrementQuantity.actionTypes";

const decrementingQuantityToCart= () => ({
	type: actionTypes.DECREMENTING_QUANTITY_TO_CART,
});

const decrementedgQuantityToCart = (response) => ({
	type: actionTypes.DECREMENTED_QUANTITY_TO_CART_SUCCESS,
	payload: response,
});

const decrementedToCartError= (errorMessage) => ({
	type: actionTypes.DECREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	decrementingQuantityToCart,
	decrementedgQuantityToCart,
	decrementedToCartError,
};