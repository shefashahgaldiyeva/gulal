import actionTypes from "./getWishlist.actionTypes";
import initialState from "./getWishlist.initialState";


const getWishlist = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_PRODUCT_IN_WISHLIST_LOAD_START:
			return {
				...state,
				gettingProductInWishlist: true,
				productInWishlist: null,
				errorMessage: null,
			};

		case actionTypes.SET_PRODUCT_IN_WISHLIST_SUCCESS:
			return {
				...state,
				gettingProductInWishlist: false,
				productInWishlist: payload,
			};

		case actionTypes.ERROR_PRODUCT_IN_WISHLIST_MESSAGE:
			return {
				...state,
				gettingProductInWishlist: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default getWishlist;