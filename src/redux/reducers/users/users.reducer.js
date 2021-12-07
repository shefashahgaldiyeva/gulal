import actionTypes from "./users.actionTypes";
import initialState from "./users.initialState";

const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.USERS_LOAD_START:

			return {
				...state,
				isLoading: true,
				users: null,
				userErrorMessage: null,
			};

		case actionTypes.USERS_LOAD_SUCCESS:

		return {
				...state,
				isLoading: false,
				users: payload,
			};

		case actionTypes.USERS_LOAD_ERROR:

		return {
				...state,
				isLoading: false,
				userErrorMessage: payload,
			};


		default:
			return state;
	}
};

export default usersReducer;