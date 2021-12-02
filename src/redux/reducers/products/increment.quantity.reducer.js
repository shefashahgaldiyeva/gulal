import actionTypes from "./products.actionTypes";
import initialState from "./increment.initialState";
    
const incrementReducer = (state = initialState, { type, payload }) => {
	switch (type) {
				case actionTypes.INCREMENT_LOAD_START:

					return {
						...state,
						increment: false,
						errorMessage: null,
					};
		
				case actionTypes.INCREMENT_LOAD_SUCCESS:
		
				return {        
						...state,
						increment: true,
					};
		
				case actionTypes.INCREMENT_LOAD_ERROR:
		
				return {
						...state,
						increment: false,
						errorMessage: payload,
					};

		default:
			return state;
	}
};

export default incrementReducer;