import ProductsService from "../../../../services/products.service";
import actions from "./all.products.inHome.actions";

export const loadAllProductsAsync = () => (dispatch) => {
	dispatch(actions.allProductsLoadStart());

	ProductsService.getAllProducts()
		.then((response) => dispatch(actions.allProductsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.allProductsLoadError(error.message)));
};