import CategoriesService from "../../../services/categories.service";
import actions from "./categories.actions";

export const loadCategoriesAsync = () => (dispatch) => {
	dispatch(actions.categoriesLoadStart());

	CategoriesService.getAllCategories()
		.then((response) => dispatch(actions.categoriesLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.categoriesLoadError(error.message)));
};

export const loadProductByCategoryAsync = (id) => (dispatch) => {
	console.log(id)
	dispatch(actions.getProductsLoadStart());

	CategoriesService.getProductByCategory(id)
		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
		// .then((response) =>console.log(response))
		.catch((error) => dispatch(actions.getProductsLoadError(error)));
		// .catch((error) => console.log(error));
};