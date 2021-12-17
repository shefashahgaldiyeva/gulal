import actionTypes from "./sale.actionTypes";
import initialState from "./sale.initialState";


const saleReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.SALE_LOAD:
			return {
				...state,
				setingSale: true,
				setedSale: false,
				saleErrorMessage: null,
			};

		case actionTypes.SALE_SUCCESS:
			return {
				...state,
				setingSale: false,
				setedSale: payload,
			};

		case actionTypes.SALE_ERROR_MESSAGE:
			return {
				...state,
				setingSale: false,
				saleErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default saleReducer; 