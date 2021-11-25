import axios from "axios";

const api = () => {
	// const  {REACT_APP_API_URL}  = process.env;

	const axiosInstance = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/',
		responseType: "json",
		headers: {
			'X-localization': localStorage.getItem('locale'),
			// Authorization: `Bearer ${localStorage.getItem('token')}`                                                          
		}
	});
	return axiosInstance ;
};

export default api;