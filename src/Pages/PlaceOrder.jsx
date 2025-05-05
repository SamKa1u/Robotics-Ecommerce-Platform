import React, {useContext, useState} from 'react'
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import {ShopContext} from "../context/ShopContext.jsx";
import api from '../api/api.js';

const PlaceOrder = () => {

    const [method,setMethod] = useState("cod");
    const [deliveryInfo, setDeliveryInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''
    });
    const {navigate} = useContext(ShopContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryInfo({ ...deliveryInfo, [name]: value });
    };

    const handleOrderSubmission = async () => {
        // Ensure all fields are filled (basic validation)
        for (let field in deliveryInfo) {
            if (!deliveryInfo[field]) {
                alert(`Please fill out the ${field}`);
                return;
            }
        }

        // You can send the order data to your API here, e.g.:
        try {
            const orderData = {
                ...deliveryInfo,
                paymentMethod: method,
                totalAmount: 100 // Replace with actual total amount from context or API
            };

            const response = await api.post('/api/orders', orderData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            if (response.status === 201) {
                navigate('/orders'); // Redirect to orders page
            }
        } catch (error) {
            console.error('Failed to place order:', error);
        }
    };

    const paymentMethods = [
        { id: 'razer', logo: assets.razorpay_logo, label: 'Razorpay' },
        { id: 'stripe', logo: assets.stripe_logo, label: 'Stripe' },
        { id: 'cod', logo: null, label: 'CASH ON DELIVERY' }
    ];

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* ------------ Left Side --------------*/}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
                </div>
                {Object.keys(deliveryInfo).map((key, index) => (
                    <input
                        key={index}
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        type={key === 'email' || key === 'phone' ? 'email' : 'text'}
                        placeholder={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        name={key}
                        value={deliveryInfo[key]}
                        onChange={handleInputChange}
                    />
                ))}
            </div>

            {/* -------------Right Side -------------*/}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>

                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'}/>
                    {/* --------------- Payment Method Selection ------------------*/}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        {paymentMethods.map((methodOption) => (
                            <div
                                key={methodOption.id}
                                onClick={() => setMethod(methodOption.id)}
                                className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
                            >
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === methodOption.id ? 'bg-green-400' : ''}`}></p>
                                {methodOption.logo && <img className='h-5 mx-4' src={methodOption.logo} alt={`${methodOption.label}_logo`} />}
                                <p className='text-gray-500 text-sm font-medium mx-4'>{methodOption.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button
                            onClick={handleOrderSubmission}
                            className='bg-black text-white px-16 py-3 text-sm'
                        >
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;