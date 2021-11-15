import actionTypes from "./categories.actionTypes";
import initialState from "./categories.initialState";


const categoriesReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.CATEGORIES_LOAD_START:
			return {
				...state,
				isLoading: true,
				categories: null,
				errorMessage: null,
			};

		case actionTypes.CATEGORIES_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				categories: payload,
			};

		case actionTypes.CATEGORIES_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
			
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
		default:
			return state;
	}
};

export default categoriesReducer;