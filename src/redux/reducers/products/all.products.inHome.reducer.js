import actionTypes from "./products.actionTypes";
import initialState from "./all.products.inHome.initialState";

const allProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ALL_PRODUCTS_LOAD_START:
			return {
				...state,
				isLoading: true,
				allProducts: null,
				errorMessage: null,
			};

		case actionTypes.ALL_PRODUCTS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				allProducts: payload,
			};

		case actionTypes.ALL_PRODUCTS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
			
			
		default:
			return state;
	}
};

export default allProductsReducer;