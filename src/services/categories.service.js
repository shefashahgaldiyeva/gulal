import apiCategory from "../helpers/apiCategory";

class CategoriesService {
	getAllCategories = () => apiCategory().get("category/all");
	getProductByCategory = (id) => apiCategory().get(`category/show/${id}`);
}

export default new CategoriesService();