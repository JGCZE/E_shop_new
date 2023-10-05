import { useState } from 'react'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import DropdownMenu from './DropdownMenu'
import { CartState } from '../context/Context'


// type Props = {}
const Header = () => {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
    
    const toggleDropdownMenu = () => {
        setIsDropdownMenuOpen(!isDropdownMenuOpen)
    }

    const { state: { cart }, productDispatch } = CartState()

    return (
    <>
       <nav className='bg-black text-white flex justify-between items-center h-20 px-10'>
          <div className="text-xl">
            Shopping Cart
          </div>

          <div className=""> 
            <input 
                type="text" 
                className="w-[400px] rounded-md focus:outline-none text-black px-5 py-2" 
                placeholder='vyhledat product...'
                onChange={(e) => productDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value})}
            />
          </div>

          <div className=""> 
            <button 
                className='flex gap-3 bg-blue-500 w-20 px-4 py-2 rounded-md'
                // onclick fce for toggle cart
                onClick={toggleDropdownMenu}
            >
                <p>{cart.length}</p>
                <RiShoppingCart2Fill className="text-2xl"/>
            </button>
          </div>
       </nav>
        { isDropdownMenuOpen &&  <DropdownMenu /> }
    </>
  )
}

export default Header