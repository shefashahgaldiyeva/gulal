import Main from "../../../../services/main.service";
import actions from "./sale.actions";

export const saleAsync = (params) => (dispatch) => {
	console.log(params)
	dispatch(actions.setingSale());

	Main.saleProductCheck(params)
		.then((response) => dispatch(actions.setedSale(response)))
		.catch((error) => dispatch(actions.saleError(error)));
}; 