import React, { useState } from 'react'
import { BsCloudUpload } from "react-icons/bs"
import { ImagetoBase64 } from "../utilities/ImagetoBase64"
import { toast } from 'react-hot-toast'
import axios from 'axios'

const NewProduct = () => {

  const [data, setData] = useState({ name: "", category: "", image: "", price: "", description: "", })

  const handelOnChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const uploadImage = async (e) => {
    const image = await ImagetoBase64(e.target.files[0])
    setData({ ...data, image })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, category, image, price, description } = data
    if (name && category && image && price && description) {
      const { data: result } = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/product/uploadProduct`, data)
      toast(result.message)
      setData({ name: "", category: "", image: "", price: "", description: "" })
    }
    else {
      toast("Enter Required Fields")
    }
  }

  return (
    <div className='p-4 '>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>NAME</label>
        <input type='text' name='name' className='bg-slate-200 p-1 my-1' onChange={handelOnChange} value={data.name} />

        <label htmlFor='category'>CATEGORY</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handelOnChange} value={data.category}>
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"ice cream"}>ice cream</option>
          <option value={"burger"}>burger</option>
          <option value={"pizza"}>pizza</option>
        </select>

        <label htmlFor='image' >IMAGE
          <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className='h-full' alt='productImage' /> : <span className='text-4xl'> <BsCloudUpload /> </span>
            }
            <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'></input>
          </div>
        </label>
        <label htmlFor='price' className='my-1' >PRICE</label>
        <input type={'text'} name="price" className='bg-slate-200 p-1 my-1' onChange={handelOnChange} value={data.price
        }></input>

        <label htmlFor='description'>DESCRIPTION</label>
        <textarea rows={2} name="description" className='bg-slate-200 p-1 my-1 resize-none' onChange={handelOnChange} value={data.description
        }></textarea>
        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium  my-2  drop-shadow-sm'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct