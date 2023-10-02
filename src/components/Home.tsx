
import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"


const Home = () => {

  // access the products array from Context.tsx
  // destructure the products array from the state object
  const { state : { products }} = CartState();


  return (
    <div className="home">
     {/* <Filters /> */}
     <div className="productsContainer">
        {
          products.map(prod => {
            return (
              <SingleProduct />
            )
          })
        }
     </div>
    </div>
  )
}

// Home.propTypes = {
//   prod: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     product: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     fastDelivery: PropTypes.any.isRequired,
//     ratings: PropTypes.number.isRequired,
//     id: PropTypes.any.isRequired,
//     inStock: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Home