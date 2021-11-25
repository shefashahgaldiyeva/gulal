import React from 'react'
import axios from 'axios'
// import styled from '../css/SignUp.module.css'
import styles from '../css/Login.module.css'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'
import { connectAdvanced } from 'react-redux'
import usersService from '../services/users.service'

function SignUp() {

    const submit = () =>{
        const fullname = document.getElementById('fullname').value
        const phone = document.getElementById('tel').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        // const confirmPassword = document.getElementById('confirmPassword').value
        const article = { 
            fullname: fullname,
            phone: phone, 
            email: email, 
            password: password, 
            // confirmPassword: confirmPassword
        };
        // usersService.register(article)
        console.log(usersService.register(article))
    }

    return (
        <div className={styles.login}>
        <div className={styles.loginInner}>
            <div className={styles.left} style={{paddingBottom: '2rem'}}>
                <h2>Qeydiyyat</h2>
                <input id='fullname' required type='text' placeholder='Ad və soyadınız...'/>
                <input id='tel'  required type='tel' placeholder='Əlaqə nömrəniz...'/>
                <input id='email' required type='email' placeholder='E-Poçt ünvanınız...'/>
                <input id='password' required type='password' placeholder='Yeni şifrə...'/>
                <input id='confirmPassword' required type='password' placeholder='Şifrəni təkrarlayın...'/>
                <button onClick={()=>submit()} type='submit'>Qeydiyyatı tamamla</button>
                {/* <span className={styles.signUp}><Link to='/Qeydiyyat'>Qeydiyyatdan keç</Link></span> */}
            </div>
            <div className={styles.right}>
                <img src={img}/>
                <div className={styles.bgColor}></div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
