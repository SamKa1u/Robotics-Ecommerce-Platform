import React from 'react'
import {assets} from "../assets/frontend_assets/assets.js";

const OurPolicy = () => {

    return (
        <div
            className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='Exchange icon'/>
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer Hassle free exchanges</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='Exchange icon'/>
                <p className='font-semibold'>7 day return policy</p>
                <p className='text-gray-400'>free return policy</p>
            </div>

            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt='Exchange icon'/>
                <p className='font-semibold'>Best Customer support</p>
                <p className='text-gray-400'>24/7 customer support</p>
            </div>
        </div>
    )
}

export default OurPolicy