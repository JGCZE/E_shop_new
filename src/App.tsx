import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../src/components/Header"
import Home from "./components/Home"
import Cart from "../src/components/Cart"
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
          <Header />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          
      </BrowserRouter>
    </>
  )
}

export default App
