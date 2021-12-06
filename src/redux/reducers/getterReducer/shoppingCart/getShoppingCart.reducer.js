import actionTypes from "./shoppingCart.actionTypes";
import initialState from "./shoppingCart.initialState";


const getShoppingCart = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.GET_PRODUCT_IN_CART_LOAD_START:
			return {
				...state,
				gettingProductInCart: true,
				productInCart: null,
				errorMessage: null,
			};

		case actionTypes.SET_PRODUCT_IN_CART_SUCCESS:
			return {
				...state,
				gettingProductInCart: false,
				productInCart: payload,
			};

		case actionTypes.ERROR_PRODUCT_IN_CART_MESSAGE:
			return {
				...state,
				gettingProductInCart: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default getShoppingCart;