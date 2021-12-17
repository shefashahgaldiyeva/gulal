const initialState = {
	gettingGuestCart : true,
	guestCart: null,
	guestError: null,
}; 

const guestGetCartReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "GUEST_GET_PRODUCT_IN_CART_LOAD_START":
			return {
				...state,
				gettingGuestCart: true,
				guestCart: null,
				guestError: null,
			};

		case "GUEST_SET_PRODUCT_IN_CART_SUCCESS":
			return {
				...state,
				gettingGuestCart: false,
				guestCart: payload,
			};

		case "GUEST_ERROR_PRODUCT_IN_CART_MESSAGE":
			return {
				...state,
				gettingGuestCart: false,
				guestError: payload,
			};
		default:
			return state;
	}
};

export default guestGetCartReducer;