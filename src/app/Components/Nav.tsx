'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function NavBar() 
{
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
      
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">  
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex justify-start">
             <Link href="/">
               <Image src="/Logo.png" width={300} height={90} className="text-2x" alt="logo"/>
             </Link>
            </div>
             
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src="/CLOSE.jpg" width={30} height={30} alt="close" />) :
                    ( <Image src="/Hamburger_icon.jpeg" width={30} height={30} alt="menu"
                      className="focus:border-none w-10 active:border-none" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
                ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>

              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-600">
                  <Link href="../hero" onClick={() => setNavbar(!navbar)}>
                    Hero 
                  </Link>
                </li>

                <li className="text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-600">
                  <Link href="../Phot" onClick={() => setNavbar(!navbar)}>
                    Photos
                  </Link>
                </li>

                <li className="text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-600">
                  <Link href="./about" onClick={() => setNavbar(!navbar)}>
                    V.Connect
                  </Link>
                </li>
                    
                <li className="text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-600">
                  <Link href="../V.connect" onClick={() => setNavbar(!navbar)}>
                    V.Connect_Webinar
                  </Link>
                </li>
                
                <li className="text-xl text-black py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-600">
                  <Link href="../faqs" onClick={() => setNavbar(!navbar)}>
                    FAQS
                  </Link>
                </li>
        
              </ul>
            </div>
            
          </div>

          <div className="flex justify-start space-x-5">
            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-yellow-400" type="button">
              Login
            </button>
            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 bg-yellow-400" type="button">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
