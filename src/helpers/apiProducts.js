import axios from "axios";

const apiProducts = () => {
const  {REACT_APP_API_URL}  = process.env;

	const axiosInstance = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/',
		responseType: "json",
	});
	return axiosInstance;
};

export default apiProducts;