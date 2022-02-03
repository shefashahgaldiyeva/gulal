import actionTypes from "./all.products.inHome.actionTypes";
import initialState from "./all.products.inHome.initialState";

const allProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ALL_PRODUCTS_LOAD_START:
			return {
				...state,
				isLoadingProduct: true,
				allProducts: null,
				errorMessageProduct: null,
			};

		case actionTypes.ALL_PRODUCTS_LOAD_SUCCESS:
			return {
				...state,
				isLoadingProduct: false,
				allProducts: payload,
			};

		case actionTypes.ALL_PRODUCTS_LOAD_ERROR:
			return {
				...state,
				isLoadingProduct: false,
				errorMessageProduct: payload,
			};
			
			
		default:
			return state;
	}
};

export default allProductsReducer;