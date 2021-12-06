import actionTypes from "./category.actionTypes";
import initialState from "./category.initialState";


const categoriesReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case actionTypes.GET_CATEGORY_LOAD_START:
			return {
				...state,
				gettingCategory: true,
				categories: null,
				errorMessage: null,
			};

		case actionTypes.GET_CATEGORY_SUCCESS:
			return {
				...state,
				gettingCategory: false,
				categories: payload,
			};

		case actionTypes.ERROR_CATEGORY_MESSAGE:
			return {
				...state,
				gettingCategory: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default categoriesReducer;