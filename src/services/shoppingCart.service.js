import api from "../helpers/api";

class ShoppingCart {
	addToCartProduct = (params) => api().post(`auth/addtocart`, params);
	// GetCart = (route) => api().get(`/{route}/getcart`);
	GetCart = () => api().get(`auth/getcart`);
	incrementQuantity = (id) => api().post(`auth/pluscart`, id);
	decrementQuantity = (id) => api().post(`auth/minuscart`, id);
	// getCartDetail = () => api().post('auth/getcartquantity')
	cartDelete = (id) => api().post('auth/cartdelete', id)
}

export default new ShoppingCart(); 