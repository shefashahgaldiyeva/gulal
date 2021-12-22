const initialState = {
	gettingDetail : true,
	productDetail: null,
	detailErrorMessage: null,
}; 

const productDetailReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case "DETAIL_LOAD_START":
			return {
				...state,
				gettingDetail: true,
				productDetail: null,
				detailErrorMessage: null,
			};

		case "DETAIL_SUCCESS":
			return {
				...state,
				gettingDetail: false,
				productDetail: payload,
			};

		case "DETAIL_ERROR_MESSAGE":
			return {
				...state,
				gettingDetail: false,
				detailErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default productDetailReducer;