import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Top_sales from './components/Top_sales/Top_sales'
import Blog from './components/Blog/Blog'
import Offers from './components/Offers/Offers'
import Divider from './components/Divider/Divider'

function App() {
  
  return (
  <>
    <section>
      <Banner/>
      <Category/>
      <Top_sales/>
      <Blog/>
      <Offers/>
      <Divider/>
    </section>
  </>
    )
}

export default App
