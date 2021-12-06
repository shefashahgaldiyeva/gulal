import actionTypes from "./decrementQuantity.actionTypes";
import initialState from "./decrementQuantity.initialState";


const decrementQuantityToCart = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.DECREMENTING_QUANTITY_TO_CART:
			return {
				...state,
				decrementingQuantityToCart: true,
				decrementedQuantityToCart: null,
				decrementedQuantityerrorMessage: null,
			};

		case actionTypes.DECREMENTED_QUANTITY_TO_CART_SUCCESS:
			return {
				...state,
				decrementingQuantityToCart: false,
				decrementedQuantityToCart: payload,
			};

		case actionTypes.DECREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE:
			return {
				...state,
				decrementingQuantityToCart: false,
				decrementedQuantityerrorMessage: payload,
			};
		default:
			return state;
	}
};

<<<<<<< HEAD
export default decrementQuantityToCart;
=======
export default decrementQuantityToCart; 
>>>>>>> master
