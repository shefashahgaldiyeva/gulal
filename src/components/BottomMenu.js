import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/BottomMenu.module.css'
import {BsBasket2} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'
import { BiCategory } from 'react-icons/bi'

function BottomMenu() {
    return (
        <div className={styles.bottomMenu}>
            <div className={styles.bottomMenuInner}>
                <Link to='/'>
                    <GoHome/>
                    <span>Ana Səhifə</span>
                </Link>
                 <Link to='/category/all'>
                    <BiCategory/>
                    <span>Kateqoriyalar</span>
                </Link>
                 <Link to='/Sebet'>
                    <BsBasket2/>
                    <span>Səbət</span>
                </Link>
                 <Link to='/Hesabim'>
                    <FaRegUserCircle/>
                    <span>Hesabım</span>
                </Link>
            </div>
        </div>
    )
}

export default BottomMenu
