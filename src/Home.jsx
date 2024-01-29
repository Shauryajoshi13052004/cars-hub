import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Top_sales from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import Offers from './components/Offers/Offers'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import About from './components/About/About'
import Review2 from './components/Review2/Review2'
import Navbar from './components/Navbar/Navbar'
function Home() {

   return (
      <>
<div className='bg-white w-screen'>
        
         <Banner />
         <div className="flex flex-col justify-center items-center pt-3">
         <h1 className='text-[40px] text-blue font-medium '>Category</h1>
        </div> 
         <Category />
         <div className="flex flex-col justify-center items-center pt-3">
         {/* <h1 className='text-blue text-xl font-500 tracking-wider mb-3 pt-5'>Category</h1> */}
        <h1 className='text-[40px] text-blue font-medium '>Product Card</h1>
        </div> 
         <Card />
         <div className="flex flex-col justify-center items-center pt-3">
        {/* <h1 className='text-[#7fa15a] text-xl font-500 tracking-wider mb-3 pt-5'>Welcome to Car Hub</h1> */}
        <h1 className='text-[40px] text-blue font-medium '>Offers</h1>
        </div> 
         <Offers/>
         <div className="flex flex-col justify-center items-center pt-3">
         <h1 className='text-[40px] text-blue font-medium '>Review</h1>
        {/* <h1 className='text-[40px] font-medium '>Testimonials</h1> */}
        </div> 
         <Review2/>
         </div>
      </>
   )
}

export default Home
