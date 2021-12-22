import GuestService from "../../../../services/guest.service";

export const guestGetCartAsync = (guestToken) => (dispatch) => {
	dispatch({
        type: "GUEST_GET_PRODUCT_IN_CART_LOAD_START",
    });

	GuestService.guestGetCart(guestToken)
		.then((response) => dispatch({
            type: "GUEST_SET_PRODUCT_IN_CART_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "GUEST_ERROR_PRODUCT_IN_CART_MESSAGE",
            payload: error,
        }));
}
