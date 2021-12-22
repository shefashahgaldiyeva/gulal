import api from "../helpers/api";

class GuestService {
    guestSetToken = () => api().post(`guest/setToken`);
    guestAddToCart = (params) => api().post(`guest/addToCart`, params);
	guestGetCart = (guestToken) => api().post(`guest/getCart`, guestToken);
	guestIncrement = (params) => api().post(`guest/plusCart`, params);
	guestDecrement = (params) => api().post(`guest/minusCart`, params);
	guestDeleteCart = (params) => api().post(`guest/cartDelete`, params);

}

export default new GuestService();
