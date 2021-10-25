import React from 'react'
import styles from '../css/WhoWeAre.module.css'
import {VscRocket} from 'react-icons/vsc'
import {FiStar} from 'react-icons/fi'
import {GiBackwardTime} from 'react-icons/gi'
import {BsChatDots} from 'react-icons/bs'
import {GoCreditCard} from 'react-icons/go'

function WhoWeAre() {
    return (
        <div className={styles.whoWeAre}>
            <div>
                <h2>Niyə biz?</h2>
            </div>
            <div className={styles.whoWrapper}>
                <div className={styles.who}>
                    <VscRocket/>
                    <div>
                        <h5>Çatdırılma</h5>
                        <p>Bakı daxili 5 AZN</p>
                    </div>
                </div>
                <div className={styles.who}>
                    <FiStar/>
                    <div>
                        <h5>Yüksək Keyfiyyət</h5>
                        <p>Daimi yenilənən məhsullar</p>
                    </div>
                </div>
                <div className={styles.who}>
                    <GiBackwardTime/>
                    <div>
                        <h5>24 Saat</h5>
                        <p>Hər zaman xidmətinizdə</p>
                    </div>
                </div>
                <div className={styles.who}>
                    <BsChatDots/>
                    <div>
                        <h5>Müştəri Dəstəyi</h5>
                        <p>Müştəri dəstəyi altyazı</p>
                    </div>
                </div>
                <div className={styles.who}>
                    <GoCreditCard/>
                    <div>
                        <h5>Onlayn Ödəniş</h5>
                        <p>Online ödəniş altyazı</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WhoWeAre;
