import Rating from "./Rating"
import { useState } from "react"
import { CartState}  from "../context/Context"

const Filters = () => {
    const { productState: { byStock, byRating, sort, byFastDelivery, searchQuery }, productDispatch  } = CartState()
    // TEST for filters
    // console.log(byStock, byRating, sort, byFastDelivery )
    // const [rating, setRating] = useState(2) nahrazeno "byRaing" z Context.tsx

  return (
    <div className="filters bg-blue-400 p-2 flex flex-col min-w-[250px] m-4 h-[600px] ">
        <h3 className="filter-title text-center text-xl m-6 font-semibold">Filtr produktů</h3>

        {/* Rdio buttons - for prices - only one is possible */}
        <span className="mt-4">
           <input type="radio" id="descending" name="price" 
                  onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh"})}
                  checked={sort === "lowToHigh" ? true : false}
            />
           <label htmlFor="descending">nejlevnější</label>
        </span>
        <span>
              <input type="radio" id="ascending" name="price" 
                     onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow"})}
                     checked={sort === "highToLow" ? true : false}
              />
              <label htmlFor="ascending">nejdražší</label>
        </span>

        {/* Checkboxes for product filtering - all is possible */}
        <span>
            <input type="checkbox" id="inStock" 
                   onChange={() => productDispatch({ type: "FILTER_BY_STOCK"})}
                   checked={byStock}
            />
            <label htmlFor="inStock">skladem</label>
        </span>
        <span>
            <input type="checkbox" id="fastDelivery" 
                   onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY"})}
                   checked={byFastDelivery}
            />
            <label htmlFor="fastDelivery">rychlé doručení</label>
        </span>

        {/* Filtering by Rating */}
        <span className="rating-section flex justify-between items-center pr-8 mt-2">
            <label htmlFor="">Rating: </label>
            <Rating rating={byRating} onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1})} />
        </span>
            
        {/* Reset button */}
        <button className="bg-white py-2 rounded-md text-black mt-6 text-lg" 
                onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
        >
            Reset
        </button>
    </div>
  )
}

export default Filters