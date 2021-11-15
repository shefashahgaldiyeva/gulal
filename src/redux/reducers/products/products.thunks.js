import ProductsService from "../../../services/products.service";
import actions from "./products.actions";

export const loadProductsAsync = () => (dispatch) => {
	dispatch(actions.productsLoadStart());

	ProductsService.getAllProducts()
		.then((response) => dispatch(actions.productsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.productsLoadError(error.message)));
};