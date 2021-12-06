import ShoppingCart from "../../../../services/shoppingCart.service";
import actions from "./decrementQuantity.action";

export const decrementQuantityToCart = (productId) => (dispatch) => {
	dispatch(actions.decrementingQuantityToCart());

	ShoppingCart.decrementQuantity(productId)
		.then((response) => dispatch(actions.decrementedgQuantityToCart(response.data.operation)))
		.catch((error) => dispatch(actions.decrementedToCartError(error)));
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
