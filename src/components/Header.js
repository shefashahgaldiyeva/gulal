import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import "../css/Pure.css";
import { BsSearch } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsBasket2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import logo from "../img/logo.jpg";
import AuthStore from "../services/AuthStore";
import { BiLogOut } from "react-icons/bi";
import { logoutAsync } from "../redux/reducers/users/users.thunks";
import { getSearchAsync } from "../redux/reducers/getterReducer/search/search.thunk"
import { getProductDetailAsync } from "../redux/reducers/getterReducer/productDetail/productDetail.thunk";
import { display } from "@material-ui/system";

function Header(props) {

    const dispatch = useDispatch()
    const cats = props.cats
    const [isPassive, setPassive] = useState(false);
    const toogleClass = () => {
        setPassive(!isPassive);
    };
    const [showMenu, setShowMenu] = useState(true);
    function toogleButton(e) {
        if (showMenu) {
        setShowMenu(!showMenu);
        } else {
        setShowMenu(!showMenu);
        }
    }

    const isLogOut = useSelector((state) => state.logoutReducer);
    
    function logOut() {
        dispatch(logoutAsync());
    }
    if (isLogOut.logOut) {
		console.log(isLogOut.logOut)
        AuthStore.removeToken();
        window.location.href = "/";
    } 

    const {gettingProductInCart,productInCart,errorMessage} = useSelector(state=>state.getShoppingCart)
    const {gettingGuestCart,guestCart,guestError} = useSelector(state=>state.guestCartReducer)
    // if(!gettingGuestCart && guestCart && guestCart.data){
    //     console.log(guestCart.data.length)
    // }
    // if(!gettingProductInCart && productInCart){
    //     productInCart.data.map((item)=>{
    //         console.log(item.productName)
    //     })
    // }
    // useSelector(state=>console.log(state.getSearch))

    const {gettingSearch,getedSearch,getSearchErrorMessage} = useSelector(state => state.getSearch)
	// if(!gettingSearch && getedSearch){
	// 	getedSearch.data.map((item)=>{
	// 		console.log(item)
	// 	})
	// }
    function handleSearch(e){
     dispatch(getSearchAsync(e.target.value))
     	if(!gettingSearch && getedSearch && getedSearch.data.length>0){
            searchResult.style.display = 'inline-flex'
        }else{
        	searchResult.style.display = 'none'
        }
    }
   
	const { gettingDetail, productDetail, detailErrorMessage } = useSelector((state) => state.productDetailReducer);
	  if(!gettingDetail && productDetail){
		  console.log(productDetail)
	  }
    // useSelector((state) =>console.log(state.getSearch));
	//   useEffect(() => {
	// 	dispatch(getProductDetailAsync(productId));
	//   }, [productId]);

	let searchInput = document.getElementById('searchInput')
	let searchResult = document.getElementById('searchResult')
	document.addEventListener('click',(e)=>{
		if(e.composedPath().includes(searchInput)){
            searchInput.style.border = '1px solid #e4dad7'
            searchInput.style.boxShadow = '0px 9px 27px #e4dad7'
            if(searchResult.classList.contains(`${styles.searchList}`) ||
                searchResult.classList.contains(`${styles.searchListMin7}`)){
                    searchResult.style.display = 'inline-flex'
            }
		}else{
            searchResult.style.display = 'none'
            searchInput.style.border = '1px solid rgb(189, 187, 187)'
            searchInput.style.boxShadow = 'none'
		}
	})
    useEffect(()=>{
        if(!gettingSearch && getedSearch && getedSearch.data.length>0){
            searchResult.style.display = 'inline-flex'
        }
    })

    // let card = document.getElementById('button');
    // document.addEventListener('mousemove', function (e) {
    //     let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    //     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    //     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // });

  return (
    <header className={props.klas}>
      <div className={styles.header}>
        <div className={styles.logo}>
			<Link to="/">
				<img src={logo} />
			</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.searchCart}>
            <label onClick={toogleClass} htmlFor="search">
               <BsSearch />
            </label>
            <div id="searchWrapper" className={styles.searchWrapper}>
            <input
				id="searchInput"
				// className={isPassive ? "passive" : "activee"}
				className={"activee"}
				name="search"
				type="text"
				placeholder="Axtarış et..."
				onKeyUp = {(e)=>handleSearch(e)}
            />
            <ul
				id="searchResult"
                className={!gettingSearch && getedSearch ? (getedSearch.data.length > 7 ? styles.searchList : styles.searchListMin7) : styles.visible}
              >
                    {
                        !gettingSearch && getedSearch &&
                        getedSearch.data.map((item)=>(
                            <Link key={item.id} to={`/product/${item.slug}/${item.id}`} className={styles.searchListLi}>{item.name}</Link>
                        ))
                    }
            </ul>
            </div>
          </div>
          <ul className={styles.ul1}>
            <li>
              <Link to="/Sevimliler">
                <span className={styles.heart}>
                  <BsSuitHeart />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/Sebet">
                <span className={styles.pocket}>
                  <BsBasket2 />
                </span>
                <span className={styles.count}>{!gettingGuestCart && guestCart && guestCart.data ? guestCart.data.length : (!gettingProductInCart && productInCart && productInCart.data ?  productInCart.data.length : 0 )}</span>
              </Link>
            </li>
            <li>
              <div
                onClick={() => toogleButton()}
                id="menu-button"
                className={styles.menuButton}
              >
                <div className={!showMenu ? styles.child1 : styles.menuButtonLine}></div>
                <div className={!showMenu ? styles.child2 : styles.menuButtonLine}></div>
                <div className={!showMenu ? styles.child3 : styles.menuButtonLine}></div>
              </div>
              <div id="openMenu" className={!showMenu ? styles.showMenu : styles.openMenu}>
                <ul>
                  <li key={1}>
                    <Link to="/category/all">Bütün Kateqoriyalar</Link>
                  </li>
                  {cats && cats.data.map((category) => (
                      //   <h5 key={category.id}>{category.name}</h5>
                      <li key={category.id}>
                        <Link to={`/category/${category.id}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
            <li>
				<Link id='button' to={AuthStore.appState ? '/Hesabim' : '/Daxil-ol'} className={styles.myProfile}>
					<FaRegUserCircle />
					{AuthStore.appState ? 'Hesabim' : 'Daxil ol'}
				</Link>
            </li>
            <li>
				<span>
					<Link onClick={()=>logOut()} style={ AuthStore.appState ? {visibility: 'visible'} : {visibility: 'hidden'}} to="/Cixis">
						ÇIXIŞ
					</Link>
				</span>
              {/* <span>
                <BsBell />
              </span> */}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li key={1}>
            <Link to="/category/all">Bütün Kateqoriyalar</Link>
          </li>
          {cats &&
            cats.data.map((category) => (
              //   <h5 key={category.id}>{category.name}</h5>
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          {/* <li  key={10}><Link to='/Butun-Kateqoriyalar'>Bütün Kateqoriyalar</Link></li>
                    <li><Link to='/Tulpan-Buketleri'>Tülpan Buketləri</Link></li>
                    <li><Link to='/Ucuz-Guller'>Ucuz Güllər</Link></li>
                    <li><Link to='/Buketler'>Buketlər</Link></li>
                    <li><Link to='/Guller'>Güllər</Link></li>
                    <li><Link to='/101-Qızılgul'>101 Qızılgül</Link></li>
                    <li><Link to='/Ofis-Bitkileri'>Ofis Bitkiləri</Link></li>
                    <li><Link to='/8-Mart'>8 Mart</Link></li>
                    <li><Link to='/En-Çox-Satılanlar'>Ən Çox Satılanlar</Link></li> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;