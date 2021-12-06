import actionTypes from "./search.actionTypes";

const getSearch = () => ({
	type: actionTypes.GET_SEARCH_LOAD_START,
});

const setSearch = (products) => ({
	type: actionTypes.SET_SEARCH_SUCCESS,
	payload: products,
});

const searchErrorMessage = (errorMessage) => ({
	type: actionTypes.ERROR_SEARCH_MESSAGE,
	payload: errorMessage,
});


export default {
	getSearch,
	setSearch,
	searchErrorMessage,
}; 