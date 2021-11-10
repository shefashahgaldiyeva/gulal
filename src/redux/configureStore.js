import { combineReducers,createStore } from "redux"; 
import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";
import allCategoriesReducer from "./allCategoriesReducer";

const reducers = combineReducers({
    newOfferData,
    bucketReducer,
    wishListReducers,
    allFlowersReducer,
    saleProductData,
    allCategoriesReducer

})

function configureStore() {
    return createStore(reducers)
}

export default configureStore;
