import ProductsService from "../../../../services/products.service";
import actions from "./newProducts.actions";

export const getNewProductsAsync = () => (dispatch) => {
	dispatch(actions.getNewProduct());

	ProductsService.getNewProducts()
		.then((response) => dispatch(actions.setNewProduct(response.data)))
		.catch((error) => dispatch(actions.errorNewProduct(error)));
}; 
 