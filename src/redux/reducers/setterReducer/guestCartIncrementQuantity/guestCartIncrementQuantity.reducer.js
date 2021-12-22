const initialState = {
	gettingGuestCartIncrement : true,
	guestCartIncrement: null,
	guestIncrementError: null,
}; 

const guestIncrementReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "GUEST_INCREMENTING_QUANTITY_TO_CART":
			return {
				...state,
				gettingGuestCartIncrement: true,
				guestCartIncrement: null,
				guestIncrementError: null,
			};

		case "GUEST_INCREMENTED_QUANTITY_TO_CART_SUCCESS":
			return {
				...state,
				gettingGuestCartIncrement: false,
				guestCartIncrement: payload,
			};

		case "GUEST_INCREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE":
			return {
				...state,
				gettingGuestCartIncrement: false,
				guestIncrementError: payload,
			};
		default:
			return state;
	}
};

export default guestIncrementReducer;