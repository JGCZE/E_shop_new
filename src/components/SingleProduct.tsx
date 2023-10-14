import Rating from "./Rating"
import { CartState}  from "../context/Context"

interface Product {
    id: string
    name: string
    image: string
    price: number
    fastDelivery: boolean
    ratings: number
    inStock: number
}

const SingleProduct = ({ prod } : {prod: Product}) => {

    const {id, name, image, price, fastDelivery, ratings, inStock, desc} = prod
    const { state: { cart }, 
        dispatch } = CartState();

  return (
    <div key={id} className="w-[250px] mt-2 border sm:w-[90%] mt-0 md:max-w-[250px]" id="single-product">
       <img src={image} alt="" className="w-[100%]"/>
        <div className="p-4">
            <p className="font-bold text-lg">{name}</p>
            {fastDelivery ? (
                <div className="text-lime-600 font-bold my-1">Fast Delivery</div>
                ) : (
                    <div>4 days delivery</div>
                    )}
            <span className="flex">
                <Rating rating={ratings} />
            </span>
            <div className="my-4">{desc}</div>
            <div className="text-green-900 font-bold mx-2 mt-4">{price} USD</div>

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