import React, { useEffect, useRef, useState } from 'react'
import delivery from "../images/fast-delivery.png"
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import {GrPrevious,GrNext} from "react-icons/gr"
import FilterProduct from "../component/FilterProduct"
import AllProduct from '../component/AllProduct'


const Home = () => {
  const productData =useSelector((state)=>state.product.productList)

  const homeProductCartList = productData.slice(0,6)

  const homeProductCartListVegetables = productData.filter(el=>el.category === "ice cream",[])
  
  
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200 
  }
  

 
  return (
    <div className='p-2 md:p-4 '>
      <div className='md:flex gap-4 py-2 '>

        <div className='md:w-1/2'>
        <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
            <img
              src={delivery}
              className="h-7" alt='delivery'
            />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'> <span className='text-green-600'>Pakistan's </span>First Online <span className='text-green-600'>Birds </span> Platform</h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p> 
          <button className="font-bold bg-green-900 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {homeProductCartList[0]?
           homeProductCartList.map(el =>{
              return(
                <HomeCard
                id={el._id}
                image ={el.image}
                price={el.price}
                name={el.name}
                category={el.category}
                />      
              )
            })
            :loadingArray.map((el,index)=>{
              return(
                <HomeCard
                key = {index}
                loading={'Loading....'}
                />
                
              )
            })
          }
          
        </div>
     </div>

     <div className="">
         <div className='flex w-full items-center'>
           <h2 
           className='font-black text-2xl text-slate-800 mb-4'>Fresh Vegetables
           </h2>
           <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious/></button>
            <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext/></button>
           </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListVegetables[0] ? homeProductCartListVegetables.map(el=>{
              return(
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />   
              )
            })
            :
            loadingArrayFeature.map((el,index) => <CardFeature loading="Loading..." key={index+"cartLoading"}/>)
            

          }
          
        </div>
        </div>

          <AllProduct heading={"All Products"}/>
        
    </div>
  )
}

export default Home