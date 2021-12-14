import GuestService from "../../../../services/guest.service";
import actions from "./guestAddToCart.actions";

export const guestAddToCartAsync = (params) => (dispatch) => {
    console.log(params)
	dispatch(actions.guestAddToCartLoadStart());

	GuestService.guestAddToCart(params)
		.then((response) => dispatch(actions.guestAddToCartLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.guestAddToCartLoadError(error)));
};