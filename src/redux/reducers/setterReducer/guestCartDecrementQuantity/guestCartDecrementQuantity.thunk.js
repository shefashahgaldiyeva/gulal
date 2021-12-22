import GuestService from "../../../../services/guest.service";

export const guestDecrementQuantity = (params) => (dispatch) => {
	dispatch({
        type: "GUEST_DECREMENTING_QUANTITY_TO_CART",
    });

	GuestService.guestDecrement(params)
		.then((response) => dispatch({
            type: "GUEST_DECREMENTED_QUANTITY_TO_CART_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "GUEST_DECREMENTED_QUANTITY_TO_CART_ERROR_MESSAGE",
            payload: error,
        }));
}
