import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import img from '../img/login.png'


function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Daxil ol</h2>
                    <input required type='text' placeholder='İstifadəçi adı və ya e-poçt...'/>
                    <input required type='text' placeholder='Şifrə...'/>
                    <button>Daxil ol</button>
                    <p>və ya</p>
                    <div>
                        <span><a href='https://www.google.com'><FcGoogle/></a></span>
                        <span><a href='https://www.facebook.com'><FaFacebookF/></a></span>
                    </div>
                    <p>ilə daxil olun</p>
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
