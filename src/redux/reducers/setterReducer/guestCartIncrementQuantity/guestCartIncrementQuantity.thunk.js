import GuestService from "../../../../services/guest.service";

export const guestIncrementQuantity = (params) => (dispatch) => {
	dispatch({
        type: "GUEST_INCREMENTING_QUANTITY_TO_CART",
    });

	GuestService.guestIncrement(params)
		.then((response) => dispatch({
            type: "GUEST_INCREMENTED_QUANTITY_TO_CART_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "GUEST_INCREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE",
            payload: error,
        }));
}
