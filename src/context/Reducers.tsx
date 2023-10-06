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

interface Action {
    type: string
    payload?: any
}
// interface CartItem extends ProductState {
//     qty: number
// }

interface ProductState {
    cart: []
    byStock: boolean
    byFastDelivery: boolean
    byRating: number
    searchQuery: string
    qty: number
    id: number
}

export const cartReducer = (state: ProductState, action: Action) => {
    switch (action.type) {
       case ACTIONS.ADD_TO_CART: {
        return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
       }
       case "REMOVE_FROM_CART": {
        return {...state, 
            cart: state.cart.filter((c)=> c.id !== action.payload.id)}
       }
       case "CHANGE_QTY": {     
        return {...state,
            cart: state.cart.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)}
    }
        default:
            break;
    }
}

export const productReducer = (state: ProductState, action: Action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return {...state, sort: action.payload}
        case "FILTER_BY_STOCK":
            return {...state, byStock: !state.byStock}
        case "FILTER_BY_DELIVERY":
            return {...state, byFastDelivery: !state.byFastDelivery}
        case "FILTER_BY_RATING":
            return {...state, byRating: action.payload}
        case "FILTER_BY_SEARCH":
            return {...state, searchQuery: action.payload}
        case "CLEAR_FILTERS":
            return {byStock: false, byFastDelivery: false, byRating: 0, searchQuery: ""}
        default:
            return state;
    }
}