import apiCategory from "../helpers/apiCategory";
import api from '../helpers/api'
import currentLocale from '../helpers/locale'

class CategoriesService {
	getAllCategories = () => api().get("category/all");
	getProductByCategory = (id) => apiCategory().get(`category/show/${id}`,currentLocale.lang);
}

export default new CategoriesService();