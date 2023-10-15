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
    products: []
    cart: []
    byStock: boolean
    byFastDelivery: boolean
    byRating: number
    searchQuery: string
    qty: number
    id: number
}

interface Action {
    type: string
    payload: {id: number, qty: number}
}

interface CartItem {
    id: number;
    qty: {id: number, qty: number};
}

export const cartReducer = (state: ProductState, action: Action) => {
    switch (action.type) {
       case ACTIONS.ADD_TO_CART: {
        return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
       }
       case ACTIONS.REMOVE_FROM_CART: {
        return {...state, 
            cart: state.cart.filter((c: CartItem)=> c.id !== action.payload.id)}
       }
       case ACTIONS.CHANGE_QTY: {     
        console.log(action.payload)
        return {...state,
            cart: state.cart.map((c: CartItem)=> c.id === action.payload.id ? {...c, qty: action.payload.qty} : c)}
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