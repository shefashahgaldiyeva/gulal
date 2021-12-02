import actionTypes from "./products.actionTypes";
import initialState from "./decrement.initialState";
    
const decrementReducer = (state = initialState, { type, payload }) => {
	switch (type) {
				case actionTypes.DECREMENT_LOAD_START:

					return {
						...state,
						decrement: false,
						errorMessage: null,
					};
		
				case actionTypes.DECREMENT_LOAD_SUCCESS:
		
				return {        
						...state,
						decrement: true,
					};
		
				case actionTypes.DECREMENT_LOAD_ERROR:
		
				return {
						...state,
						decrement: false,
						errorMessage: payload,
					};

		default:
			return state;
	}
};

export default decrementReducer;