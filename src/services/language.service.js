import api from "../helpers/api";

class LanguageService {
    // setLang = (lang) => api().get(`lang/${lang}`);
    getLang = () => api().get(`/lang`).then(res => localStorage.setItem('locale',res.data.lang));
}

export default new LanguageService();