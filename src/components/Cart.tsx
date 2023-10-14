import { AiFillDelete } from "react-icons/ai"
import { CartState } from "../context/Context"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"


const Cart = () => {

  const { state: {cart}, dispatch } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
  // reduce mi vytáhne z objektu cenu
  const reduce = cart.reduce((accumulator, currentValue) => 
     accumulator + Number(currentValue.price) * currentValue.qty,0)
  setTotal(reduce)
  }, [cart])

  return (
    <>
     <div className="home flex justify-between sm:flex-col md:flex-row">
        <div className="productContainer">
          {cart.map((prod) => {
            const {id, name, image, price, inStock } = prod

            return (
              <div key={id} className="oneProduct grid grid-cols-6 text-center items-center border m-8 md:mt-8 mx-2 lg:mx-8 text-lg">
                  <img src={image} alt="" className="w-40 grid-cols-1"/>
                  <p className="col-span-2">{name}</p>

                  {/* qty will change by inStock variable  */}
                  <span className="">
                    <form action="">
                      <label htmlFor="quantity">
                        <select 
                          className="block cursor-pointer mx-auto py-2 px-0 w-[40%] text-mg text-black  border-0 border-b-2 border-black  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black"
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
                  <button className="m-auto" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}>
                    <AiFillDelete />
                  </button>
              </div>
            )})
          }
        </div>

        <div className="summary border m-8 px-8 py-20 flex flex-col text-xl w-80 md:mx-2 lg:mx-8 ">
          <span className="md: text-sm flex flex-col mb-4 lg:text-lg">Celkem: 
            <span className="font-bold mx-6 md:text-base">{cart.length} položek</span>
          </span>
          <span className="md: text-sm flex flex-col mb-4 lg:text-lg">Cena celkem:
             <span className="font-bold mx-6 md:text-base lg:text-lg">{total} usd</span>
          </span>
          <button></button>
        </div>
     </div>
     <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 px-8 py-4 mx-8 my-28 text-white rounded-lg">Zpět na úvodní stranu</button>
     </Link>
    </>
  )
}

export default Cart