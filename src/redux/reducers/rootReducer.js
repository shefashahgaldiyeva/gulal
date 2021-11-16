import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";

import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
// import allCategoriesReducer from "./allCategoriesReducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		categories : categoriesReducer,
		products : productsReducer,
			newOfferData,
		    bucketReducer,
		    wishListReducers,
		    allFlowersReducer,
		    saleProductData,
		    // allCategoriesReducer
	});

export default rootReducer;