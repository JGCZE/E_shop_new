
const Filters = () => {
  return (
    <div className="filters bg-blue-400 p-2 flex flex-col w-[20%] m-2 h-20vh">
        <span className="filter-title">Filtr</span>

        {/* Rdio buttons - for prices */}
        <span>
           <input type="radio" id="descending" name="price"/>
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
        <button>Reset</button>
    </div>
  )
}

export default Filters