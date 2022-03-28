import actionTypes from "./users.actionTypes";

const usersLoadStart = () => ({
	type: actionTypes.USERS_LOAD_START,
});

const usersLoadSuccess = (users) => ({
	type: actionTypes.USERS_LOAD_SUCCESS,
	payload: users,
});

const usersLoadError = (errorMessage) => ({
	type: actionTypes.USERS_LOAD_ERROR,
	payload: errorMessage,
});


const loginLoadStart = () => ({
	type: actionTypes.LOGIN_LOAD_START,
});

const loginLoadSuccess = (payload) => ({
	type: actionTypes.LOGIN_LOAD_SUCCESS,
	payload: payload,
});

const loginLoadError = (errorMessage) => ({
	type: actionTypes.LOGIN_LOAD_ERROR,
	payload: errorMessage,
});


const registerLoadStart = () => ({
	type: actionTypes.REGISTER_LOAD_START,
});

const registerLoadSuccess = (payload) => ({
	type: actionTypes.REGISTER_LOAD_SUCCESS,
	payload: payload,
});

const registerLoadError = (errorMessage) => ({
	type: actionTypes.REGISTER_LOAD_ERROR,
	payload: errorMessage,
});



const logoutLoadStart = () => ({
	type: actionTypes.LOGOUT_LOAD_START,
});

const logoutLoadSuccess = (payload) => ({
	type: actionTypes.LOGOUT_LOAD_SUCCESS,
	payload: payload,
});

const logoutLoadError = (errorMessage) => ({
	type: actionTypes.LOGOUT_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	usersLoadStart,
	usersLoadSuccess,
	usersLoadError,
	loginLoadStart,
	loginLoadSuccess,
	loginLoadError,
	registerLoadStart,
	registerLoadSuccess,
	registerLoadError,
	logoutLoadStart,
	logoutLoadSuccess,
	logoutLoadError,
};