import api from "../helpers/api";

class UsersService {
    getUser = (token) => api(token).get(`auth/user`);
    register = (params) => api().post(`register`, params);
}

export default new UsersService();
