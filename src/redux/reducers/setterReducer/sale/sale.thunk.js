import Main from "../../../../services/main.service";
import actions from "./sale.actions";

export const saleAsync = (params) => (dispatch) => {
	dispatch(actions.setingSale());

	Main.saleProductCheck(params)
		.then((response) => dispatch(actions.setedSale(response.data)))
		.catch((error) => dispatch(actions.saleError(error)));
}; 