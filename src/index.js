import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// import configureStore from './redux/configureStore';
import configureStore from "./redux/stores/configureStore";
import UsersPage from "./pages/Users";
import ProductsPage from "./pages/Products";
// import AuthStore from './services/AuthStore';


const store = configureStore();

ReactDOM.render(
  	<BrowserRouter>
    	<Provider store={store}>
      		<App store={store}/>
			{/* <UsersPage /> */}
			{/* <ProductsPage /> */}
      	</Provider>
  	</BrowserRouter>,
  document.getElementById('root')
);

