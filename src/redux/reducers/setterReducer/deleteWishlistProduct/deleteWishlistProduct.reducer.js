import actionTypes from "./deleteWishlistProduct.actionTypes";
import initialState from "./deleteWishlistProduct.initialState";


const deleteWishlistProductReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.DELETING_WISHLIST_PRODUCT:
			return {
				...state,
				deletingWishlistProduct: true,
				deletedWishlistProduct: false,
				deletedWishlistErrorMessage: null,
			};

		case actionTypes.DELETE_WISHLIST_PRODUCT_SUCCESS:
			return {
				...state,
				deletingWishlistProduct: false,
				deletedWishistProduct: payload,
			};

		case actionTypes.DELETE_WISHLIST_PRODUCT_ERROR_MESSAGE:
			return {
				...state,
				deletingWishlistProduct: false,
				deletedWishlistErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default deleteWishlistProductReducer;