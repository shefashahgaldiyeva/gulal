import actionTypes from "./products.actionTypes";
import initialState from "./discount.initialState";

const discountProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.DISCOUNT_PRODUCTS_LOAD_START:
				return {
					...state,
					loading: true,
					discount: null,
					error: null,
				};
	
			case actionTypes.DISCOUNT_PRODUCTS_LOAD_SUCCESS:
				return {
					...state,
					loading: false,
					discount: payload,
				};
	
			case actionTypes.DISCOUNT_PRODUCTS_LOAD_ERROR:
				return {
					...state,
					loading: false,
					error: payload,
				};			
			
		default:
			return state;
	}
};

export default discountProductsReducer;