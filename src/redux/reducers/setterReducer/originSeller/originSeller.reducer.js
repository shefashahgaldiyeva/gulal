const initialState = {
	settingOrigin : true,
	setOrigin: null,
	originError: null,
}; 

const setOriginReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "SET_ORIGIN_LOAD_START":
			return {
				...state,
				settingOrigin: true,
				setOrigin: null,
				originError: null,
			};

		case "SET_ORIGIN_SUCCESS":
			return {
				...state,
				settingOrigin: false,
				setOrigin: payload,
			};

		case "SET_ORIGIN_ERROR_MESSAGE":
			return {
				...state,
				settingOrigin: false,
				originError: payload,
			};
		default:
			return state;
	}
};

export default setOriginReducer;