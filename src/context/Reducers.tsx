import { Reducer } from "react";

export const ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CHANGE_QTY: "CHANGE_QTY",
    SORT_BY_PRICE: "SORT_BY_PRICE",
    FILTER_BY_STOCK: "FILTER_BY_STOCK",
    FILTER_BY_DELIVERY: "FILTER_BY_DELIVERY",
    FILTER_BY_RATING: "FILTER_BY_RATING",
    FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
    CLEAR_FILTERS: "CLEAR_FILTERS"
}

interface ProductState {
    product: []
    cart: []
    byStock: boolean
    byFastDelivery: boolean
    byRating: number
    searchQuery: string
    qty: number
    id: number
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product }
  | { type: "CHANGE_QTY"; payload: { id: number; qty: number } }
  | { type: "SORT_BY_PRICE"; payload: string }
  | { type: "FILTER_BY_STOCK" }
  | { type: "FILTER_BY_DELIVERY" }
  | { type: "FILTER_BY_RATING"; payload: number }
  | { type: "FILTER_BY_SEARCH"; payload: string }


// interface Action {
//     type: string
//     payload?: any
// }
// interface CartItem extends ProductState {
//     qty: number
// }


export const cartReducer = (state: ProductState, action: Action) => {
    switch (action.type) {
       case ACTIONS.ADD_TO_CART: {
        return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
       }
       case ACTIONS.REMOVE_FROM_CART: {
        return {...state, 
            cart: state.cart.filter((c)=> c.id !== action.payload.id)}
       }
       case ACTIONS.CHANGE_QTY: {     
        return {...state,
            cart: state.cart.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)}
    }
        default:
            break;
    }
}

export const productReducer = (state: ProductState, action: Action) => {
    switch (action.type) {
        case ACTIONS.SORT_BY_PRICE:
            return {...state, sort: action.payload}
        case ACTIONS.FILTER_BY_STOCK:
            return {...state, byStock: !state.byStock}
        case ACTIONS.FILTER_BY_DELIVERY:
            return {...state, byFastDelivery: !state.byFastDelivery}
        case ACTIONS.FILTER_BY_RATING:
            return {...state, byRating: action.payload}
        case ACTIONS.FILTER_BY_SEARCH:
            return {...state, searchQuery: action.payload}
        case ACTIONS.CLEAR_FILTERS:
            return {byStock: false, byFastDelivery: false, byRating: 0, searchQuery: ""}
        default:
            return state;
    }
}