import actionTypes from "./products.actionTypes";
import initialState from "./addToCart.initialState";

const addToCartProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_START:
				return {
					...state,
					loading: true,
					addToCart: null,
					error: null,
				};
	
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_SUCCESS:
				return {
					...state,
					loading: false,
					addToCart: payload,
				};
	
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_ERROR:
				return {
					...state,
					loading: false,
					error: payload,
				};			
			
		default:
			return state;
	}
};

export default addToCartProductsReducer;