import { AiFillDelete } from "react-icons/ai"
import { CartState } from "../context/Context"
import Cart from "./Cart"


const DropdownMenu = () => {
  const {state: { cart }, dispatch} = CartState()

  return (
    <div className="w-[500px] min-h-[100px] bg-blue-100 float-right border-2 border-black z-100 absolute right-8">
      {cart.length > 0 ? (
        cart.map((prod) => 
          (
           <div key={prod.id} className="flex justify-between items-center p-2">
              <img src={prod.image} className="w-24 rounded-md" />
              <span>{prod.name}</span>
              <span className="mr-3 font-bold">{prod.price} USD</span>
              <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}>
                <AiFillDelete className="text-2xl text-red-500"/>
              </button>
            </div>
          ))
        ) : (
        <p className="mt-4 ml-4">Váš košík je prázdný</p>
      )}
    </div>
  )
}

export default DropdownMenu