import React from 'react';
import Logo from "../../assets/Mattacena.png"

const Footer = () => {
     return (
          <div className='lg:block hidden' id="about-us">

               <footer className="footer p-10 text-base-content  flex justify-around items-center bg-[#000000] ">
                    <div>
                         <nav className="grid grid-flow-col gap-4 mb-5 text-white text-[18px] font-normal">
                              <a className="link link-hover">HOME</a>
                              <a className="link link-hover">OUR STORY</a>
                              <a className="link link-hover">WHERE ARE WE</a>
                              <a className="link link-hover">CONTACT US</a>
                         </nav>
                         <nav className="grid grid-flow-col gap-4 text-white text-[18px] font-normal">
                              <a className="link link-hover">055 281193</a>
                              <a className="link link-hover">info@mattecena.it</a>
                              <a className="link link-hover">Via del Moro, 85R, 50123 Firenzi Fl</a>
                         </nav>
                    </div>

                    <div>
                         <img className='w-[280px] -mt-10' src={Logo} alt="" />
                         <div className='-mt-16 text-[18px] font-normal'>
                              <p className='text-[#A7222D] text-end mb-2'>Copyright © 2023 MAttacena </p>
                              <p className='text-end'><span className='text-[#A7222D]'>All right reserved. </span><span className=' text-white '>Privacy Policy</span></p>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;