import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
import allCategoriesReducer from "./allCategoriesReducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
			newOfferData,
		    bucketReducer,
		    wishListReducers,
		    allFlowersReducer,
		    saleProductData,
		    allCategoriesReducer
	});

export default rootReducer;