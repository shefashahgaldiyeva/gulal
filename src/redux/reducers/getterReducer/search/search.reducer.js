import actionTypes from "./search.actionTypes";
import initialState from "./search.initialState";


const getSearch = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_SEARCH_LOAD_START:
			return {
				...state,
				gettingSearch: true,
				getedSearch: null,
				getSearchErrorMessage: null,
			};

		case actionTypes.SET_SEARCH_SUCCESS:
			return {
				...state,
				gettingSearch: false,
				getedSearch: payload,
			};

		case actionTypes.ERROR_SEARCH_MESSAG:
			return {
				...state,
				gettingSearch: false,
				getSearchErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default getSearch;