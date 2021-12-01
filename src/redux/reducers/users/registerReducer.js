import actionTypes from "./users.actionTypes";
import initialState from "./register.initialState";

const registerReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.REGISTER_LOAD_START:

				return {
					...state,
					isLoading: true,
					registered: {
						operation: 'unsuccessfull',
						token: null
					},
					errorMessage: null,
				};
	
			case actionTypes.REGISTER_LOAD_SUCCESS:
	
			return {
					...state,
					isLoading: false,
					registered: {
						operation: payload.operation,
						token: payload.token
					},
				};
	
			case actionTypes.REGISTER_LOAD_ERROR:
	
			return {
					...state,
					isLoading: false,
					errorMessage: payload,
				};

		default:
			return state;
	}
};

export default registerReducer;