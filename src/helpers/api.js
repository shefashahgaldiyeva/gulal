import axios from "axios";

const api = (token = null) => {
	// const  {REACT_APP_API_URL}  = process.env;
	const header = {
		'X-localization': localStorage.getItem('locale'),
		// Authorization: `Bearer ${token}`                                                          
	}
	if(token && typeof(token) === 'string'){
		header.Authorization = `Bearer ${token}`
	}

	const axiosInstance = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/',
		responseType: "json",
		headers: header,
	});
	return axiosInstance ;
};

export default api;