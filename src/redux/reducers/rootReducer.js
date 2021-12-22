import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";
import logoutReducer from "./users/logoutReducer";
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
import getProductsReducer  from './getterReducer/product/getProduct.reducer';
import addToCart from "./setterReducer/addToCartProduct/addToCart.reducer";
import deleteCartProductReducer from "./setterReducer/deleteCartProduct/deleteCartProduct.reducer";
import decrementQuantityToCart from "./setterReducer/cartDecrementQuantity/decrementQuantity.reducer";
import incrementQuantityToCart from "./setterReducer/cartIncrementQuantity/incrementQuantity.reducer";
import getShoppingCart from "./getterReducer/shoppingCart/getShoppingCart.reducer";
import addToWishlist from "./setterReducer/addToWishlistProduct/addToWishlist.reducer";
import getWishlist from "./getterReducer/getWishlist/getWishlist.reducer";
import getSearch from "./getterReducer/search/search.reducer"
import subscribeReducer from "./setterReducer/subscribe/subscribe.reducer"
import getNewProductsReducer from "./getterReducer/newProducts/getNewProducts.reducer"
import allProductsReducer from "./getterReducer/allProducts/all.products.inHome.reducer";
import discountProductsReducer from "./getterReducer/discountProducts/discount.reducer";
import deleteWishlistProductReducer from "./setterReducer/deleteWishlistProduct/deleteWishlistProduct.reducer"
import guestSetTokenReducer from "./setterReducer/guestSetToken/guestSetToken.reducer"
import guestAddToCartReducer from "./setterReducer/guestAddToCart/guestAddToCart.reducer"
import saleReducer from "./setterReducer/sale/sale.reducer"
import guestGetCartReducer from "./getterReducer/guestShoppingCart/guestGetShoppingCart.reducer";
import guestIncrementReducer from "./setterReducer/guestCartIncrementQuantity/guestCartIncrementQuantity.reducer";
import guestDecrementReducer  from "./setterReducer/guestCartDecrementQuantity/guestCartDecrementQuantity.reducer";
import deleteGuestCartProductReducer from "./setterReducer/deleteGuestCartProduct/deleteGuestCartProduct.reducer";
import productDetailReducer from "./getterReducer/productDetail/productDetail.reducer";
import updateUserReducer from "./users/updateUser/updateUser.reducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		// categories : categoriesReducer,
		// products : productsReducer,
		allProducts : allProductsReducer,
		discountReducer : discountProductsReducer,
		// cartReducer : addToCartProductsReducer,
		// quantityReducer : getQuantityReducer,
		// getCartReducer,
		paramsReducer,
		// cartDeleteReducer,
		registerReducer,
		logoutReducer,
			newOfferData,
		    bucketReducer,
		    // wishListReducers,
		    allFlowersReducer,
		    saleProductData,
		    // allCategoriesReducer

		////////////////////////////
		getCategories : getCategory,
		getProducts : getProductsReducer,
		getNewProducts : getNewProductsReducer,
		setAddToCart : addToCart,
		deleteCartProductReducer,
		deleteWishlistProductReducer,
		getShoppingCart,
		decrementQuantityReducer : decrementQuantityToCart,
		incrementQuantityReducer : incrementQuantityToCart,
		addToWishlist,
		getWishlist,
		getSearch,
		subscribeReducer,
		guestSetTokenReducer,
		guestAddToCartReducer,
		saleReducer,
		guestCartReducer: guestGetCartReducer,
		guestIncrementReducer,
		guestDecrementReducer,
		deleteGuestCartReducer : deleteGuestCartProductReducer,
		productDetailReducer,
		updateUserReducer,
	});

export default rootReducer;