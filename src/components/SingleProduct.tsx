import Rating from "./Rating"
import { CartState}  from "../context/Context"
import { useState } from "react"

interface Product {
    id: number
    name: string
    image: string
    price: number
    fastDelivery: boolean
    ratings: number
    inStock: number
    desc: string
}

const SingleProduct = ({ prod } : {prod: Product}) => {

    const [readMore, setReadMore] = useState(false)
    const {id, name, image, price, fastDelivery, ratings, inStock, desc} = prod
    const { state: { cart }, 
        dispatch } = CartState();

  return (
    <div key={id} className="w-[250px] mt-2 border sm:w-[90%] md:max-w-[250px]" id="single-product">
       <img src={image} alt="" className="w-[100%]"/>
        <div className="p-3">
            <p className="text-lg">{name}</p>

            {/* Rating */}
            <span className="flex">
                <Rating rating={ratings} onClick={function (): void {
                      throw new Error("Function not implemented.")
                  } } />
            </span>

            {/* Fast delivery */}
            {fastDelivery ? (
                <div className="text-lime-600 font-bold my-1">Fast Delivery</div>
                ) : (
                    <div className="my-1">4 days delivery</div>
                    )}

            <div className="desc-section">
                {/* READ more button */}
                <div className="my-4 text-sm h-[auto]">
                    {readMore? desc : `${desc.substring(0, 10)}...`} 
                    <button className="text-blue-600 font-bold" onClick={() => setReadMore(!readMore)}>
                        {readMore ? "...Show less" : "Read more"}
                    </button>
                </div>

                {/* Buttons for adding and removing */}
                <div className="cart-buttons flex justify-between items-center">

                    {/* PRICE */}
                    <div className="text-green-900 font-bold mx-2 mt-4">{price} USD</div>
                
                    {/* BUTTONS */}
                    {/* three conditions -  product isnt in cart, product is already in car, product out of stock */}
                    {/* toto by mohla být komponenta ?? */}
                    {cart.some((p) => p.id === prod.id) ? (
                        <button 
                            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod})}
                            className="border bg-red-500 hover:bg-red-600 px-2 py-2 text-sm rounded-md text-white mt-4"
                        >
                            Odebrat z košíku
                        </button>
                            ):(
                                // Is inStock? YES -> ADD to cart button  |  NO -> Vyprodáno 
                                inStock > 0 ? (
                                <button 
                                        className="border bg-blue-500 hover:bg-blue-700 px-2 py-2 rounded-md text-white text-sm mt-4"
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
    </div>
)}


export default SingleProduct