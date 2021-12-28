import Main from "../../../../services/main.service";

export const getContainerSliderAsync = () => (dispatch) => {
	dispatch({
        type: "CONTAINER_SLIDER_LOAD_START",
    });

	Main.getSlider()
		.then((response) => dispatch({
            type: "CONTAINER_SLIDER_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "CONTAINER_SLIDER_ERROR_MESSAGE",
            payload: error,
        }));
}
