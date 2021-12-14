import actionTypes from "./guestAddToCart.actionTypes";
import initialState from "./guestAddToCart.initialState";

const guestAddToCartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.GUEST_ADD_TO_CART_LOAD_START:

				return {
					...state,
					addingCartForGuest: true,
					addedCartForGuest: null,
					errorMessageForGuest: null,
				};
	
			case actionTypes.GUEST_ADD_TO_CART_LOAD_SUCCESS:
	
			return {
					...state,
					addingCartForGuest: false,
					addedCartForGuest: payload,
				};
	
			case actionTypes.GUEST_ADD_TO_CART_LOAD_ERROR:
	
			return {
					...state,
					addingCartForGuest: false,
					errorMessageForGuest: payload,
				};

		default:
			return state;
	}
};

export default guestAddToCartReducer;