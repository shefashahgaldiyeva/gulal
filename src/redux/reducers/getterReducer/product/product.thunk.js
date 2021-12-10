import ProductsService from "../../../../services/products.service";
import actions from "./product.action";

// export const getProducts = () => (dispatch) => {
// 	dispatch(actions.getProduct());
// 	ProductsService.getAllProducts()
// 		.then((response) => dispatch(actions.setProduct(response.data)))
// 		.catch((error) => dispatch(actions.errorProduct(error.message)));
// };

export const getProductsByCategory = (id) => (dispatch) => {
	dispatch(actions.getProduct());
	console.log(id);
	ProductsService.getProductByCategory(id)
		.then((response) => dispatch(actions.setProduct(response.data)))
		.catch((error) => dispatch(actions.errorProduct(error)));
};

export const getProductByFilter = (id,params) => (dispatch) => {
	dispatch(actions.getProduct());

	ProductsService.getProductByCategory(id,params)
		.then((response) => dispatch(actions.setProduct(response.data)))
		.catch((error) => dispatch(actions.errorProduct(error)));
};

export const getProductByDiscount = () => (dispatch) => {
	dispatch(actions.getProduct());

	ProductsService.getDiscountProduct()
		.then((response) => dispatch(actions.setProduct(response.data)))
		.catch((error) => dispatch(actions.errorProduct(error)));
}; 

