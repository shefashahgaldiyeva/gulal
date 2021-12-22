const initialState = {
	gettingGuestCartDecrement : true,
	guestCartDecrement: null,
	guestDecrementError: null,
}; 

const guestDecrementReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "GUEST_DECREMENTING_QUANTITY_TO_CART":
			return {
				...state,
				gettingGuestCartDecrement: true,
				guestCartDecrement: null,
				guestDecrementError: null,
			};

		case "GUEST_DECREMENTED_QUANTITY_TO_CART_SUCCESS":
			return {
				...state,
				gettingGuestCartDecrement: false,
				guestCartDecrement: payload,
			};

		case "GUEST_DECREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE":
			return {
				...state,
				gettingGuestCartDecrement: false,
				guestDecrementError: payload,
			};
		default:
			return state;
	}
};

export default guestDecrementReducer;