import ProductsService from "../../../../services/products.service";
import actions from "./discount.actions";

export const loadDiscountProductsAsync = () => (dispatch) => {
	dispatch(actions.discountProductsLoadStart());

	ProductsService.getDiscountProducts()
		.then((response) => dispatch(actions.discountProductsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.discountProductsLoadError(error.message)));
};