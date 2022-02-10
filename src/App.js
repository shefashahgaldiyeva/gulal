import "./App.css";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ShopAllCategory from "./components/ShopAllCategory";
import SignUp from "./components/SignUp";
import MyProfile from "./components/MyProfile";
import WishList from "./components/WishList";
// import TransitionsModal from "./components/TransitionsModal";
import Detail from "./components/Detail";
import Arrow from "./components/Arrow";
import Guest from "./components/Guest";
import BottomMenu from "./components/BottomMenu";

import Language from "./components/Language";
import { useEffect,useRef,useState } from "react";
import { loadCategoriesAsync } from "./redux/reducers/categories/categories.thunks";
import { loadUsersAsync } from "./redux/reducers/users/users.thunks";
import { getCartAsync } from "./redux/reducers/products/products.thunks";
import { getCategories } from "./redux/reducers/getterReducer/category/category.thunk";
import { guestSetTokenAsync } from "./redux/reducers/setterReducer/guestSetToken/guestSetToken.thunk";
import AuthStore from "./services/AuthStore";
import GuestStore from "./services/GuestStore";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";
import { loadDiscountProductsAsync } from "./redux/reducers/getterReducer/discountProducts/discount.thunk";
import { getContainerSliderAsync } from "./redux/reducers/getterReducer/containerSlider/containerSlider.thunk";
import SnackBar from "./components/Snackbar";
import { GiConsoleController } from "react-icons/gi";
import MapDistance from './components/MapDistance'
// import MyMapComponent from "./components/Map";


function App() {

	const dispatch = useDispatch();
	const currentLang = localStorage.getItem("locale");
	const { gettingCategory, categories } = useSelector((state) => state.getCategories);
    const {sliderLoading,containerSlider,sliderError } = useSelector(state => state.sliderReducer);
	const {gettingNewProduct, newProducts, newProductsErrorMessage} = useSelector(state => state.getNewProducts);
    const {isLoadingProduct,allProducts,errorMessageProduct} = useSelector((state) => state.allProducts);
    const {isLoadingDiscount,discountProducts,discountErrorMessage} = useSelector((state) => state.discountReducer);
    // const {isLoading,users,userErrorMessage} = useSelector(state => state.users)
	// const { gettingGuestCart, guestCart, guestError } = useSelector(state => state.guestCartReducer)
    const { gettingProductInCart,productInCart,errorMessage } =  useSelector(state => state.getShoppingCart)

	useEffect(() => {
		// dispatch(getCartAsync())
		dispatch(getCategories())
		dispatch(loadUsersAsync())
		dispatch(getContainerSliderAsync())
        // dispatch(loadDiscountProductsAsync())
	}, [])
	AuthStore.getToken()
    console.log(AuthStore.appState)
    console.log(GuestStore.appState)

	const {addingToCart,addedToCart,addedErrorMessage} = useSelector(state => state.setAddToCart)

	const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;
	console.log('renderCount: ',renderCounter.current)
	
	// wishlist
    // totalincart
    // snackbar
    // productincart
    // incdecbutton
    // guest
    // carttotalprice
    // cart

return (
    <div className="App">
		{ gettingCategory
			? 
		  <Loader/>
			:
		  null 
		}
		<div style={ gettingCategory
			? {display: 'none'} : null }>
		<TopHeader lang={currentLang} />
		<Header cats={!gettingCategory && categories ? categories : null} />
		<Switch>
			<Route exact path="/">
			<StyledEngineProvider injectFirst>
				<Home/>
				{/* <IntegrationNotistack /> */}
			</StyledEngineProvider>
			</Route>
			<Route path="/lang/:lang">
				<Language />
			</Route>
			<Route path="/category/:catId">
				<ShopAllCategory cats={!gettingCategory  && categories ? categories : null} />
			</Route>
				<Route path="/Sebet">
					<Cart />
				</Route>
				<Route path="/Sevimliler">
				{
					AuthStore.appState || GuestStore.appState
					?
					<WishList />
					:
					null
				}
				</Route>
			<Route path="/Daxil-ol">
				<Login/>
			</Route>
			<Route path="/Qeydiyyat">
				<SignUp />
			</Route>
			<Route path="/Sifariş-et">
				<StyledEngineProvider injectFirst>
					<Guest />
				</StyledEngineProvider>
			</Route>
			<Route path="/Hesabim">
				<MyProfile />
			</Route>
			<Route path="/Sifarislerim">
				<Orders />
			</Route>
			<Route path="/product/:slug/:productId">
				<Detail />
			</Route>
			<Route path="*">
				<NotFound/>
			</Route>
			{/* <Route path="/Map">
				<MyMapComponent />
			</Route> */}
			{/* <Route path="/Butun-Kateqoriyalar">
			<ShopAllCategory />
			</Route> */}
			{/* <Route path="/Tulpan-Buketleri">
			<ShopAllCategory />
			</Route>
			<Route path="/Ucuz-Guller">
			<ShopAllCategory />
			</Route>
			<Route path="/Buketler">
			<ShopAllCategory />
			</Route>
			<Route path="/Guller">
			<ShopAllCategory />
			</Route>
			<Route path="/101-Qızılgul">
			<ShopAllCategory />
			</Route>
			<Route path="/Ofis-Bitkileri">
			<ShopAllCategory />
			</Route>
			<Route path="/8-Mart">
			<ShopAllCategory />
			</Route>
			<Route path="/En-Çox-Satılanlar">
			<ShopAllCategory />
			</Route> */}
		
		</Switch>
		<Footer />
		{/* <TransitionsModal/> */}
		<Arrow />
		<BottomMenu />
		{!addingToCart && addedToCart ? <SnackBar/> : null}
		{/* <MapDistance/> */}
		</div>
    </div>
	// <div>
	// 	<Loader/>
	// </div>
  );
}

export default App;