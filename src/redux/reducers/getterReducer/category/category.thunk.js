import CategoriesService from "../../../../services/categories.service";
import actions from "./category.actions";

export const getCategories = () => (dispatch) => {
	dispatch(actions.getCategory());
	CategoriesService.getAllCategories()
		.then((response) => dispatch(actions.setCategory(response.data)))
		.catch((error) => dispatch(actions.errorCategory(error.message)));
};

// export const loadProductByCategoryAsync = (id) => (dispatch) => {
// 	dispatch(actions.getProductsLoadStart());

// 	CategoriesService.getProductByCategory(id)
// 		.then((response) => dispatch(actions.getProductsLoadSuccess(response)))
// 		.catch((error) => dispatch(actions.getProductsLoadError(error)));
<<<<<<< HEAD
// };
=======
// }; 
>>>>>>> master
