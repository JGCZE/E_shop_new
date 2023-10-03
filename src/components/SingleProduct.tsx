

const SingleProduct = ({ prod }) => {
    const {id, name, image, price, fastDelivery, ratings, offer, inStock} = prod
  return (
    <div key={id}>
       {/* <img src={image} alt="" /> */}
       <p>{name}</p>
         
        
    </div>
)}


export default SingleProduct