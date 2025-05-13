import {createContext, useEffect, useState} from 'react'
import { products } from '../assets/frontend_assets/assets'
import {useNavigate} from "react-router-dom";
import api from "../api/api.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [user, setUser] = useState(null); // Store logged-in user
    const [isAdmin, setIsAdmin] = useState(false); // Store admin status
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setcartItems] = useState({});
    const navigate = useNavigate();

    // Login function to set user and admin state
    const loginUser = async (credentials) => {
        try {
            const res = await api.post('/api/auth/login', credentials); // Make sure to update with actual API route
            const { token } = res.data;
            localStorage.setItem('token', token); // Save token in localStorage
            api.defaults.headers['Authorization'] = `Bearer ${token}`; // Add token to all requests

            // Fetch user data
            const userRes = await api.get('/api/users/me');
            setUser(userRes.data);
            setIsAdmin(userRes.data.isAdmin);
        } catch (err) {
            console.error('Login failed:', err);
        }
    };
    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else{
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setcartItems(cartData);

    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const getCartCount = () => {

        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
                console.log(totalCount);
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setcartItems(cartData);
    }


    const getCartAmount =  () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0){
                totalAmount += itemInfo.price * cartItems[items];
            }
        }
        return totalAmount;
    }
    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        user, isAdmin, loginUser,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;