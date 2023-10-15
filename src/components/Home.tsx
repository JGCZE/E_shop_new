import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import Filters from "./Filters"


const Home = () => {

  // access the products array from Context.tsx
  // destructure the products array from the state object
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
    desc: string;
  }
    
  const { state : { products }, productState: { byStock, byRating, sort, byFastDelivery, searchQuery }} = CartState();


  const transformedProducts = () => {
    let sortedProducts = products;

    if(sort) {
      sortedProducts = products.sort((a,b) => (
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price))
    } if (byStock) {
        sortedProducts = sortedProducts.filter((prod: Product) => prod.inStock > 0)
    } if (byFastDelivery) {
        sortedProducts = sortedProducts.filter((prod: Product) => prod.fastDelivery)
    } if (byRating) {
        sortedProducts = sortedProducts.filter((prod: Product) => prod.ratings >= byRating)
    } if (searchQuery) {
        sortedProducts = products.filter((prod: Product) => prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts
  }

  return (
    <div className="home flex justify-center">
     <Filters />
     <div className="productsContainer flex flex-wrap justify-evenly w-[78%] mt-2 p-4 gap-4 sm:p-1">
        {transformedProducts().map((prod: Product ) => {
            return (
              <SingleProduct prod={ prod } key={prod.id}/>
            )
          })
        }
     </div>
    </div>
  )
}

export default Home