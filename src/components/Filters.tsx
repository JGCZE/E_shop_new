
const Filters = () => {
  return (
    <div className="filters bg-cyan-400 p-2 flex flex-col w-[20%] m-2 h-20vh">
        <span className="filter-title">Filtr</span>

        {/* Rdio buttons - for prices */}
        <span>
           <input type="radio"/>
           <label htmlFor="">od nejlevnějších</label>
        </span>
        <span>
              <input type="radio"/>
              <label htmlFor="">od nejdražších</label>
        </span>

        {/* Checkboxes for product filtering */}
        <span>
            <input type="checkbox"/>
            <label htmlFor="">skladem</label>
        </span>
        <span>
            <input type="checkbox"/>
            <label htmlFor="">rychlé doručení</label>
        </span>

    </div>
  )
}

export default Filters