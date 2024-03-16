import React from 'react'
import Shop2 from'./Shop2'
import Shop1  from './Shop1'
import Divider from '../Divider/Divider'
import Footer from '../Footer/Footer'
export default function Top_sales() {
  return (
    <>
    <div className="flex flex-wrap w-screen justify-around items-center text=[#f9f9f9]">
        <div className='flex flex-wrap w-screen justify-around items-center py-[76px]'>
        <h1 className='flex flex-wrap text-[55px]'>Shop</h1>
        <ul className='flex flex-wrap gap-4'>
            <li>
             <a href='/' className='hover:underline'>Home
             </a> 
             </li>
            <li> &#62; </li>
            <li>
            <a href='http://localhost:5173/shop'>Shop </a>

            </li>
            <li> &#62; </li>
            <li>
              <a href='http://localhost:5173/about'>About us </a></li>
              <li> &#62; </li>
            <li>
              <a href='http://localhost:5173/contact'>Contact us </a></li>
        </ul>
    </div>
    </div>
    <div className='flex flex-wrap bg-white w-screen p-3'> 
        <div className='w-1/5 pt-12'>
        <Shop1/>
        </div>
        <div className='w-4/5'>
        <Shop2/>
        </div>
        </div>
        <Divider/>
    <Footer/>
    </>
  )
}
