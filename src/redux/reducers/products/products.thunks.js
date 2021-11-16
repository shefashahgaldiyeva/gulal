import ProductsService from "../../../services/products.service";
import actions from "./products.actions";

export const loadProductsAsync = () => (dispatch) => {
	dispatch(actions.productsLoadStart());

	ProductsService.getAllProducts()
		.then((response) => dispatch(actions.productsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.productsLoadError(error.message)));
};
export const loadProductByCategoryAsync = (id) => (dispatch) => {
	dispatch(actions.getProductsLoadStart());

	ProductsService.getProductByCategory(id)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
};