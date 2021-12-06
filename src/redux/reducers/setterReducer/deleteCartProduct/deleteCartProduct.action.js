import actionTypes from "./deleteCartProduct.actionTypes";

const deletingToCart= () => ({
	type: actionTypes.DELETING_CART_PRODUCT,
});

const deletedToCart = (response) => ({
	type: actionTypes.DELETE_CART_PRODUCT_SUCCESS,
	payload: response,
});

const addedToCartError= (errorMessage) => ({
	type: actionTypes.DELETE_CART_PRODUCT_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	deletingToCart,
	deletedToCart,
	addedToCartError,
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
