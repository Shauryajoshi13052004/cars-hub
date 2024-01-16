import React from 'react'



function Category() {
  return (
<section>
  <div className='flex flex-row bg-blue-100 gap-2  justify-center'>
    <div className="p-4 text-center w-40 bg-white h-24 rounded" >
      <img src='public/images/images/logos/ford.webp'/>
 </div>
    <div className="p-4 text-center w-40 bg-white h-24 rounded" >
    <img src='public/images/images/logos/honda.webp'/>

  </div>
    <div className="p-4 text-center w-40 bg-white h-24 rounded" >
    <img src='public/images/images/logos/hyundai.webp'/>

  </div>
  <div className="p-4 text-center w-40 bg-white h-24 rounded" >
  <img src='public/images/images/logos/maruti-suzuki.webp'/>

  </div><div className="p-4 text-center bg-white w-40 h-24 rounded" >
  <img src='public/images/images/logos/renault.webp'/>

  </div><div className="p-4 text-center bg-white w-40 h-24 rounded" >
  <img src='public/images/images/logos/tata.webp'/>

  </div>
  <div className="p-4 text-center w-40 bg-white h-24 rounded" >
  <img src='public/images/images/logos/toyota.webp'/>

  </div>
  </div>
</section>  
)
}

export default Category