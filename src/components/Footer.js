import React from 'react'
import styles from '../css/Footer.module.css'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import visa from '../img/visa.png'
import masterCard from '../img/mastercard.png'
import paypal from '../img/paypal.png'
import { subscribeAsync } from '../redux/reducers/setterReducer/subscribe/subscribe.thunk'
import AuthStore from '../services/AuthStore';


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
                                    <li><Link to='/BizdenAlinRaziQalin'>Haqqımızda</Link></li>
                                    <li><Link to='#'>FAQ</Link></li>
                                    <li><Link to='/category/all'>Məhsullar</Link></li>
                                    <li><Link to='#'>Bloq</Link></li>
                                    <li><Link to='/Qeydiyyat'>Qeydiyyat</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3>MÜŞTƏRİLƏR ÜÇÜN</h3>
                                <ul>
                                    <li><Link to={AuthStore.appState ? '/Hesabim' : '/Qeydiyyat'}>Hesabım</Link></li>
                                    <li><Link to='/Sifarislerim'>Sifarişlərim</Link></li>
                                    {/* <li><Link to='#'>Məhsul izləmə</Link></li> */}
                                    <li><Link to='/Sevimliler'>Sevimli listim</Link></li>
                                    <li><Link to='#'>Qaydalar və Gizlilik siyasəti</Link></li>
                                    <li><Link to='/Sebet'>Səbət</Link></li>
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
                    <div>Gülal.az - © 2022 Bütün hüquqlar qorunur.</div>
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
