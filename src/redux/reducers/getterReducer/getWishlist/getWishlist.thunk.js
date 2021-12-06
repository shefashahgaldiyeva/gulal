import ProductsService from "../../../../services/wishlist.service";
import actions from "./getWishlist.actions";

export const getWishlistProducts = () => (dispatch) => {
	dispatch(actions.getProduct());

	ProductsService.GetWishlist()
		.then((response) => dispatch(actions.setProduct(response.data)))
		.catch((error) => dispatch(actions.errorProduct(error)));
}
