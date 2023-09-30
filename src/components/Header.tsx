import { RiShoppingCart2Fill } from 'react-icons/ri'


// type Props = {}

const toggleCart = () => {
    console.log('cart')    
}


const Header = () => {
  return (
    <>
       <nav className='bg-black text-white flex justify-between items-center h-20 px-10'>
          <div className="text-xl">
            Shopping Cart
          </div>

          <div className=""> 
            <input 
                type="text" 
                className="w-[350px] rounded-md focus:outline-none text-black px-5 py-2" 
                placeholder='vyhledat product...'
            />
          </div>
          <div className=""> 
            <button 
                className='flex gap-3 bg-blue-500 px-4 py-2 rounded-md'
                // onclick fce for toggle cart
                onClick={toggleCart}
            >
                <p>0</p>
                <RiShoppingCart2Fill className="text-2xl"/>
            </button>
          </div>
       </nav>
    </>
  )
}

export default Header