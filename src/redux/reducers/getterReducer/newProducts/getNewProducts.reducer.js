import actionTypes from "./newProducts.actionTypes";
import initialState from "./newProducts.initialState";


const getNewProductsReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.GET_NEW_PRODUCT_LOAD_START:
			return {
				...state,
				gettingNewProduct: true,
				newProducts: null,
				newProductsErrorMessage: null,
			};

		case actionTypes.SET_NEW_PRODUCT_SUCCESS:
			return {
				...state,
				gettingNewProduct: false,
				newProducts: payload,
			};

		case actionTypes.ERROR_NEW_PRODUCT_MESSAGE:
			return {
				...state,
				gettingNewProduct: false,
				newProductsErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default getNewProductsReducer; 