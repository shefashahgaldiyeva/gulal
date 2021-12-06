import actionTypes from "./addToWishlist.actionTypes";

const settingToWishlist= () => ({
	type: actionTypes.ADDING_TO_WISHLIST,
});

const setedToWishlist = (response) => ({
	type: actionTypes.SET_TO_WISHLIST_SUCCESS,
	payload: response,
});

const addedToWishlistError= (errorMessage) => ({
	type: actionTypes.SET_TO_WISHLIST_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	settingToWishlist,
	setedToWishlist,
	addedToWishlistError,
}; 