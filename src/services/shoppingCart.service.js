<<<<<<< HEAD
// import apiProducts from "../helpers/apiProducts";
=======
>>>>>>> master
import api from "../helpers/api";

class ShoppingCart {
	addToCartProduct = (params) => api().post(`auth/addtocart`, params);
	GetCart = () => api().get(`auth/getcart`);
	incrementQuantity = (id) => api().post(`auth/pluscart`, id);
	decrementQuantity = (id) => api().post(`auth/minuscart`, id);
	// getCartDetail = () => api().post('auth/getcartquantity')
	cartDelete = (id) => api().post('auth/cartdelete', id)
}

<<<<<<< HEAD
export default new ShoppingCart();
=======
export default new ShoppingCart(); 
>>>>>>> master
