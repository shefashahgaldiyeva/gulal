import apiProducts from "../helpers/apiProducts";

class ProductsService {
	getAllProducts = () => apiProducts().get("product/all");
	getProductByCategory = (catId) => apiProducts().get(`category/productbycategory/${catId}`);
}

export default new ProductsService();