import React,{useState, useEffect} from 'react'
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


function Header() {

    const bucket = useSelector(state=>state.bucketReducer)
    const category = useSelector(state=>state.allCategoriesReducer)
    console.log(category)
    // console.log(bucket)

    const [isPassive, setPassive] = useState(false)
    const toogleClass = () => {
        setPassive(!isPassive);
    }

    const [showMenu, setShowMenu] = useState(true)
    function toogleButton(e){
        if (showMenu) {
            setShowMenu(!showMenu)
            console.log(!showMenu)
        } else {
            setShowMenu(!showMenu)
            console.log(!showMenu)
        }
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
                    <input className={isPassive ? 'passive' : 'activee'} name='search' type="text" placeholder='Axtarış et...'/>
                </div>
                <ul className={styles.ul1}>
                    <li><Link to='/Sevimliler'><span className={styles.heart}><BsSuitHeart/></span></Link></li>
                    <li><Link to='/Sebet'><span  className={styles.pocket}><BsBasket2/></span><span className={styles.count}>{bucket.length}</span></Link></li>
                    <li>
                        <div onClick={()=>toogleButton()} id='menu-button' className={styles.menuButton}>
                            <div className={!showMenu ? styles.child1 : styles.menuButtonLine}></div>
                            <div className={!showMenu ? styles.child2 : styles.menuButtonLine}></div>
                            <div className={!showMenu ? styles.child3 : styles.menuButtonLine}></div>
                        </div>
                        <div id='openMenu' className={!showMenu ? styles.showMenu : styles.openMenu}>
                            <ul>
                                <li key={1}><Link to='/Butun-Kateqoriyalar'>Bütün Kateqoriyalar</Link></li>
                                <li key={2}><Link to='/Tulpan-Buketleri'>Tülpan Buketləri</Link></li>
                                <li key={3}><Link to='/Ucuz-Guller'>Ucuz Güllər</Link></li>
                                <li key={4}><Link to='/Buketler'>Buketlər</Link></li>
                                <li key={5}><Link to='/Guller'>Güllər</Link></li>
                                <li key={6}><Link to='/101-Qızılgul'>101 Qızılgül</Link></li>
                                <li key={7}><Link to='/Ofis-Bitkileri'>Ofis Bitkiləri</Link></li>
                                <li key={8}><Link to='/8-Mart'>8 Mart</Link></li>
                                <li key={9}><Link to='/En-Çox-Satılanlar'>Ən Çox Satılanlar</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to='/Daxil-ol' className={styles.myProfile} href='/DaxilOl'><FaRegUserCircle/>Daxil ol</Link></li>
                    <li><span><BsBell/></span></li>
                </ul>
            </div>
            </div>
            <div className={styles.bottom}>
                <ul>
                    <li  key={10}><Link to='/Butun-Kateqoriyalar'>Bütün Kateqoriyalar</Link></li>
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
