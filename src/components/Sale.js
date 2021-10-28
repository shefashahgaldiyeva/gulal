import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../css/Sale.module.css'
import Card from '../components/Card'

function Sale() {

    const saleData = useSelector(state => state.saleProductData)

    return (
        <div className={styles.sale}>
            <div className={styles.saleInner}>
                <div className={styles.saleLeft}>
                    <h2>Endirimli <br/> məhsullar</h2>
                </div>
                <div className={styles.saleRight}>
                    {
                        saleData.map((item)=>(
                            <div className={styles.cardWrapper}>
                                <Card item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Sale;
