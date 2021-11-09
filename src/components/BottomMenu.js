import React from 'react'
import styles from '../css/BottomMenu.module.css'
import {BsBasket2} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'
import { BiCategory } from 'react-icons/bi'

function BottomMenu() {
    return (
        <div className={styles.bottomMenu}>
            <div className={styles.bottomMenuInner}>
                <div>
                    <GoHome/>
                    <span>Ana Səhifə</span>
                </div>
                <div>
                    <BiCategory/>
                    <span>Kateqoriyalar</span>
                </div>
                <div>
                    <BsBasket2/>
                    <span>Səbət</span>
                </div>
                <div>
                    <FaRegUserCircle/>
                    <span>Hesabım</span>
                </div>
            </div>
        </div>
    )
}

export default BottomMenu
