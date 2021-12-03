import actionTypes from "./quantity.actionTypes";
import initialState from "./quantity.initialState";

const getQuantityReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.QUANTITY_LOAD_START:
				return {
					...state,
					getingQuantity: true,
					getDetail: payload,
					getQuantityErrorMessage: null,
				};

			case actionTypes.QUANTITY_LOAD_SUCCESS:
				return {
					...state,
					getingQuantity: false,
					getDetail: payload,
				};

			case actionTypes.QUANTITY_LOAD_ERROR:
				return {
					...state,
					getingQuantity: false,
					getQuantityErrorMessage: payload,
				};			

		default:
			return state;
	}
};

export default getQuantityReducer;