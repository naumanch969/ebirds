import React from 'react'
import {VscFilterFilled} from "react-icons/vsc"
const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
    <div className={`text-3xl p-4 rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
    <VscFilterFilled/>
    </div>
    <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>  
  )
}

export default FilterProduct