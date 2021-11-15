import apiProducts from "../helpers/apiProducts";

class ProductsService {
	getAllProducts = () => apiProducts().get("product/all");
}

export default new ProductsService();