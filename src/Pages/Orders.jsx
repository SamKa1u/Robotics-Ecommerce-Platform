import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import api from '../api/api.js';

const Orders = () => {

    const { user, isAdmin, currency} = useContext(ShopContext);
    const [orders, setOrders] = useState([]); //state for storing fetched order

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get('/api/orders', {
                    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
                // Filter orders by the current user if not an admin
                if (!isAdmin) {
                    const filteredOrders = response.data.filter(order => order.user._id === user._id);
                    setOrders(filteredOrders);
                } else {
                    setOrders(response.data);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [isAdmin, user]); // Empty dependency array means this runs once on component mount

    const handleOrderStatusUpdate = async (orderId, status) => {
        try {
            const res = await api.put(`/api/orders/${orderId}`, { status }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setOrders(orders.map(order => order._id === orderId ? res.data : order));  // Update local state after update
        } catch (err) {
            console.error("Failed to update order status:", err);
        }
    };
    return (
        <div className='border-t pt-16'>
            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'}/>
            </div>
            {/* Display message if no orders are found */}
            {orders.length === 0 ? (
                <p className="text-center text-lg text-gray-500">You have no orders yet.</p>
            ) : (
            <div>
                {orders.map((order, index) => (
                        <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' key={index}>
                            {/* Display products inside each order */}
                            <div className='flex items-start gap-6 text-sm'>
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <img className='w-16 sm:w-20' src={item.product.image[0]} alt={item.product.name} />
                                        <div>
                                            <p className='sm:text-base font-medium'>{item.product.name}</p>
                                            <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                                <p className='text-lg'>{currency}{item.product.price}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Order status and actions */}
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className={`min-w-2 h-2 rounded-full ${order.status === 'Ready to ship' ? 'bg-green-500' : 'bg-yellow-500'}`}></p>
                                    <p className='text-sm md:text-base'>{order.status}</p>
                                </div>
                                {/* Admin can update status */}
                                {isAdmin && (
                                    <button
                                        onClick={() => handleOrderStatusUpdate(order._id, 'Shipped')}
                                        className="border px-4 py-2 text-sm font-medium rounded-sm"
                                    >
                                        Update Status
                                    </button>
                                )}

                                {/* User can view the order details */}
                                {!isAdmin && (
                                    <button
                                        className="border px-4 py-2 text-sm font-medium rounded-sm"
                                    >
                                        View Order Details
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;