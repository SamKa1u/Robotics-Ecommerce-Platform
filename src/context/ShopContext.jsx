import {createContext, useEffect, useState} from 'react'
import { products } from '../assets/frontend_assets/assets'
import {useNavigate} from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setcartItems] = useState({});
    const navigate = useNavigate();

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
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;