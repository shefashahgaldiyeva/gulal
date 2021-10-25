import React from 'react'
// import styled from '../css/SignUp.module.css'
import styles from '../css/Login.module.css'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'

function SignUp() {
    return (
        <div className={styles.login}>
        <div className={styles.loginInner}>
            <div className={styles.left} style={{paddingBottom: '2rem'}}>
                <h2>Qeydiyyat</h2>
                <input required type='text' placeholder='Ad və soyadınız...'/>
                <input required type='tel' placeholder='Əlaqə nömrəniz...'/>
                <input required type='email' placeholder='E-Poçt ünvanınız...'/>
                <input required type='password' placeholder='Yeni şifrə...'/>
                <input required type='password' placeholder='Şifrəni təkrarlayın...'/>
                <button type='submit'>Qeydiyyatı tamamla</button>
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
