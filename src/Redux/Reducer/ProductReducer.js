import { ActionTypes } from "../Constants/ActionTypes";
const initialState={
    products:[]
}
export const Product_Reducer=(state=initialState,{type, payload})=>{   /* action ko destructure kia hai */
    switch (type) {
        case ActionTypes.SET_PRODUCTS:{
            return {...state,products:payload}
        }
        default:
            return state;
    }
}
export const Selected_Product_Reducer=(state={},{type, payload})=>{   /* action ko destructure kia hai */

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:{
            return {...state,...payload}
        }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:{
            return {}
        }
        default:
            return state;
    }
}