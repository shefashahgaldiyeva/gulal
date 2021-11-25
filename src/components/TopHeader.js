import React from 'react'
import { useState, useEffect } from "react";
import styles from '../css/TopHeader.module.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {FiTruck} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {SiTinyletter} from 'react-icons/si'

// import {SiTinyletter} from 'react-icons/si'
// import letter from '../img/letter.png'
// import pin from '../img/pin.png'
// import truck from '../img/truck.png'

function TopHeader(props) {
    // const [language, setLanguage] = useState(() => {
    //     const saved = localStorage.getItem("language");
    //     console.log(saved)
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });
    // useEffect(() => {
    //     localStorage.setItem("language", JSON.stringify(language));
    // }, [language]);

    
    // const handleChangeLang = (e) => {
    //     setLanguage(e.target.attributes.language.value)
    //     let lang = document.getElementById('lang')
    //     lang.innerText = e.target.innerText
    //     console.log(lang.nextElementSibling.getElementsByTagName('a'))
    //     console.log(e.target.attributes.language.value)
    // }

    return (
        <div className={styles.topHeader}>
            <div className={styles.topHeaderInner}>
                <div className={styles.left}>
                    <a href='tel:+994506001133'>
                        <BsFillTelephoneFill/>
                        +994506001133
                    </a>
                    <a href="mailto:support@gulal.az">
                        <SiTinyletter/>
                        support@gulal.az
                    </a>
                </div>
                <div className={styles.right}>
                    <div>
                        <FiMapPin/>
                        12 Aleksandr Puşkin, Bakı
                    </div>
                    <div>
                        <FiTruck/>
                        Ünvana Çatdırılma            
                    </div>
                    <div className={styles.langbar}>
                        <span className={styles.before}>₼ AZN <AiFillCaretDown/></span>
                        <div className={styles.activeDropdown}>
                            <a href='#'>$ USD</a>
                            <a href='#'>₽ RUB</a>
                        </div>
                    </div>
                    <div className={styles.langbar}>
                        <span id='lang'>{ props.lang ? props.lang.toUpperCase() : 'AZ' } <AiFillCaretDown/></span>
                        <div className={styles.activeDropdown}>
                            <Link to='/lang/az' style={!props.lang || props.lang == 'az' ? { display: 'none' } : null}>Az</Link>
                            <Link to='/lang/en' style={props.lang == 'en' ? { display: 'none' } : null}>En</Link>
                            <Link to='/lang/ru' style={props.lang == 'ru' ? { display: 'none' } : null}>Ru</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;