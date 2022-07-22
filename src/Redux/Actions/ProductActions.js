import {ActionTypes} from '../Constants/ActionTypes'
export const set_products=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selected_product=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const remove_selected_product=(product)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}