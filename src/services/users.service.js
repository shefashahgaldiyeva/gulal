import apiClient from "../helpers/api";

class UsersService {
	getAllUsers = () => apiClient(userId).get(`auth/user/${userId}`);
}

export default new UsersService();