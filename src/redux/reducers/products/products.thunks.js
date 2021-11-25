import ProductsService from "../../../services/products.service";
import actions from "./products.actions";

// export const loadProductsAsync = () => (dispatch) => {
// 	dispatch(actions.productsLoadStart());

// 	ProductsService.getAllProducts()
// 		.then((response) => dispatch(actions.productsLoadSuccess(response.data)))
// 		.catch((error) => dispatch(actions.productsLoadError(error.message)));
// };
export const loadProductByCategoryAsync = (id) => (dispatch) => {
	dispatch(actions.getProductsLoadStart());

	ProductsService.getProductByCategory(id)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
};

export const loadProductDetail = (id) => (dispatch) => {
	dispatch(actions.getProductDetailLoadStart());

	ProductsService.getProductDetail(id)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
};

export const loadDiscountProduct = () => (dispatch) => {
	dispatch(actions.getDiscountProductLoadStart());

	ProductsService.getDiscountProduct()
		.then((response) => dispatch(actions.getDiscountProductLoadSuccess(response)))
		.catch((error) => dispatch(actions.getDiscountProductLoadError(error)));
};

export const loadByFilterAsync = (id,params) => (dispatch) => {
	dispatch(actions.getProductsLoadStart());

	ProductsService.getProductByCategory(id,params)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
};