import React from 'react'
import Top_sales3 from'./Top_sales3'
import Top_sales1  from './Top_sales1'
export default function Top_sales() {
  return (
    <>
    <div className='flex flex-wrap w-screen p-3'> 
        <div className='w-1/5'>
        <Top_sales1/>
        </div>
        <div className='w-4/5'>
        <Top_sales3/>
        </div>
        </div>
    </>
  )
}
