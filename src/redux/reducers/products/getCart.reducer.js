import actionTypes from "./products.actionTypes";
import initialState from "./getCart.initialState";

const getCartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.GETCART_PRODUCTS_LOAD_START:
				return {
					...state,
					getingCartProduct: true,
					getCartProduct: false,
					getCardErrorMessage: null,
				};

			case actionTypes.GETCART_PRODUCTS_LOAD_SUCCESS:
				return {
					...state,
					getingCartProduct: false,
					getCartProduct: payload,
				};

			case actionTypes.GETCART_PRODUCTS_LOAD_ERROR:
				return {
					...state,
					getingCartProduct: false,
					getCardErrorMessage: payload,
				};			

		default:
			return state;
	}
};

export default getCartReducer; 