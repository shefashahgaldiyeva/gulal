import React from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
// import styled from '../css/SignUp.module.css'
import styles from '../css/Login.module.css'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'
import { connectAdvanced } from 'react-redux'
import UsersService from '../services/users.service'
import  {registerAsync}  from '../redux/reducers/users/users.thunks'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AuthStore from '../services/AuthStore'
import GuestStore from '../services/GuestStore'

function SignUp() {

    const dispatch = useDispatch()
    const {isLoading, registered, errorMessage} = useSelector(state => state.registerReducer)

    const submit = () =>{ 
        const fullname = document.getElementById('fullname').value
        const phone = document.getElementById('tel').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirmPassword').value
        const article = { 
            fullname: fullname,
            phone: phone,
            email: email, 
            password: password,
            password_confirmation: confirmPassword
        };
        dispatch(registerAsync(article)); 
    }
    console.log('registered =>', registered)
    if(!isLoading && registered.operation == true && registered.token){ 
        AuthStore.saveToken(registered.token)
        GuestStore.removeToken()
        window.location.reload()
    }
    if(AuthStore.appState){
        return <Redirect to='/'/> 
    }

    return (
    <div className={styles.login}>
        <div className={styles.loginInner}>
            <div className={styles.left} style={{paddingBottom: '2rem'}}>
                <h2>Qeydiyyat</h2>
                <input id='fullname' required type='text' placeholder='Ad və soyadınız...'/>
                {
                    errorMessage && errorMessage.response.data.errors.fullname ? <span>{errorMessage.response.data.errors.fullname[0]} </span> : null
                }
                <input id='tel'  required type='tel' placeholder='Əlaqə nömrəniz...'/>
                {
                    errorMessage && errorMessage.response.data.errors.phone ? <span>{errorMessage.response.data.errors.phone[0]} </span> : null
                }
                <input id='email' required type='email' placeholder='E-Poçt ünvanınız...'/>
                {
                    errorMessage && errorMessage.response.data.errors.email ? <span>{errorMessage.response.data.errors.email[0]} </span> : null
                }
                <input id='password' required type='password' placeholder='Yeni şifrə...'/>
                {
                    errorMessage && errorMessage.response.data.errors.password ? <span>{errorMessage.response.data.errors.password[0]} </span> : null
                }
                <input id='confirmPassword' required type='password' placeholder='Şifrəni təkrarlayın...'/>
                <button onClick={()=>submit()} type='submit'>Qeydiyyatı tamamla</button>
            </div>
            <div className={styles.right}>
                <img src={img}/>
                <div className={styles.bgColor}></div>
            </div>
        </div>
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Qeydiyyat uğurludur!
        </Alert>
        </Snackbar> */}
    </div>
    )
}

export default SignUp;
