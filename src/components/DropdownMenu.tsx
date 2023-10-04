import { CartState } from "../context/Context"
import Cart from "./Cart"


const DropdownMenu = () => {
  const {state: { cart }} = CartState()
  console.log(cart)
  return (
    <div className="w-[500px] min-h-[100px] bg-blue-100 float-right border-2 border-black z-100 absolute right-8">
      {cart.length > 0 ? (
        cart.map((cart) => 
          (
           <div key={cart.id} className="flex justify-between items-center p-2">
              <img src={cart.image} className="w-24 rounded-md" />
              <span>{cart.name}</span>
              <span className="mr-3 font-bold">{cart.price} USD</span>
            </div>
          ))
        ) : (
        <p className="mt-4 ml-4">Váš košík je prázdný</p>
      )}
    </div>
  )
}

export default DropdownMenu