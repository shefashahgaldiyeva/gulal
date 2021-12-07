import actionTypes from "./subscribe.actionTypes";

const subscribeLoad = () => ({
	type: actionTypes.SUBSCRIBE_LOAD,
});

const subscribeSuccess = (response) => ({
	type: actionTypes.SUBSCRIBE_SUCCESS,
	payload: response,
});

const subscribeError = (errorMessage) => ({
	type: actionTypes.SUBSCRIBE_ERROR_MESSAGE,
	payload: errorMessage,
});


export default {
	subscribeLoad,
	subscribeSuccess,
	subscribeError,
}; 