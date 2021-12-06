import actionTypes from "./addToWishlist.actionTypes";
import initialState from "./addToWishlist.initialState";


const addToWishlist = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.ADDING_TO_WISHLIST:
			return {
				...state,
				addingToWishlist: true,
				addedToWishlist: false,
				addedErrorMessage: null,
			};

		case actionTypes.SET_TO_WISHLIST_SUCCESS:
			return {
				...state,
				addingToWishlist: false,
				addedToWishlist: payload,
			};

		case actionTypes.SET_TO_WISHLIST_ERROR_MESSAGE:
			return {
				...state,
				addingToWishlist: false,
				addedErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default addToWishlist; 