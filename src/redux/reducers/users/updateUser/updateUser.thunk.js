import UsersService from "../../../../services/users.service";

export const updateUserAsync = (params) => (dispatch) => {
	dispatch({
        type: "UPDATING_USER_LOAD_START",
    });

	UsersService.updateUser(params)
		.then((response) => dispatch({
            type: "UPDATED_USER_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "UPDATE_USER_ERROR_MESSAGE",
            payload: error,
        }));
}
