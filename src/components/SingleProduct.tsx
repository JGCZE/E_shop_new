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
        <span>
            <Rating rating={ratings}/>
        </span>
        
    </div>
)}


export default SingleProduct