import actionTypes from "./products.actionTypes";
import initialState from "./products.initialState";

const productsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.PRODUCTS_LOAD_START:
			return {
				...state,
				isLoading: true,
				products: null,
				errorMessage: null,
			};

		case actionTypes.PRODUCTS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				products: payload,
			};

		case actionTypes.PRODUCTS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		case actionTypes.PRODUCTS_:
			return {
					...state,
					isLoading: true,
					products: null,
					errorMessage: null,
			};
		default:
			return state;
	}
};

export default productsReducer;