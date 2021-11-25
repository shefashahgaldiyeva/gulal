// import apiProducts from "../helpers/apiProducts";
import api from "../helpers/api";

class ProductsService {
	getAllProducts = () => api().get("product/all");
	getProductByCategory = (catId,params) => api().get(`category/productbycategory/${catId}`,{params});
	getProductDetail = (id) => api().get(`product/show/${id}`);
	getDiscountProduct = () => api().get(`product/discount`);
}

export default new ProductsService();