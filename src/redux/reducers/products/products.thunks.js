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

export const loadAddToCartProductAsnync = (params) => (dispatch) => {
	dispatch(actions.addToCartProductLoadStart());

	ProductsService.ProductAddToCart(params)
		.then((response) => dispatch(actions.addToCartProductLoadSuccess(response.data.operation)))
		.catch((error) => dispatch(actions.addToCartProductLoadError(error)));
};

export const loadAllProductsAsync = () => (dispatch) => {
	dispatch(actions.allProductsLoadStart());

	ProductsService.getAllProducts()
		.then((response) => dispatch(actions.allProductsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.allProductsLoadError(error.message)));
};

export const getCartAsync = () => (dispatch) => {
	dispatch(actions.getCartLoadStart());

	ProductsService.GetCart()
		.then((response) => dispatch(actions.getCartSuccess(response.data)))
		.catch((error) => dispatch(actions.getCartError(error)));
}

export const loadIncrementAsync = (id) => (dispatch) => {
	dispatch(actions.incrementLoadStart());

	ProductsService.incrementQuantity(id)
		.then((response) => dispatch(actions.incrementLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.incrementLoadError(error)));
}

export const loadDecrementAsync = (id) => (dispatch) => {
	dispatch(actions.decrementLoadStart());

	ProductsService.decrementQuantity(id)
		.then((response) => dispatch(actions.decrementLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.decrementLoadError(error)));
}