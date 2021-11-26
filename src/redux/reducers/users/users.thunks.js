import UsersService from "../../../services/users.service";
import actions from "./users.actions";

export const loadUsersAsync = (token) => (dispatch) => {
	dispatch(actions.usersLoadStart());

	UsersService.getUser(token)
		.then((response) => dispatch(actions.usersLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.usersLoadError(error.message)));
};

export const registerAsync = (params) => (dispatch) => {
	dispatch(actions.registerLoadStart());

	UsersService.register(params)
		.then((response) => dispatch(actions.registerLoadSuccess(response.data.operation)))
		.catch((error) => dispatch(actions.registerLoadError(error)));
};