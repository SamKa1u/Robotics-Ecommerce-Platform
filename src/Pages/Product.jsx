import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {ShopContext} from "../context/ShopContext.jsx";

const Product = () => {

    const { productId} = useParams();
    const { products } =useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState();

    const fetchProductData = async () => {

        products.map((item) => {
            if(item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                console.log(item)
                return null;
            }
        })

    }

    useEffect(() => {
        fetchProductData();
    },[productId, products])

    return productData ? (
            <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
                {/* Product Data*/}
                <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                    {/*Product Images*/}
                    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:justify-normal'>
                            {
                                productData.image.map((item,index) => (
                                    <img key={index} src={item} alt={item.title} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    ) : <div className='opacity-0'></div>
}

export default Product

