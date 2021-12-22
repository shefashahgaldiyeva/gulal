import GuestService from "../../../../services/guest.service";

export const deleteGuestCartProduct = (params) => (dispatch) => {
	dispatch({
        type: "DELETING_GUEST_CART_PRODUCT",
    });

	GuestService.guestDeleteCart(params)
		.then((response) => dispatch({
            type: "DELETE_GUEST_CART_PRODUCT_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "DELETE_GUEST_CART_PRODUCT_ERROR_MESSAGE",
            payload: error,
        }));
}
