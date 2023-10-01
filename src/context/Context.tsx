import { createContext, ReactNode } from "react"

const CartContext = createContext({})

interface ContextProps {
    children: ReactNode 
    // reactNode is any type of react component, this props can validete any type of react component
  }

const Context = ({ children }: ContextProps) => {
  return (
    <CartContext.Provider value={}>
        {children}
    </CartContext.Provider>
  )
}

export default Context