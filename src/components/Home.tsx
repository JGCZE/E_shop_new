
import { CartState } from "../context/Context"


const Home = () => {

  // access the products array from Context.tsx
  const { state : {products}, } = CartState();

  console.log(products);

  return (
    <div>
     Home
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