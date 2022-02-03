import React from 'react'
import styles from '../css/NotFound.module.css'

function NotFound() {
    return (
        <div  className={styles.NotFoundWrapper}>
           <span className={styles.NotFound}>* Səhifə | Tapılmadı *</span>
        </div>
    )
}

export default NotFound;
