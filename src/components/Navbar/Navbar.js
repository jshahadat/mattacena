import React from 'react';
import { Link } from "react-scroll";

const Navbar = () => {


     const menuItems = <React.Fragment>
          <li className='font-normal lg:text-[32px] mr-7 text-white'><Link to="reservation" spy={true} smooth={true}>Reservation</Link></li>
          <li className='font-normal lg:text-[32px] mr-7 text-white'><Link to="gallery" spy={true} smooth={true}>Gallery</Link></li>
          <li className='font-normal lg:text-[32px] mr-7 text-white'><Link to="about-us" spy={true} smooth={true}>About Us</Link></li>
          <div className='flex justify-center text-white'>
               <li className='font-normal text-white lg:text-[32px]'><Link className='mr-0' to="contact-us" spy={true} smooth={true}>Contact Us</Link></li>
          </div>

     </React.Fragment >

     return (
          <div className='lg:w-10-12  px-2 py-2 lg:mt-3 -m-8'>
               <div className="lg:pl-20  navbar flex justify-between">
                    <div className="navbar-start">
                         <Link className='flex lg:ml-7' to="/">
                              {/* <img width="100px" src={smart} alt="" /> */}
                         </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex menu menu-horizontal">

                         {menuItems}

                    </div>

                    <div className="dropdown dropdown-left rounded ">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden relative bottom-[34px] -left-3">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="inline-block stroke-current fill-white text-white w-[25px] h-[25px]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                         </label>
                         <ul tabIndex={1} className="relative menu menu-compact dropdown-content mt-1 ml-12 p-2 pl-4 shadow bg-[#201D1E] rounded w-[178px] " style={{ left: "-200px", zIndex: "1000000" }}>
                              <h1 className='bg-none font-normal text-white underline text-[16px] mb-3 mt-3' style={{ background: "none" }}><Link to="reservation" spy={true} smooth={true}>Reservation</Link></h1>
                              <h1 className='bg-none font-normal text-white underline text-[16px] mb-3 '><Link to="gallery" spy={true} smooth={true}>Gallery</Link></h1>
                              <h1 className='font-normal text-white underline text-[16px] mb-3 '><Link to="about-us" spy={true} smooth={true}>About Us</Link></h1>
                              <h1 className='font-normal text-white underline text-[16px] mb-3 '><Link to="contact-us" spy={true} smooth={true}>Contac Us</Link></h1>

                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;