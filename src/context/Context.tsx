import { createContext, ReactNode, useContext, useReducer } from "react"
import { faker } from '@faker-js/faker'
import { cartReducer } from "./Reducers"


const CartContext = createContext({})

interface ContextProps {
    children: ReactNode 
    // reactNode is any type of react component, this props can validete any type of react component
  }

// Products
const Context = ({ children }: ContextProps) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        image: faker.image.url(),
        // inStock: faker.datatype.boolean(),
        inStock: faker.helpers.arrayElement([0, 1, 2, 3]), 
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        // offer: faker.helpers.arrayElement([
        //     "Save 50%",
        //     "Christmas Offer",
        //     " "
        // ]),
 }))

const [state, dispatch] = useReducer(cartReducer, { products, cart:[] }, () => ({ products, cart:[] }));

    return (
        <CartContext.Provider value={{ products, dispatch, state }}>
                {children}
        </CartContext.Provider>
    )
}

export default Context

// exporting the context
export const CartState = () => {
    return useContext(CartContext)
}
