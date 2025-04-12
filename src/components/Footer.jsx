import React from 'react'
import {assets} from "../assets/frontend_assets/assets";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='wb-5 w-32' alt= 'logo' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Lighting the way to a brighter future
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1 (529) 342-0812</li>
                        <li>contact@Prometheus.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2025@ Prometheus.com - All Rights Reserved.</p>
                <hr/>
                <p className='text-xs text-center'>E-Commerce Project : Samuel Kalu</p>
            </div>
        </div>
    )
}

export default Footer