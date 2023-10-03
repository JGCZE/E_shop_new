import { CartState } from "../context/Context"
import Cart from "./Cart"


const DropdownMenu = () => {
  const {state: { cart }} = CartState()
  console.log(cart)
  return (
    <div className="w-[340px] h-[80px] bg-blue-200 float-right border-2 border-black z-100 absolute right-8">
      {cart.length > 0 ? (
        cart.map((cart) => 
          (
           <div key={cart.id} className="flex">
              <img src={cart.image} className="" />
              <span>{cart.name}</span>
              <span>{cart.price}</span>
            </div>
          ))
        ) : (
        <p className="mt-4 ml-4">Váš košík je prázdný</p>
      )}
    </div>
  )
}

export default DropdownMenu