import Main from "../../../../services/main.service";
import actions from "./subscribe.actions";

export const subscribeAsync = (params) => (dispatch) => {
	dispatch(actions.subscribeLoad());

	Main.subscribe(params)
		.then((response) => dispatch(actions.subscribeSuccess(response.data.operation)))
		.catch((error) => dispatch(actions.subscribeError(error)));
}; 