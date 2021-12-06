import ProductsService from "../../../../services/products.service";
import actions from "./search.actions";

export const getSearchAsync = (params) => (dispatch) => {
	dispatch(actions.getSearch());

	ProductsService.getSearch(params)
		.then((response) => dispatch(actions.setSearch(response.data)))
		.catch((error) => dispatch(actions.searchErrorMessage(error)));
}
