import Rating from "./Rating"

const SingleProduct = ({ prod }) => {
    const {id, name, image, price, fastDelivery, ratings, offer, inStock} = prod
  return (
    <div key={id} className="w-[250px] m-2] border">
       <img src={image} alt="" className="w-[100%]"/>
        <div className="p-4">
            <p>{name}</p>
            <span>{price}</span>
            {fastDelivery ? (
            <div>Fast Delivery</div>
            ) : (
            <div>4 days delivery</div>
            )}
            <span className="flex">
                <Rating rating={ratings} />
            </span>
            <span>{offer}</span>

            {/* Buttons for adding and removing */}
            <div className="cart-buttons flex">
                { inStock ? (
                    <button className="border bg-blue-500 px-6 py-2 rounded-md text-white mt-4"> Do košíku </button>
                ) : (
                    <div className="text-red-500"> Vyprodáno </div>
                )
                }

                {/* <button> odebrat z košíku </button> */}
            </div>
        </div>
    </div>
)}


export default SingleProduct