import Rating from "./Rating"

const SingleProduct = ({ prod }) => {
    const {id, name, image, price, fastDelivery, ratings, offer, inStock} = prod
  return (
    <div key={id} className="">
       <img src={image} alt="" className="w-32"/>
       <p>{name}</p>
       <span>{price}</span>
       {fastDelivery ? (
        <div>Fast Delivery</div>
        ) : (
        <div>4 days delivery</div>
        )}
        <span className="">
            <Rating rating={ratings} />
        </span>

        {/* Buttons for adding and removing */}
        <div className="cart-buttons">
            { inStock ? (
                <button> Do košíku </button>
            ) : (
                <div> Vyprodáno </div>
            )
            }

            {/* <button> odebrat z košíku </button> */}
        </div>
        
    </div>
)}


export default SingleProduct