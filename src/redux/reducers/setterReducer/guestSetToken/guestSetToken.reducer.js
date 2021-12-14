import actionTypes from "./guestSetToken.actionTypes";
import initialState from "./guestSetToken.initialState";

const guestSetTokenReducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case actionTypes.GUEST_SET_TOKEN_LOAD_START:

				return {
					...state,
					isLoadingGuest: true,
					guestAssignedToken: {
						operation: 'unsuccessfull',
						guestToken: null
					},
					guestErrorMessage: null,
				};
	
			case actionTypes.GUEST_SET_TOKEN_LOAD_SUCCESS:
	
			return {
					...state,
					isLoadingGuest: false,
					guestAssignedToken: {
						operation: payload.operation,
						guestToken: payload.guestToken
					},
				};
	
			case actionTypes.GUEST_SET_TOKEN_LOAD_ERROR:
	
			return {
					...state,
					isLoadingGuest: false,
					guestErrorMessage: payload,
				};

		default:
			return state;
	}
};

export default guestSetTokenReducer;