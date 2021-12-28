const initialState = {
	gettingOrders : true,
	getOrders: null,
	ordersError: null,
}; 

const getOrdersReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "GET_ORDERS_LOAD_START":
			return {
				...state,
				gettingOrders: true,
				getOrders: null,
				ordersError: null,
			};

		case "GET_ORDERS_SUCCESS":
			return {
				...state,
				gettingOrders: false,
				getOrders: payload,
			};

		case "GET_ORDERS_ERROR_MESSAGE":
			return {
				...state,
				gettingOrders: false,
				ordersError: payload,
			};
		default:
			return state;
	}
};

export default getOrdersReducer;