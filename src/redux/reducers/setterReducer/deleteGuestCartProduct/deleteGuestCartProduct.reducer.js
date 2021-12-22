const initialState = {
	deletingGuestCartProduct : true,
	deletedGuestCartProduct: null,
	deletedGuestErrorMessage: null,
}; 

const deleteGuestCartProductReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "DELETING_GUEST_CART_PRODUCT":
			return {
				...state,
				deletingGuestCartProduct: true,
				deletedGuestCartProduct: null,
				deletedGuestErrorMessage: null,
			};

		case "DELETE_GUEST_CART_PRODUCT_SUCCESS":
			return {
				...state,
				deletingGuestCartProduct: false,
				deletedGuestCartProduct: payload,
			};

		case "DELETE_GUEST_CART_PRODUCT_ERROR_MESSAGE":
			return {
				...state,
				deletingGuestCartProduct: false,
				deletedGuestErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default deleteGuestCartProductReducer;