import Rating from "./Rating"
import { useState } from "react"
import { CartState}  from "../context/Context"

const Filters = () => {
    const { productState: { byStock, byRating, sort, byFastDelivery }, productDispatch  } = CartState()
    console.log(byStock, byRating, sort, byFastDelivery )

//   const [rating, setRating] = useState(2) nahrazeno "byRaing" z Context.tsx

  return (
    <div className="filters bg-blue-400 p-2 flex flex-col min-w-[250px] m-2 h-[600px]">
        <span className="filter-title">Filtr</span>

        {/* Rdio buttons - for prices */}
        <span>
           <input type="radio" id="descending" name="price" onChange={() => productDispatch({ type: "SORT_BY_PRICE", })}/>
           <label htmlFor="descending">nejlevnější</label>
        </span>
        <span>
              <input type="radio" id="ascending" name="price"/>
              <label htmlFor="ascending">nejdražší</label>
        </span>

        {/* Checkboxes for product filtering */}
        <span>
            <input type="checkbox" id="inStock"/>
            <label htmlFor="inStock">skladem</label>
        </span>
        <span>
            <input type="checkbox" id="fastDelivery"/>
            <label htmlFor="fastDelivery">rychlé doručení</label>
        </span>

        {/* Rating */}
        <span className="rating-section flex justify-between items-center pr-8 mt-2">
            <label htmlFor="">Rating: </label>
            <Rating rating={byRating} onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1})} />
        </span>
            
        {/* Reset button */}
        <button>Reset</button>
    </div>
  )
}

export default Filters