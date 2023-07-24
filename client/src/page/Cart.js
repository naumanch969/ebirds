import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'
import emptyCartImage from '../images/empty.gif'

const Cart = () => {
    const productCartItems = useSelector((state)=>state.product.cartItem)
    console.log(productCartItems)
    const totalPrice = productCartItems.reduce((acc,curr)=>acc + parseFloat(curr.total),0 )
    const totalQty = productCartItems.reduce((acc,curr)=>acc + parseFloat(curr.qty),0 )
  return (
    <>
    
    <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-2xl font-bold text-slate-600'>
           Cart 
        </h2>
        {productCartItems[0] ? 
        <div className='my-4 flex gap-4'>
         <div className='w-full max-w-3xl '>
            {
                productCartItems.map(el =>{
                    return(
                        <CartProduct
                        key={el._id}
                        id={el._id}
                        name={el.name}
                        image={el.image}
                        category={el.category}
                        qty={el.qty}
                        total={el.total}
                        price={el.price} 
                        />
                    )
                })
            }
 </div>
    
            <div className='w-full max-w-md ml-auto'>
                <h2 className='bg-green-500 text-white p-2 text-lg'>Summary</h2>
               <div className='flex w-full py-2 text-lg border-b'>
                <p >Total Qty</p>
                <p className='ml-auto w-32 font-bold '>{totalQty}</p>
                </div>
                <div className='flex w-full py-2 text-lg border-b'>
                    <p > Total price</p>
                    <p className='ml-auto w-32 font-bold '><span className="text-red-500">₨.</span>{totalPrice}</p>
                </div>
                <button className='bg-green-500 w-full text-lg font-bold py-2 text-white'>Payment</button>
            </div>
        </div>
        :
        <>
        <div className='flex w-full justify-center items-center mt-24 flex-col'>
            <img src={emptyCartImage} alt='' className='w-60'/>
            <p className='text-slate-500 text-3xl font-bold'>Cart is Empty</p>
        </div>
        </>
 }
 </div>

    </>
  )
}

export default Cart