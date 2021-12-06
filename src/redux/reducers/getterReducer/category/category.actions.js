import actionTypes from "./category.actionTypes";

const getCategory = () => ({
	type: actionTypes.GET_CATEGORY_LOAD_START,
});

const setCategory = (categories) => ({
	type: actionTypes.GET_CATEGORY_SUCCESS,
	payload: categories,
});

const errorCategory = (errorMessage) => ({
	type: actionTypes.ERROR_CATEGORY_MESSAGE,
	payload: errorMessage,
});


export default {
	getCategory,
	setCategory,
	errorCategory,
<<<<<<< HEAD
};
=======
}; 
>>>>>>> master
