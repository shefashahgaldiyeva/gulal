import Main from "../../../../services/main.service";

export const setOriginAsync = (lat,lng) => (dispatch) => {
    console.log(lat,lng)
	dispatch({
        type: "SET_ORIGIN_LOAD_START",
    });

	Main.setOrigin(lat,lng)
		.then((response) => dispatch({
            type: "SET_ORIGIN_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "SET_ORIGIN_ERROR_MESSAGE",
            payload: error,
        }));
}
