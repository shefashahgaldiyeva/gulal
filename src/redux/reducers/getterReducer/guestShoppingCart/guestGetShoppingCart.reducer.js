import actionTypes from "./guestGetShoppingCart.actionTypes";
import initialState from "./guestGetShoppingCart.initialState";


const guestGetShoppingCart = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.GUEST_GET_PRODUCT_IN_CART_LOAD:
			return {
				...state,
				gettingProductInCart: true,
				productInCart: null,
				errorMessage: null,
			};

		case actionTypes.GUEST_SET_PRODUCT_IN_CART_SUCCESS:
			return {
				...state,
				gettingProductInCart: false,
				productInCart: payload,
			};

		case actionTypes.gUEST_ERROR_PRODUCT_IN_CART_MESSAGE:
			return {
				...state,
				gettingProductInCart: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default guestGetShoppingCart;