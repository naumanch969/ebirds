import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct'
import { addCartItem } from '../redux/productSlice'

const Menu = () => {
  const { filterby } = useParams()
  const dispatch = useDispatch()
  const productData = useSelector(state => state.product.productList)

  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay)

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))

  }
  return (
    <div className='py-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-white drop-shadow '>
        <div className='max-w-lg overflow-hidden '>
          {/* {productDisplay.image && <img src={productDisplay?.image} className='hover:scale-105 transition-all h-full' alt='' />} */}
        </div>
        <div className='flex flex-col gap-1 ml-3 mt-1'>
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl ">
            {productDisplay?.name}
          </h3>
          <p className=" text-slate-500 font-medium text-2xl">{productDisplay?.category}</p>
          <p className=" font-bold">
            <span className="text-red-500 md:text-2xl">₨</span>
            <span>{productDisplay?.price}</span>
          </p>
          <div className='flex gap-3'>
            <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
            <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]" onClick={handleAddCartProduct}>Add to Cart</button>
          </div>
          <div className=''>
            <p className='text-slate-700 font-medium'>Descripton:</p>
            <p>{productDisplay?.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={'Related Products'} />
    </div>
  )
}

export default Menu