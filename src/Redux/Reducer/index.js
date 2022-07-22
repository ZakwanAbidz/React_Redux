import { combineReducers } from "redux";
import { Product_Reducer,Selected_Product_Reducer } from "./ProductReducer";

const reducers=combineReducers({
    allProducts:Product_Reducer,            /* allProducts as a key use kr rhay hain*/
    product:Selected_Product_Reducer
    
});
export default reducers;