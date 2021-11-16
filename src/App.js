import './App.css';
import { Route, Switch } from 'react-router-dom'
import { matchPath } from 'react-router';
import { StyledEngineProvider } from '@mui/material/styles';
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import ShopAllCategory from './components/ShopAllCategory'
import SignUp from './components/SignUp'
import MyProfile from './components/MyProfile'
import WishList from './components/WishList';
import TransitionsModal from './components/TransitionsModal';
import Detail from './components/Detail';
import Arrow from './components/Arrow';
import Guest from './components/Guest';
import BottomMenu from './components/BottomMenu';

import IntegrationNotistack from './components/CustomizedSnackbars';
import { useState, useEffect } from "react";
import {localStorageMemory} from 'localstorage-memory'




function App() {
    
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
        // <div className="App">
        //       <form>
        //       <input
        //           type="text"
        //           value={name}
        //           onChange={(e) => setName(e.target.value)}
        //           placeholder="Full name"
        //           aria-label="fullname"
        //       />
        //       <input type="submit" value="Submit"></input>
        //       </form>
        // </div>

		<div className="App">
            <TopHeader/>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <StyledEngineProvider injectFirst>
                        <Home/>
                       {/* <IntegrationNotistack /> */}
                      </StyledEngineProvider>
                  </Route>
                  <Route path='/category/:catId'>
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Sebet'>
                      <Cart/>
                  </Route>
                  <Route path='/Sevimliler'>
                      <WishList/>
                  </Route>
                  <Route path='/Daxil-ol'>
                      <Login/>
                  </Route>
                  <Route path='/Qeydiyyat'>
                      <SignUp/>
                  </Route>
                  <Route path='/Sifariş-et'>
                    <StyledEngineProvider injectFirst>
                      <Guest/>
                    </StyledEngineProvider>
                  </Route>
                  <Route path='/Hesabim'>
                      <MyProfile/>
                  </Route>
                  <Route path='/Butun-Kateqoriyalar'>
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Tulpan-Buketleri'>
                      {/* <TulpanBuketleri/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Ucuz-Guller'>
                      {/* <UcuzGuller/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Buketler'>
                      {/* <Buketler/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Guller'>
                      {/* <Guller/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/101-Qızılgul'>
                      {/* <QizilGul/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/Ofis-Bitkileri'>
                      {/* <OfisBitkileri/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/8-Mart'>
                      {/* <SekkizMart/> */}
                      <ShopAllCategory/>
                  </Route>
                  <Route path='/En-Çox-Satılanlar'>
                      {/* <EnCoxSatilanlar/> */}
                      <ShopAllCategory/>
                  </Route> 
                  <Route path='/:topicId'>
                      <Detail/>
                  </Route>
              </Switch>
              <Footer/>
              {/* <TransitionsModal/> */}
              <Arrow/>
              <BottomMenu/>
          </div> 
    );
}

export default App;
