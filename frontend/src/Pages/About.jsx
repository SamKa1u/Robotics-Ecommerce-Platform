import React from 'react'
import Title from "../components/Title.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

const About = () => {

    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about img'/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Prometheus was born out of a commitment to progress and like our name-sake we hope to bring the world into a new age bathed in the warm light of innovation</p>
                    <b className='text-gray-800'>Our Mission:</b>
                    <p>Our mission at Prometheus is to usher in a new age of accessibility for robotics research platforms through the sharing of open-source technology we seek to democratize robotics as a whole.</p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality
                        standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience</b>
                    <p className='text-gray-600'>With our user friendly interface and hassle-free order processing, shopping can't get any
                        easier!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is always ready to assist and support your shopping experience.</p>
                </div>
            </div>

            <NewsLetterBox/>

        </div>
    )
}

export default About