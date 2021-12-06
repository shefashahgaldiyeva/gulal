import actionTypes from "./addToCart.actionTypes";
import initialState from "./addToCart.initialState";


const addToCart = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.ADDING_TO_CART:
			return {
				...state,
				addingToCart: true,
				addedToCart: false,
				addedErrorMessage: null,
			};

		case actionTypes.SET_TO_CART_SUCCESS:
			return {
				...state,
				addingToCart: false,
				addedToCart: payload,
			};

		case actionTypes.SET_TO_CART_ERROR_MESSAGE:
			return {
				...state,
				addingToCart: false,
				addedErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default addToCart;