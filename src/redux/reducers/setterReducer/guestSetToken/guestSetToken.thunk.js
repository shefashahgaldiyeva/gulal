import GuestService from "../../../../services/guest.service";
import actions from "./guestSetToken.actions";

export const guestSetTokenAsync = () => (dispatch) => {
	dispatch(actions.guestSetTokenLoadStart());

	GuestService.guestSetToken()
		.then((response) => dispatch(actions.guestSetTokenLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.guestSetTokenLoadError(error)));
};