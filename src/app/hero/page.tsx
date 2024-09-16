import React from 'react';
import Image from 'next/image';
import NavBar from '../Components/Nav';
const Heropage = () => 
{
  return (
    <div>
      <NavBar/>
      <div className='container mx-auto flex flex-col items-center text-center pt-28'>
        <h1 className='text-6xl max-sm:text-xl font-black text-black pt-20'>
          All-in-One Solution for<br/> Effortless Webinar Hosting
        </h1>
        <p className='mt-7 text-black'>
          Create immersive live Webinar experiences with everything you need.
          Join industry experts for a <br/>transformative learning experience and gain the audience you need.
        </p>
        <div className='mt-10 flex space-x-5'>
          <button className="h-10 px-7 font-bold rounded-md border border-slate-200 text-slate-900 bg-yellow-400" type="button">
            Plans & Prices
          </button>
          <button className="h-10 px-6 font-bold rounded-md border border-slate-200 text-slate-900 bg-transparent" type="button">
            Contact Us
          </button>
        </div>
        <Image src="/home.png" width={800} height={100} className="w-full mt-10" alt="Home Image"/>
      </div>
    </div>
  );
};
export default Heropage;
