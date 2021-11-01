import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'


function Login() {

 
        // fetch('http://127.0.0.1:8000/api/login')
        // .then(res => res.json())
        // .then(response => console.log(response))
    
    
   
    
    // const [state, setstate] = useState(initialState)
    const submit = () =>{
        // const [tokenn, setTokenn] = useState()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const article = { email: email, password: password};
        axios.post('http://127.0.0.1:8000/api/login', article)
        .then(response => 
        axios.get('http://127.0.0.1:8000/api/user', { headers: { Authorization: `Bearer ${response.data.token}` }})
        .then(res => console.log(res))
        )
        // .then(response => response.data.succses == true ? setToken(response.data.succses) : null);
        
    }

    

        // useEffect(() => {
        //     axios.get('http://127.0.0.1:8000/api/user')
        //     .then(response =>console.log(response));
        // }, [])

    
   
    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Daxil ol</h2>
                    <input id='email' required type='text' placeholder='İstifadəçi adı və ya e-poçt...'/>
                    <input id='password' required type='password' placeholder='Şifrə...'/>
                    <button onClick={()=>submit()}>Daxil ol</button>
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
