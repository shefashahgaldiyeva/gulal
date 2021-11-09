import React from 'react'
import styles from '../css/Arrow.module.css'
import {HiOutlineArrowUp} from 'react-icons/hi'


function Arrow() {
    return (
        <div>
            <a className={styles.arrow} href='#'><HiOutlineArrowUp/></a>
        </div>
    )
}

export default Arrow;
