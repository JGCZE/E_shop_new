import { AiFillDelete } from "react-icons/ai"
import { CartState } from "../context/Context"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"


const Cart = () => {

  const { state: {cart}, dispatch, } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
  // reduce mi vytáhne z objektu cenu
  const reduce = cart.reduce((accumulator, currentValue) => 
     accumulator + Number(currentValue.price) * currentValue.qty,0)
  setTotal(reduce)
  }, [cart])

  return (
    <>
     <div className="home flex justify-between">
        <div className="productContainer">
          {cart.map((prod) => {
            const {id, name, image, price, fastDelivery, ratings, offer, inStock, qty} = prod

            return (
              <div key={id} className="oneProduct grid grid-cols-5">
                  <img src={image} alt="" className="w-40"/>
                  <p>{name}</p>

                  {/* qty will change by inStock variable  */}
                  <span>
                    <form action="">
                      <label htmlFor="quantity">
                        <select 
                          name="quantity" 
                          id="quantity" 
                          onChange={(e) => dispatch({ type: "CHANGE_QTY", payload: { id: prod.id, qty:e.target.value}})} >
                            {[...Array(inStock).keys()].map((x) => (
                              <option value={x+1}>{x+1}</option>
                            )
                            )}
                        </select>
                      </label>
                    </form>
                  </span>

                  <p>{price} USD</p>
                  <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}>
                    <AiFillDelete />
                  </button>
              </div>
            )})
          }
        </div>

        <div className="summary">
          <span>Celkem: {cart.length} pložky</span>
          <span>Cena celkem: {total} </span>
          <button></button>
        </div>
     </div>
     <Link to="/">
        <button >Zpět na úvodní stranu</button>
     </Link>
    </>
  )
}

export default Cart