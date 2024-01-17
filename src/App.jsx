import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Top_sales from './components/Top_sales/Top_sales'
import Blog from './components/Blog/Blog'
import Offers from './components/Offers/Offers'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import About from './components/About/About'

function App() {

   return (
      <>
<div className='bg-white w-screen'>
        
      
         <Banner />
         <Category />
         <Card />
         {/* <Top_sales/> */}
         <Offers/>
         <Divider />
         <Footer />
         {/* <About/> */}
         </div>
      </>
   )
}

export default App
