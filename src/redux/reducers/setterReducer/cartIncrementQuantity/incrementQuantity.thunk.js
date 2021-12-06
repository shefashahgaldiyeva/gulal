import ShoppingCart from "../../../../services/shoppingCart.service";
import actions from "./incrementQuantity.action";

export const incrementQuantityToCart = (productId) => (dispatch) => {
	dispatch(actions.incrementingQuantityToCart());

	ShoppingCart.incrementQuantity(productId)
		.then((response) => dispatch(actions.incrementedgQuantityToCart(response.data.operation)))
		.catch((error) => dispatch(actions.incrementedToCartError(error)));
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
