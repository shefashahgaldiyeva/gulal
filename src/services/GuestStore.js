import { observable , action ,makeAutoObservable } from 'mobx';
import jwt_decode  from 'jwt-decode';
import CryptoJS from 'crypto-js';
import sign from 'jwt-encode';


class GuestStore{
    appState = null;

    constructor(){
        makeAutoObservable(this,{
            appState: observable,
            saveToken: action,
            getToken: action
        });
    }

    saveGuestToken = (appState) => {
        try 
        {
            localStorage.setItem('guestToken',CryptoJS.AES.encrypt(sign(appState,"secret"),"udemy-laravel-js").toString());
            this.getGuestToken();
        }
        catch (e) {
            console.log(e);
        }
    }

    getGuestToken = () => {
        try {
            const appStateData = localStorage.getItem("guestToken");
            if(appStateData){
                var bytes = CryptoJS.AES.decrypt(appStateData, 'udemy-laravel-js');
                var originalText = bytes.toString(CryptoJS.enc.Utf8);
                this.appState = jwt_decode(originalText);
            }
            else 
            {
                this.appState = null;
            }
            return this.appState
        }
        catch(e) {
            console.log(e);
        }
    }

    removeToken = () => {
        localStorage.removeItem("guestToken");
        this.appState = null;
    }
}

export default new GuestStore();