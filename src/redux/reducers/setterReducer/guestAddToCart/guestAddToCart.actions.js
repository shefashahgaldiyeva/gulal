import actionTypes from "./guestAddToCart.actionTypes";

const guestAddToCartLoadStart = () => ({
	type: actionTypes.GUEST_ADD_TO_CART_LOAD_START,
});

const guestAddToCartLoadSuccess = (payload) => ({
	type: actionTypes.GUEST_ADD_TO_CART_LOAD_SUCCESS,
	payload: payload,
});

const guestAddToCartLoadError = (errorMessage) => ({
	type: actionTypes.GUEST_ADD_TO_CART_LOAD_ERROR,
	payload: errorMessage,
});


export default {
	guestAddToCartLoadStart,
	guestAddToCartLoadSuccess,
	guestAddToCartLoadError,
};