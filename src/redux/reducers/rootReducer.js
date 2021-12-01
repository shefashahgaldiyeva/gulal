import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";
import discountProductsReducer from "./products/discount.products.reducer";

import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import paramsReducer from "./paramsReducer";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
import registerReducer from "./users/registerReducer";
import logoutReducer from "./users/logoutReducer";
import addToCartProductsReducer from "./products/addToCart.products.reducer";
// import allCategoriesReducer from "./allCategoriesReducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		categories : categoriesReducer,
		products : productsReducer,
		discountReducer : discountProductsReducer,
		cartReducer : addToCartProductsReducer,
		paramsReducer,
		registerReducer,
		logoutReducer,
			newOfferData,
		    bucketReducer,
		    wishListReducers,
		    allFlowersReducer,
		    saleProductData,
		    // allCategoriesReducer
	});

export default rootReducer;