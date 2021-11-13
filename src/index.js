import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';
import UsersPage from "./pages/Users";

// import configureStore from "./redux/stores/configureStore";

const store = configureStore();

ReactDOM.render(
  	<BrowserRouter>
    	<Provider store={store}>
      		<App/>
			<UsersPage />
      	</Provider>
  	</BrowserRouter>,
  document.getElementById('root')
);

