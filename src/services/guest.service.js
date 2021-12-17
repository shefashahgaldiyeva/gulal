import api from "../helpers/api";

class GuestService {
    guestSetToken = () => api().post(`guest/setToken`);
    guestAddToCart = (params) => api().post(`guest/addToCart`, params);
	guestGetCart = () => api().get(`guest/getCart`);

}

export default new GuestService();
