import actionTypes from "./categories.actionTypes";

const categoriesLoadStart = () => ({
	type: actionTypes.CATEGORIES_LOAD_START,
});

const categoriesLoadSuccess = (categories) => ({
	type: actionTypes.CATEGORIES_LOAD_SUCCESS,
	payload: categories,
});

const categoriesLoadError = (errorMessage) => ({
	type: actionTypes.CATEGORIES_LOAD_ERROR,
	payload: errorMessage,
});


export default {
	categoriesLoadStart,
	categoriesLoadSuccess,
	categoriesLoadError,
};