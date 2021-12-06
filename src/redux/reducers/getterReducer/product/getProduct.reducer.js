import actionTypes from "./product.actionTypes";
import initialState from "./product.initialState";


const getProductsReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.GET_PRODUCT_LOAD_START:
			return {
				...state,
				gettingProduct: true,
				products: null,
				errorMessage: null,
			};

		case actionTypes.SET_PRODUCT_SUCCESS:
			return {
				...state,
				gettingProduct: false,
				products: payload,
			};

		case actionTypes.ERROR_PRODUCT_MESSAGE:
			return {
				...state,
				gettingProduct: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default getProductsReducer; 