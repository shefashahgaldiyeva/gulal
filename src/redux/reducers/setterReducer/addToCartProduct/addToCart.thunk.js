import ShoppingCart from "../../../../services/shoppingCart.service";
import actions from "./addToCart.action";

export const addToCart = (productId) => (dispatch) => {
	dispatch(actions.setingToCart());

	ShoppingCart.addToCartProduct(productId)
		.then((response) => dispatch(actions.setedToCart(response.data.operation)))
		.catch((error) => dispatch(actions.addedToCartError(error)));
}; 