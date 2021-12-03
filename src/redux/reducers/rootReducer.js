import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";
import discountProductsReducer from "./products/discount.products.reducer";
import logoutReducer from "./users/logoutReducer";
import allProductsReducer from "./products/all.products.inHome.reducer";
import addToCartProductsReducer from "./products/addToCart.products.reducer";
import getCartReducer from "./products/getCart.reducer";
import getQuantityReducer from "./products/getQuantity.reducer";

import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import paramsReducer from "./paramsReducer";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
import registerReducer from "./users/registerReducer";
// import allCategoriesReducer from "./allCategoriesReducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		categories : categoriesReducer,
		products : productsReducer,
		allProducts : allProductsReducer,
		discountReducer : discountProductsReducer,
		cartReducer : addToCartProductsReducer,
		quantityReducer : getQuantityReducer,
		getCartReducer,
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