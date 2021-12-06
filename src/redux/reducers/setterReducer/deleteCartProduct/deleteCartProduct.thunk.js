import ShoppingCart from "../../../../services/shoppingCart.service";
import actions from "./deleteCartProduct.action";

export const deleteCartProduct = (productId) => (dispatch) => {
	dispatch(actions.deletingToCart());

	ShoppingCart.cartDelete(productId)
		.then((response) => dispatch(actions.deletedToCart(response.data)))
		.catch((error) => dispatch(actions.addedToCartError(error)));
}; 