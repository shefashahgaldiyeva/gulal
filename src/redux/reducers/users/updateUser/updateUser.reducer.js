const initialState = {
	updatingUser : true,
	updatedUser: null,
	updateUserError: null,
}; 

const updateUserReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "UPDATING_USER_LOAD_START":
			return {
				...state,
				updatingUser: true,
				updatedUser: null,
				updateUserError: null,
			};

		case "UPDATED_USER_SUCCESS":
			return {
				...state,
				updatingUser: false,
				updatedUser: payload,
			};

		case "UPDATE_USER_ERROR_MESSAGE":
			return {
				...state,
				updatingUser: false,
				updateUserError: payload,
			};
		default:
			return state;
	}
};

export default updateUserReducer;