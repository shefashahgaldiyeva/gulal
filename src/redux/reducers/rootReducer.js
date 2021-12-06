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
import cartDeleteReducer from "./products/cartDelete.reducer";

import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import paramsReducer from "./paramsReducer";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
import registerReducer from "./users/registerReducer";
import { getCategories } from "./getterReducer/category/category.thunk";
// import allCategoriesReducer from "./allCategoriesReducer";
import getCategory from './getterReducer/category/getCategory.reducer'
import  getProducts  from './getterReducer/product/getProduct.reducer';
import addToCart from "./setterReducer/addToCartProduct/addToCart.reducer";
import deleteCartProductReducer from "./setterReducer/deleteCartProduct/deleteCartProduct.reducer";
import decrementQuantityToCart from "./setterReducer/cartDecrementQuantity/decrementQuantity.reducer";
import incrementQuantityToCart from "./setterReducer/cartIncrementQuantity/incrementQuantity.reducer";
import getShoppingCart from "./getterReducer/shoppingCart/getShoppingCart.reducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		// categories : categoriesReducer,
		// products : productsReducer,
		// allProducts : allProductsReducer,
		// discountReducer : discountProductsReducer,
		// cartReducer : addToCartProductsReducer,
		// quantityReducer : getQuantityReducer,
		// getCartReducer,
		paramsReducer,
		// cartDeleteReducer,
		registerReducer,
		logoutReducer,
			newOfferData,
		    bucketReducer,
		    wishListReducers,
		    allFlowersReducer,
		    saleProductData,
		    // allCategoriesReducer

		////////////////////////////
		getCategories : getCategory,
		getProducts : getProducts,
		setAddToCart : addToCart,
		deleteCartProductReducer : deleteCartProductReducer,
		getShoppinCartProducts : getShoppingCart,
		decrementQuantityReducer : decrementQuantityToCart,
		incrementQuantityReducer : incrementQuantityToCart,

	});

export default rootReducer;