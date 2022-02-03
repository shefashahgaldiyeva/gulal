import React from 'react';
import styles from '../css/Loader.module.css'
import { DisappearedLoading } from 'react-loadingg';

const Loader = () => <div className={styles.fullPage}><DisappearedLoading /></div>

export default Loader;