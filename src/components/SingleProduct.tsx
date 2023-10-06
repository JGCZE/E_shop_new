import Rating from "./Rating"
import { CartState}  from "../context/Context"

const SingleProduct = ({ prod }) => {

    const {id, name, image, price, fastDelivery, ratings, inStock} = prod
    const { state: { cart }, 
        dispatch } = CartState();

  return (
    <div key={id} className="w-[250px] mt-2 border sm:w-[90%] mt-0 md:max-w-[250px]">
       <img src={image} alt="" className="w-[100%]"/>
        <div className="p-4">
            <p>{name}</p>
            <span className="text-green-800 font-bold mx-2">{price} USD</span>
            {fastDelivery ? (
            <div>Fast Delivery</div>
            ) : (
            <div>4 days delivery</div>
            )}
            <span className="flex">
                <Rating rating={ratings} />
            </span>

            {/* Buttons for adding and removing */}
            <div className="cart-buttons flex">
               
            {/* three conditions -  product isnt in cart, product is already in car, product out of stock */}
            {cart.some((p) => p.id === prod.id) ? (
                <button 
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}
                    className="border bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-white mt-4"
                >
                    Odebrat z košíku
                </button>
                    ):(
                        // Is inStock? YES -> ADD to cart button  |  NO -> Vyprodáno 
                        inStock > 0 ? (
                           <button 
                                 className="border bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-md text-white mt-4"
                                 onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod})}
                                 > Přidat do košíku
                             </button> 
                                        ):(
                             <div className="text-red-500 mt-4"> Vyprodáno </div> )
                        )
            }
            </div>
        </div>
    </div>
)}


export default SingleProduct