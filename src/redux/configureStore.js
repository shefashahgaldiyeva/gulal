import { combineReducers,createStore } from "redux"; 
import newOfferData from "./newOfferData";
import bucketReducer from "./bucketReducer";
import wishListReducers from "./wishListReducers";
import allFlowersReducer from "./allFlowersReducer";
import saleProductData from "./saleProductData";

const reducers = combineReducers({
    newOfferData,
    bucketReducer,
    wishListReducers,
    allFlowersReducer,
    saleProductData

})

function configureStore() {
    return createStore(reducers)
}

export default configureStore;
