import api from "../helpers/api";

class Main {
	subscribe = (params) => api().post(`/follow`, params);
}

export default new Main();