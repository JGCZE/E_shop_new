import { CartState } from "../context/Context"
import {useState, useEffect} from "react"


const Cart = () => {

 const { state: {cart}, dispatch, } = CartState()
console.log(typeof(cart))

const [total, setTotal] = useState()

useEffect(() => {
  // reduce mi vytáhne z objektu cenu
  const reduce = cart.reduce((accumulator, currentValue) => 
     accumulator + Number(currentValue.price),0)
  setTotal(reduce)
  }, [cart])

  return (
    <>
     <div className="home">
        <div className="productContainer">

        </div>

        <div className="summary">
          <span>Celkem: {cart.length} pložky</span>
          <span>Cena celkem: {total} </span>
          <button></button>
        </div>
     </div>
    </>
  )
}

export default Cart