import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='w-full flex max-h-30 px-9 py-1 space-x-5 items-center bg-slate-200'>
            <img src={logo} alt="" className='h-20 mr-20' />
            <p>Home</p>
            <p>Furniture</p>
            <p>Shop</p>
            <p>Offer</p>
        </div>
    )
}

export default Navbar
