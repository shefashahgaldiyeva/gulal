import actionTypes from "./users.actionTypes";
import initialState from "./logout.initialState";
    
const logoutReducer = (state = initialState, { type, payload }) => {
	switch (type) {
				case actionTypes.LOGOUT_LOAD_START:

					return {
						...state,
						isLoading: true,
						logData: null,
						errorMessage: null,
					};
		
				case actionTypes.LOGOUT_LOAD_SUCCESS:
		
				return {        
						...state,
						isLoading: false,
						logData: payload,
					};
		
				case actionTypes.LOGOUT_LOAD_ERROR:
		
				return {
						...state,
						isLoading: false,
						errorMessage: payload,
					};

		default:
			return state;
	}
};

export default logoutReducer;