import React from 'react'
import ProductItem from './ProductItem'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'

const Products = () => {
    return (
        <div className='mt-28 text-center'>
            <h1 className='title-text font-title'>All Product</h1>
            <div className="products mt-10  w-full 0 px-20 flex space-x-6 justify-center">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <div className="products mt-10  w-full 0 px-20 flex space-x-6 justify-center">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <button className='mt-10 py-3 px-10 bg-red-400 rounded-lg font-light font-title tracking-wide scalable hover:scale-105'>
                <span className='flex text-white items-center'>
                    <p className='mr-2'>View All Product</p>
                    <ArrowLongRightIcon height={25} />
                </span>
            </button>
        </div>
    )
}

export default Products
