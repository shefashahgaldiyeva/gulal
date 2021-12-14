import actionTypes from "./deleteWishlistProduct.actionTypes";

const deletingToWishlist= () => ({
	type: actionTypes.DELETING_WISHLIST_PRODUCT,
});

const deletedToWishlist = (response) => ({
	type: actionTypes.DELETE_WISHLIST_PRODUCT_SUCCESS,
	payload: response,
});

const addedToWishlistError= (errorMessage) => ({
	type: actionTypes.DELETE_WISHLIST_PRODUCT_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	deletingToWishlist,
	deletedToWishlist,
	addedToWishlistError,
};