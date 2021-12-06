import Wishlist from "../../../../services/wishlist.service";
import actions from "./addToWishlist.action";

export const addToWishlist = (productId) => (dispatch) => {
	dispatch(actions.settingToWishlist());

	Wishlist.addToWishlistProduct(productId)
		.then((response) => dispatch(actions.setedToWishlist(response.data.operation)))
		.catch((error) => dispatch(actions.addedToWishlistError(error)));
}; 