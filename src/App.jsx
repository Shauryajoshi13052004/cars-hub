import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Top_sales from './components/Top_sales/Top_sales'
import Blog from './components/Blog/Blog'
import Offers from './components/Offers/Offers'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
  <>
    
      <Banner/>
   <div className="grid pt-9 justify-around ">
   <div className="grid justify-around grid-cols-6 xl:grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 gap-4 place-items-center ">
   <Category />
   <Category />
   <Category />
   <Category />
   <Category />
   <Category />
   </div>
   </div>

      <Top_sales/>
      <Blog/>
      <Offers/>
      <Divider/>
      <Footer/>
   
  </>
    )
}

export default App
