import React from 'react'
import styles from '../css/Footer.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import visa from '../img/visa.png'
import masterCard from '../img/mastercard.png'
import paypal from '../img/paypal.png'
import { subscribeAsync } from '../redux/reducers/setterReducer/subscribe/subscribe.thunk'


function Footer() {

    const dispatch = useDispatch()
    function handleSubmit(){
        let params = document.getElementById('subscribe').value
        dispatch(subscribeAsync({email:params}))
        console.log({email:params})
    }
    // const {subscribeLoad,subscribeSuccess,subscribeErrorMessage} = useSelector(state => state.subscribeReducer)
    // if(!subscribeLoad && subscribeSuccess){
    //     console.log(subscribeSuccess)
    // }
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopLeft}>
                        <div>
                            <div>
                                <h3>SÜRƏTLİ KEÇİD</h3>
                                <ul>
                                    <li><a herf='#'>Haqqımızda</a></li>
                                    <li><a herf='#'>FAQ</a></li>
                                    <li><a herf='#'>Məhsullar</a></li>
                                    <li><a herf='#'>Bloq</a></li>
                                    <li><a herf='#'>Qeydiyyat</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>MÜŞTƏRİLƏR ÜÇÜN</h3>
                                <ul>
                                    <li><a herf='#'>Hesabım</a></li>
                                    <li><a herf='#'>Sifarişlərim</a></li>
                                    <li><a herf='#'>Məhsul izləmə</a></li>
                                    <li><a herf='#'>Qaydalar və Gizlilik siyasəti</a></li>
                                    <li><a herf='#'>Səbət</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <span>Bizimlə əlaqə: </span>
                            <div className={styles.icons}>
                                <a href='#'><GrFacebookOption/></a>
                                <a href='#'><AiOutlineTwitter/></a>
                                <a href='#'><AiOutlineInstagram/></a>
                                <a href='#'><AiOutlineYoutube/></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerTopRight}>
                       <div className={styles.footerTopRightInner}>
                            <span>Ən son yenilikləri və təklifləri əldə etmək üçün abunə olun</span>
                            <input id='subscribe' type='email' placeholder='e-Poçt ünvanınızı yazın...'/>
                            <button onClick={() => handleSubmit()} title='Abunə olun' type='submit'>Abunə olun</button>
                       </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div>Logo</div>
                    <div>Gülal.az - © 2021 Bütün hüquqlar qorunur.</div>
                    <div className={styles.footerCard}>
                        <span>Ödəniş üsulları:</span>
                        <img src={visa}/>
                        <img src={masterCard}/>
                        <img src={paypal}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
