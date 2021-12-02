import actionTypes from "./products.actionTypes";
import initialState from "./addToCart.initialState";

const addToCartProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_START:
				return {
					...state,
					addingToCart: true,
					addedToCart: false,
					addToCardErrorMessage: null,
				};
	
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_SUCCESS:
				return {
					...state,
					addingToCart: false,
					addedToCart: payload,
				};
	
			case actionTypes.ADDTOCART_PRODUCTS_LOAD_ERROR:
				return {
					...state,
					addingToCart: false,
					addedToCart: payload,
				};			
			
		default:
			return state;
	}
};

export default addToCartProductsReducer;