import api from "../helpers/api";

class ProductsService {
	getAllProducts = () => api().get("product/all");
	getProductByCategory = (catId,params) => api().get(`category/productbycategory/${catId}`,{params});
	getProductDetail = (id) => api().get(`product/show/${id}`);
	getDiscountProducts = () => api().get(`product/discount`);
	ProductAddToCart = (params) => api().post(`auth/addtocart`, params);
	GetCart = () => api().get(`auth/getcart`);
	incrementQuantity = (id) => api().post(`auth/pluscart`, id);
	decrementQuantity = (id) => api().post(`auth/minuscart`, id);
	getCartDetail = () => api().post('auth/getcartquantity')
	cartDelete = (id) => api().post('auth/cartdelete', id)
	getSearch = (params) => api().get(`product/search/${params}`)
	getNewProducts = () => api().get(`product/latest`)
}

export default new ProductsService();