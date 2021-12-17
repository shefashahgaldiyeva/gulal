import api from "../helpers/api";

class Main {
	subscribe = (params) => api().post(`/follow`, params);
	saleProductCheck = (params) => api().post(`/sale`, params);
}

export default new Main();