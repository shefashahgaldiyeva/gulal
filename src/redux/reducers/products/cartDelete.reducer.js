import actionTypes from "./products.actionTypes";
import initialState from "./cartDelete.initialState";

const cartDeleteReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.CART_DELETE_LOAD_START:
			return {
				...state,
				deleting: true,
				delete: null,
				deleted: null,
			};

		case actionTypes.CART_DELETE_LOAD_SUCCESS:
			return {
				...state,
				deleting: false,
				delete: payload,
			};

		case actionTypes.CART_DELETE_LOAD_ERROR:
			return {
				...state,
				deleting: false,
				deleted: payload,
			};
			
			
		default:
			return state;
	}
};

export default cartDeleteReducer;