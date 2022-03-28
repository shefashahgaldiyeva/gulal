import actionTypes from "./users.actionTypes";
import initialState from "./login.initialState";

const loginReducer = (state = initialState, { type, payload }) => {

	switch (type) {
			case actionTypes.LOGIN_LOAD_START:

				return {
					...state,
					isLoadingLogin: true,
					logging: {
						msg: 'unsuccessfull',
						token: null
					},
					errorMessageLogin: null,
				};
	
			case actionTypes.LOGIN_LOAD_SUCCESS:
	
			return {
					...state,
					isLoadingLogin: false,
					logging: {
                        msg: payload.msg,
						token: payload.token
                    },
				};
	
			case actionTypes.LOGIN_LOAD_ERROR:
	
			return {
					...state,
					isLoadingLogin: false,
					errorMessageLogin: payload,
				};

		default:
			return state;
	}
};

export default loginReducer;