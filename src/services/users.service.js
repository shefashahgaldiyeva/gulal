import api from "../helpers/api";

class UsersService {
    getUser = () => api().get(`auth/user`);
    register = (params) => api().post(`register`, params);
    logout = () => api().post(`auth/logout`);
    updateUser = (params) => api().post(`auth/update`, params);
}

export default new UsersService();
