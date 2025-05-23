import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from "./Pages/Collection";
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vm] lg:px-[9vm]'>
            <NavBar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/collection' element={<Collection/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/product/:productId' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/place-order' element={<PlaceOrder/>} />
                <Route path='/orders' element={<Orders/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App