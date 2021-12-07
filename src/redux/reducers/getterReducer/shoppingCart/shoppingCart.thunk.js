import ProductsService from "../../../../services/shoppingCart.service";
import actions from "./shoppingCart.actions";

export const getCartProducts = () => (dispatch) => {
	dispatch(actions.getProduct());

	ProductsService.GetCart()
		.then((response) => dispatch(actions.setProduct(response.data)))
		.catch((error) => dispatch(actions.errorProduct(error)));
}

