import "./App.css";
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
import { useEffect } from "react";
import { loadCategoriesAsync } from "./redux/reducers/categories/categories.thunks";
import { loadUsersAsync } from "./redux/reducers/users/users.thunks";
import { getCartAsync } from "./redux/reducers/products/products.thunks";
import { getCategories } from "./redux/reducers/getterReducer/category/category.thunk";

import LanguageService from "./services/language.service";
import AuthStore from "./services/AuthStore";
import { getCategories } from "./redux/reducers/getterReducer/category/category.thunk";

function App() {
<<<<<<< HEAD
	LanguageService.getLang();
=======

LanguageService.getLang();
>>>>>>> master
	const currentLang = localStorage.getItem("locale");
	const dispatch = useDispatch();
	const { gettingCategory, categories, errorMessage } = useSelector(
		(state) => state.getCategories
	);
	useEffect(() => {
		// dispatch(getCartAsync())
		dispatch(getCategories())
		dispatch(loadUsersAsync())

	}, [])
	AuthStore.getToken()
<<<<<<< HEAD
=======

>>>>>>> master
return (
    <div className="App">
		<TopHeader lang={currentLang} />
		{!gettingCategory && categories ? <Header cats={categories} /> : null}
		<Switch>
			<Route exact path="/">
			<StyledEngineProvider injectFirst>
				<Home />
				{/* <IntegrationNotistack /> */}
			</StyledEngineProvider>
			</Route>
			<Route path="/lang/:lang">
				<Language />
			</Route>
			<Route path="/category/:catId">
<<<<<<< HEAD
				<ShopAllCategory cats={!gettingCategory && categories ? categories : null} />
=======
				<ShopAllCategory cats={!gettingCategory  && categories ? categories : null} />
>>>>>>> master
			</Route>
			 <Route path="/Sebet">
				<Cart />
			</Route>
		{/*	<Route path="/Sevimliler">
				<WishList />
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
			<Route path="/product/:productId">
				<Detail />
			</Route>
		</Switch>
		<Footer />
		{/* <TransitionsModal/> */}
		<Arrow />
		<BottomMenu />
    </div>
  );
}

export default App;