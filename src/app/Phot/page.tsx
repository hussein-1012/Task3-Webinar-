import React from 'react'
import Image from 'next/image'
import NavBar from '../Components/Nav'
const PhotPage = () =>
{
  return (
    <div>
      <NavBar/>  
      <div className='container m-auto flex justify-items-center flex-col text-center pt-28'>
        
        <h1 className='text-5xl max-sm:text-xl font-black text-black pt-20 '>
          Trusted and used by many organizations worldwide
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center mt-10">
          <Image src="/Cart1.png" alt="Cart1" width={200} height={100} /> 
          <Image src="/Cart2.png" alt="Cart2" width={200} height={100} />
          <Image src="/Cart3.jfif" alt="Cart3" width={200} height={100} />
          <Image src="/Cart4.png" alt="Cart4" width={200} height={100} />
          <Image src="/Cart5.png" alt="Cart5" width={200} height={100} />
          <Image src="/Cart6.jfif" alt="Cart6" width={200} height={100} />
        </div>
      </div>
    </div>
  )
}
export default PhotPage;
