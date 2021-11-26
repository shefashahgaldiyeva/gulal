import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
import TransitionsModal from "./components/TransitionsModal";
import Detail from "./components/Detail";
import Arrow from "./components/Arrow";
import Guest from "./components/Guest";
import BottomMenu from "./components/BottomMenu";

import Language from "./components/Language";
import { useState } from "react";
import { useEffect } from "react";
import { loadCategoriesAsync } from "./redux/reducers/categories/categories.thunks";
import { loadUsersAsync } from "./redux/reducers/users/users.thunks";

import LanguageService from "./services/language.service";
import UsersService  from "./services/users.service";

function App() {

  LanguageService.getLang();
  const currentLang = localStorage.getItem("locale");

  const dispatch = useDispatch();
  const { isLoading, categories, errorMessage } = useSelector(
    (state) => state.categories
  );
  const userr = useSelector(state => state.users)
  const token = useSelector(state => state.tokenReducer)
  useEffect(() => {
    dispatch(loadCategoriesAsync());
  }, []);
  useEffect(() => {
    dispatch(loadUsersAsync(token[0]));
  }, []);
 console.log(token[0])

//  axios.post('http://127.0.0.1:8000/api/auth/logout', { headers: { Authorization: `Bearer ${token[0]}` }})
//     .then(res => console.log(res))


     // axios.get('http://127.0.0.1:8000/api/auth/user', { headers: { Authorization: `Bearer ${response.data.token}` }})
            // .then(res => console.log(res))
  // console.log(currentLang);
  //   const [name, setName] = useState(() => {
  //       const saved = localStorage.getItem("name");
  //       console.log(saved)
  //       const initialValue = JSON.parse(saved);
  //       return initialValue || "";
  //   });
  //   useEffect(() => {
  //       localStorage.setItem("name", JSON.stringify(name));
  //       }, [name]);


return (
    <div className="App">
      <TopHeader lang={currentLang} />
      {!isLoading && categories ? <Header cats={categories} /> : null}
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
            <ShopAllCategory cats={!isLoading && categories ? categories : null} />
        </Route>
        <Route path="/Sebet">
          <Cart />
        </Route>
        <Route path="/Sevimliler">
          <WishList />
        </Route>
        <Route path="/Daxil-ol">
          <Login users = {userr} />
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