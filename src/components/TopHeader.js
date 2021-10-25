import React from 'react'
import styles from '../css/TopHeader.module.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {FiTruck} from 'react-icons/fi'
import {SiTinyletter} from 'react-icons/si'
// import {SiTinyletter} from 'react-icons/si'
// import letter from '../img/letter.png'
// import pin from '../img/pin.png'
// import truck from '../img/truck.png'

function TopHeader() {
    return (
        <div className={styles.topHeader}>
            <div className={styles.topHeaderInner}>
                <div className={styles.left}>
                    <a href='tel:+994506001133'>
                        <BsFillTelephoneFill/>
                        +994506001133
                    </a>
                    <a href="mailto:support@buket.az">
                        <SiTinyletter/>
                        support@buket.az
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
                        <span>AZ <AiFillCaretDown/></span>
                        <div className={styles.activeDropdown}>
                            <a href='#'>EN</a>
                            <a href='#'>RU</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
