import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import {  HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';



const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu((preve) => !preve);
      };

const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-14">
            <img src={logo} className="h-full" alt='logo' />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"/"}>Home</Link>
            <Link to={"/menu/6450f3eb18e250df4d020dee"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className='text-2xl text-slate-600 relative'>
          <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">{cartItemNumber.length}</div>
              <Link to={'cart'}>  <BsCartFill/> </Link>
          </div>
          <div className=' text-slate-600 relative' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer'>
                <HiOutlineUserCircle/>
            </div>
            {showMenu && (
            <div className='absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                {/* {
                  process.env.REACT_APP_ADMIN_EMAIL == 
                } */}
                <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer px-2'>New Product</Link><hr/>
                <Link to={"login"} className='whitespace-nowrap cursor-pointer px-2'>Login</Link><hr/>
              <nav className=" text-base md:text-lg flex flex-col md:hidden">
               <Link to={"/"} className='px-2 py-1'>Home</Link><hr/>
               <Link to={"/menu/6450f3eb18e250df4d020dee"} className='px-2 py-1'>Menu</Link><hr/>
               <Link to={"/about"} className='px-2 py-1'>About</Link><hr/>
               <Link to={"/contact"} className='px-2 py-1'>Contact</Link><hr/> 
              </nav>
            
            </div>
            
            )}    
          </div>
            
          </div>
    </div>
    </header>
  )
}

export default Header