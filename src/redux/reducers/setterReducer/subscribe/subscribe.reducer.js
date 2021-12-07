import actionTypes from "./subscribe.actionTypes";
import initialState from "./subscribe.initialState";


const subscribeReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.SUBSCRIBE_LOAD:
			return {
				...state,
				subscribeLoad: true,
				subscribeSuccess: false,
				subscribeErrorMessage: null,
			};

		case actionTypes.SUBSCRIBE_SUCCESS:
			return {
				...state,
				subscribeLoad: false,
				subscribeSuccess: payload,
			};

		case actionTypes.SUBSCRIBE_ERROR_MESSAGE:
			return {
				...state,
				subscribeLoad: false,
				subscribeErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default subscribeReducer; 