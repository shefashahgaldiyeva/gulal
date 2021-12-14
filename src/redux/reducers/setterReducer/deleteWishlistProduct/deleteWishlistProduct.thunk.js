import ShoppingCart from "../../../../services/wishlist.service";
import actions from "./deleteWishlistProduct.actions";

export const deleteWishlistProduct = (productId) => (dispatch) => {
	dispatch(actions.deletingToWishlist());

	ShoppingCart.wishlistDelete(productId)
		.then((response) => dispatch(actions.deletedToWishlist(response.data)))
		.catch((error) => dispatch(actions.addedToWishlistError(error)));
};