import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import Filters from "./Filters"


const Home = () => {

  // access the products array from Context.tsx
  // destructure the products array from the state object
  const { state : { products }, productState: { byStock, byRating, sort, byFastDelivery, searchQuery }} = CartState();

  const transformedProducts = () => {
    let sortedProducts = products;

    // sorting by price
    if(sort) {
      sortedProducts = products.sort((a,b) => a.price - b.price)
    }
    //console.log(products.sort((a,b) => a.price - b.price))
    return sortedProducts
  }
  

  return (
    <div className="home flex">
     <Filters />
     <div className="productsContainer flex flex-wrap justify-around w-[78%] p-4 gap-4">
        {transformedProducts().map((prod ) => {
            return (
              <SingleProduct prod={ prod }/>
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