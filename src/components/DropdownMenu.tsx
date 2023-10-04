import { AiFillDelete } from "react-icons/ai"
import { CartState } from "../context/Context"
import Cart from "./Cart"
import { Link } from "react-router-dom"


const DropdownMenu = () => {
  const {state: { cart }, dispatch} = CartState()

  return (
    <div className="w-[500px] min-h-[100px] bg-blue-100 float-right border-2 border-black z-100 absolute right-8 rounded-b-md">
      {cart.length > 0 ? (
        <>
          {cart.map((prod) => 
            (
            <div key={prod.id} className="flex justify-between items-center p-2">
                <img src={prod.image} className="w-24 rounded-md" />
                <div className="flex flex-col w-[50%]">
                  <span>{prod.name}</span>
                  <span className="mr-3 font-bold">{prod.price} USD</span>
                </div>
                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}>
                  <AiFillDelete className="text-3xl text-black mx-3 hover:text-red-600"/>
                </button>
              </div>
            ))}
          <Link to="/cart">
            <button className="w-[60%] my-6 p-2 mx-[20%] bg-blue-500 text-white rounded-md hover:bg-blue-700 text-lg">Přejít do košíku</button>
          </Link>
        </>
          ) : (
        <p className="mt-4 ml-4">Váš košík je prázdný</p>
      )}
    </div>
  )
}

export default DropdownMenu