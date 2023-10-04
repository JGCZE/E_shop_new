export const ACTIONS = {
    
}

export const cartReducer = (state, action) => {
    switch (action.type) {
       case "ADD_TO_CART": {
        return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
       }
       case "REMOVE_FROM_CART": {
        return {...state, 
            cart: state.cart.filter((c)=> c.id !== action.payload.id)}
       }
       case "CHANGE_QTY": {
           console.log(state, action.payload.id, action.payload.qty)
           console.log(state.cart)
           // find the product in the cart
           // action.payload.prod = id of the product
           // action.payload.qty = qty of the product          
        return {...state,
            cart: state.cart.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)}
       
    }
        default:
            break;
    }
}