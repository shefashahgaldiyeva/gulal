import actionTypes from "./deleteCartProduct.actionTypes";
import initialState from "./deleteCartProduct.initialState";


const deleteCartProductReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.DELETING_CART_PRODUCT:
			return {
				...state,
				deletingCartProduct: true,
				deletedCartProduct: false,
				deletedErrorMessage: null,
			};

		case actionTypes.DELETE_CART_PRODUCT_SUCCESS:
			return {
				...state,
				deletingCartProduct: false,
				deletedCartProduct: payload,
			};

		case actionTypes.DELETE_CART_PRODUCT_ERROR_MESSAGE:
			return {
				...state,
				deletingCartProduct: false,
				deletedErrorMessage: payload,
			};
		default:
			return state;
	}
};

<<<<<<< HEAD
export default deleteCartProductReducer;
=======
export default deleteCartProductReducer; 
>>>>>>> master
