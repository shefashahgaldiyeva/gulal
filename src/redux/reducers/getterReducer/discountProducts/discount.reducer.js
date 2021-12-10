import actionTypes from "./discount.actionTypes";
import initialState from "./discount.initialState";

const discountProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.DISCOUNT_PRODUCTS_LOAD_START:
			return {
				...state,
				isLoadingDiscount: true,
				discountProducts: null,
				discountErrorMessage: null,
			};

		case actionTypes.DISCOUNT_PRODUCTS_LOAD_SUCCESS:
			return {
				...state,
				isLoadingDiscount: false,
				discountProducts: payload,
			};

		case actionTypes.DISCOUNT_PRODUCTS_LOAD_ERROR:
			return {
				...state,
				isLoadingDiscount: false,
				discountErrorMessage: payload,
			};
			
			
		default:
			return state;
	}
};

export default discountProductsReducer;