import React, {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'
import { loadUsersAsync } from '../redux/reducers/users/users.thunks'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'
import { Redirect } from 'react-router';
import AuthStore from '../services/AuthStore';


function Login() {

 
    const dispatch = useDispatch()
    const token = useSelector(state => state.tokenReducer)
    // const users = useSelector(state => state.users)
    // console.log(users)
    const submit = (e) =>{
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const article = { email: email, password: password}
        axios.post('http://127.0.0.1:8000/api/login', article)
        .then(response =>{
            AuthStore.saveToken(response.data.token)
            window.location.reload()
        })
    }
    if(AuthStore.appState){
        return <Redirect to='/'/>
    }
    console.log(AuthStore.appState)
    
    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Daxil ol</h2>
                    <input id='email' required type='text' placeholder='İstifadəçi adı və ya e-poçt...'/>
                    <input id='password' required type='password' placeholder='Şifrə...'/>
                        <button  onClick={(e)=>submit(e)}>Daxil ol</button>
                    <p>və ya</p>
                    <div>
                        <span><a href='https://www.google.com'><FcGoogle/></a></span>
                        <span><a href='https://www.facebook.com'><FaFacebookF/></a></span>
                    </div>
                    <p>ilə daxil olun</p>
                    <span className={styles.signUp}><Link to='/Sifariş-et'>Qonaq kimi davam et</Link></span>
                    <span className={styles.signUp}><Link to='/Qeydiyyat'>Qeydiyyatdan keç</Link></span>
                </div>
                <div className={styles.right}>
                    <img src={img}/>
                    <div className={styles.bgColor}></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
