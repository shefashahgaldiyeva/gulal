import Main from "../../../../services/main.service";

export const getOrdersAsync = () => (dispatch) => {
	dispatch({
        type: "GET_ORDERS_LOAD_START",
    });

	Main.getOrders()
		.then((response) => dispatch({
            type: "GET_ORDERS_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "GET_ORDERS_ERROR_MESSAGE",
            payload: error,
        }));
}
