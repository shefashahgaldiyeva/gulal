import actionTypes from "./addToCart.actionTypes";

const setingToCart= () => ({
	type: actionTypes.ADDING_TO_CART,
});

const setedToCart = (response) => ({
	type: actionTypes.SET_TO_CART_SUCCESS,
	payload: response,
});

const addedToCartError= (errorMessage) => ({
	type: actionTypes.SET_TO_CART_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	setingToCart,
	setedToCart,
	addedToCartError,
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
