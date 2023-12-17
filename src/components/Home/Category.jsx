import React from 'react'
import CategoryItem from './CategoryItem'

const Category = () => {
    const index = [1, 2, 3, 4, 5, 6]
    return (
        <div className='mt-28 text-center'>
            <h1 className='title-text font-title'>Shop By Categories</h1>
            <div className="categories mt-10 flex justify-center grid-col-6 px-10 space-x-16">
                {
                    index.map((idx) => (
                        <CategoryItem key={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default Category
