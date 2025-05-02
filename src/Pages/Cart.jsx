import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import CartTotal from "../components/CartTotal.jsx";
import api from "../api/api.js";

const Cart = () => {

    const{products, currency, cartItems,  updateQuantity, navigate} = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const itemEntries = Object.entries(cartItems).filter(([_, qty]) => qty > 0);

                const requests = itemEntries.map(([id]) => api.get(`/api/products/${id}`));
                const responses = await Promise.all(requests);

                const tempData = responses.map((res, idx) => ({
                    ...res.data,
                    quantity: itemEntries[idx][1],
                }));

                setCartData(tempData);
            } catch (error) {
                console.error('Failed to fetch cart data:', error);
            }
    };

    fetchCartData();
}, [cartItems]);


    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            <div>
                {
                    cartData.map((item, index) => {

                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-35 sm:w-20' src={item.image[0]} alt='image' />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{item.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency}{item.price}</p>
                                            <input
                                              onChange={(e) => {
                                                const val = Number(e.target.value);
                                                if (val > 0) updateQuantity(item._id, val);
                                              }}
                                              className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                                              type='number'
                                              min={1}
                                              defaultValue={item.quantity}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity} />
                                <img onClick={()=>updateQuantity(item._id,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt=''/>
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal/>
                    <div className='w-full text-end' >
                        <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart