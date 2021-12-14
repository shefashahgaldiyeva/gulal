import actionTypes from "./guestSetToken.actionTypes";

const guestSetTokenLoadStart = () => ({
	type: actionTypes.GUEST_SET_TOKEN_LOAD_START,
});

const guestSetTokenLoadSuccess = (payload) => ({
	type: actionTypes.GUEST_SET_TOKEN_LOAD_SUCCESS,
	payload: payload,
});

const guestSetTokenLoadError = (errorMessage) => ({
	type: actionTypes.GUEST_SET_TOKEN_LOAD_ERROR,
	payload: errorMessage,
});


export default {
	guestSetTokenLoadStart,
	guestSetTokenLoadSuccess,
	guestSetTokenLoadError,
};