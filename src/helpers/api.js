import axios from "axios";
import AuthStore from "../services/AuthStore";


const api = () => {
	// const  {REACT_APP_API_URL} = process.env;
	const header = {
		'X-localization': localStorage.getItem('locale'),
	}
	if(AuthStore.appState){
		header.Authorization = `Bearer ${AuthStore.appState}`
	}
	const axiosInstance = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/',
		responseType: "json",
		headers: header,
	});
	return axiosInstance ;
};

export default api;