const initialState = {
	sliderLoading : true,
	containerSlider: null,
	sliderError: null,
}; 

const containerSliderReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "CONTAINER_SLIDER_LOAD_START":
			return {
				...state,
				sliderLoading: true,
				containerSlider: null,
				sliderError: null,
			};

		case "CONTAINER_SLIDER_SUCCESS":
			return {
				...state,
				sliderLoading: false,
				containerSlider: payload,
			};

		case "CONTAINER_SLIDER_ERROR_MESSAGE":
			return {
				...state,
				sliderLoading: false,
				sliderError: payload,
			};
		default:
			return state;
	}
};

export default containerSliderReducer;