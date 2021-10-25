import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import styles from '../css/Header.module.css'
import '../css/Pure.css'
import {BsSearch} from 'react-icons/bs'
import {BsSuitHeart} from 'react-icons/bs'
import {BsBasket2} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsBell} from 'react-icons/bs'
// import {BsSearch} from 'react-icons/bs'
import logo from '../img/logo.jpg'
import { SiIterm2 } from 'react-icons/si'

function Header() {

    const bucket = useSelector(state=>state.bucketReducer)
    // console.log(bucket)

    const [isPassive, setPassive] = useState(false)
    const toogleClass = () => {
        setPassive(!isPassive);
    }



    return (
        <header>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'><img src={logo}/></Link>
            </div>
            <div className={styles.right}>
            <div className={styles.searchCart}>
                <label onClick={toogleClass} for='search'><BsSearch/></label>
                <input className={isPassive ? 'passive' : 'active'} name='search' type="text" placeholder='Axtarış et...'/>
            </div>
            <ul>
                <li><Link to='/Sevimliler'><span className={styles.heart}><BsSuitHeart/></span></Link></li>
                <li><Link to='/Sebet'><span  className={styles.pocket}><BsBasket2/></span><span className={styles.count}>{bucket.length}</span></Link></li>
                <li><Link to='/Daxil-ol' className={styles.myProfile} href='/DaxilOl'><FaRegUserCircle/>Daxil ol</Link></li>
                <li><span><BsBell/></span></li>
            </ul>
            </div>
            </div>
                <div className={styles.bottom}>
                    <ul>
                        <li><Link to='/Butun-Kateqoriyalar'>Bütün Kateqoriyalar</Link></li>
                        <li><Link to='/Tulpan-Buketleri'>Tülpan Buketləri</Link></li>
                        <li><Link to='/Ucuz-Guller'>Ucuz Güllər</Link></li>
                        <li><Link to='/Buketler'>Buketlər</Link></li>
                        <li><Link to='/Guller'>Güllər</Link></li>
                        <li><Link to='/101-Qızılgul'>101 Qızılgül</Link></li>
                        <li><Link to='/Ofis-Bitkileri'>Ofis Bitkiləri</Link></li>
                        <li><Link to='/8-Mart'>8 Mart</Link></li>
                        <li><Link to='/En-Çox-Satılanlar'>Ən Çox Satılanlar</Link></li>
                    </ul>
                </div>
            </header>
    )
}

export default Header;
