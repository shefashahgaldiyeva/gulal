// import { combineReducers,createStore } from "redux"; 
// import newOfferData from "./newOfferData";
// import bucketReducer from "./bucketReducer";
// import wishListReducers from "./wishListReducers";
// import allFlowersReducer from "./allFlowersReducer";
// import saleProductData from "./saleProductData";
// import allCategoriesReducer from "./allCategoriesReducer";

// const reducers = combineReducers({
//     newOfferData,
//     bucketReducer,
//     wishListReducers,
//     allFlowersReducer,
//     saleProductData,
//     allCategoriesReducer

// })

// function configureStore() {
//     return createStore(reducers)
// }

// export default configureStore;



import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const configureStore = () => {
	const middlewares = [thunk];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancers = composeEnhancers(applyMiddleware(...middlewares));
	const store = createStore(rootReducer(), enhancers);

	return store;
};

export default configureStore;