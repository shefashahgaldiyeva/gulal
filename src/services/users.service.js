import api from "../helpers/api";

class UsersService {
    getUser = () => api().get(`auth/user`);
    register = (params) => api().post(`register`, params);
}

export default new UsersService();
