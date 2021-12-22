import ProductsService from "../../../../services/products.service";

export const getProductDetailAsync = (id) => (dispatch) => {
	dispatch({
        type: "DETAIL_LOAD_START",
    });

	ProductsService.getProductDetail(id)
		.then((response) => dispatch({
            type: "DETAIL_SUCCESS",
	        payload: response.data,
        }))
		.catch((error) => dispatch({
            type: "DETAIL_ERROR_MESSAGE",
            payload: error,
        }));
}
