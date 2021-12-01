import actionTypes from "./users.actionTypes";
import initialState from "./logout.initialState";
    
const logoutReducer = (state = initialState, { type, payload }) => {
	switch (type) {
				case actionTypes.LOGOUT_LOAD_START:

					return {
						...state,
						logOut: false,
						errorMessage: null,
					};
		
				case actionTypes.LOGOUT_LOAD_SUCCESS:
		
				return {        
						...state,
						logOut: true,
					};
		
				case actionTypes.LOGOUT_LOAD_ERROR:
		
				return {
						...state,
						logOut: false,
						errorMessage: payload,
					};

		default:
			return state;
	}
};

export default logoutReducer;