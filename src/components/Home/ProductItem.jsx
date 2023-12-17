import React from 'react'
import toples from '../../assets/toples.png'

const ProductItem = () => {
    return (
        <div className="product w-fit flex flex-col items-center justify-center static">
            <div className="product-pict">
                <img src={toples} alt="" width={275} height={275} />
                <p className='font-extrabold text-2xl text-start tracking-tighter w-full ml-3 mb-3'>Toples</p>
            </div>
            <div className="link flex flex-col space-y-3 absolute text-white">
                <button className='bg-[#F82013] scalable py-3 px-10 rounded-lg scalable hover:scale-95 hover:bg-[#A40800]'>Shopee</button>
                <button className='bg-[#F82013] scalable py-3 px-10 rounded-lg scalable hover:scale-95 hover:bg-[#A40800]'>Tokopedia</button>
            </div>
        </div>
    )
}

export default ProductItem
