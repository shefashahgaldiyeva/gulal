import actionTypes from "./incrementQuantity.actionTypes";
import initialState from "./incrementQuantity.initialState";


const incrementQuantityToCart = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.INCREMENTING_QUANTITY_TO_CART:
			return {
				...state,
				incrementingQuantityToCart: true,
				incrementedQuantityToCart: null,
				incrementedQuantityerrorMessage: null,
			};

		case actionTypes.INCREMENTED_QUANTITY_TO_CART_SUCCESS:
			return {
				...state,
				incrementingQuantityToCart: false,
				incrementedQuantityToCart: payload,
			};

		case actionTypes.INCREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE:
			return {
				...state,
				incrementingQuantityToCart: false,
				incrementedQuantityerrorMessage: payload,
			};
		default:
			return state;
	}
};

export default incrementQuantityToCart; 