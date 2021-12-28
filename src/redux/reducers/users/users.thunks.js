import UsersService from "../../../services/users.service";
import actions from "./users.actions";

export const loadUsersAsync = () => (dispatch) => {
	dispatch(actions.usersLoadStart());

	UsersService.getUser()
		.then((response) => dispatch(actions.usersLoadSuccess(response.data.data[0])))
		.catch((error) => dispatch(actions.usersLoadError(error.message)));
};

export const registerAsync = (params) => (dispatch) => {
	dispatch(actions.registerLoadStart());

	UsersService.register(params)
		.then((response) => dispatch(actions.registerLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.registerLoadError(error)));
};

export const logoutAsync = () => (dispatch) => {
	dispatch(actions.logoutLoadStart());

	UsersService.logout()
		.then((response) => dispatch(actions.logoutLoadSuccess(response.data.operation)))
		.catch((error) => dispatch(actions.logoutLoadError(error)));
};