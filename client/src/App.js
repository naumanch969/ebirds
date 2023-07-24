import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)

  useEffect(() => {
    (async () => {
      const { data: result } = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const jsonData = await result.json()
      dispatch(setDataProduct(jsonData))
    })()
  }, [])

  return (

    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>

  );
}

export default App;
