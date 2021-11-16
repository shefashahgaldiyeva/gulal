import CategoriesService from "../../../services/categories.service";
import actions from "./categories.actions";

export const loadCategoriesAsync = () => (dispatch) => {
	dispatch(actions.categoriesLoadStart());

	CategoriesService.getAllCategories()
		.then((response) => dispatch(actions.categoriesLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.categoriesLoadError(error.message)));
};

export const loadProductByCategoryAsync = (id) => (dispatch) => {
	dispatch(actions.getProductsLoadStart());

	CategoriesService.getProductByCategory(id)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
};