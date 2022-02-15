import api from "../helpers/api";

class Main {
	subscribe = (params) => api().post(`/follow`, params);
	saleProductCheck = (params) => api().post(`/sale`, params);
	getSlider = () => api().get(`/sliders`);
	getOrders = () => api().get(`auth/shopping`);
	setOrigin = (lat,lng) => api().post(`/origin/${lat}/${lng}`);
}

export default new Main();