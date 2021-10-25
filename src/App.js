import './App.css';
import { Route, Switch } from 'react-router-dom'
import { matchPath } from 'react-router';
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import ShopAllCategory from './components/ShopAllCategory'
import SignUp from './components/SignUp'
import WishList from './components/WishList';
import TransitionsModal from './components/TransitionsModal';
import Detail from './components/Detail';


function App() {

    return (
        <div className="App">
            <TopHeader/>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/Sebet'>
                    <Cart/>
                </Route>
                <Route exact path='/Sevimliler'>
                    <WishList/>
                </Route>
                <Route exact path='/Daxil-ol'>
                    <Login/>
                </Route>
                <Route exact path='/Qeydiyyat'>
                    <SignUp/>
                </Route>
                <Route exact path='/Butun-Kateqoriyalar'>
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
        </div>
    );
}

export default App;
