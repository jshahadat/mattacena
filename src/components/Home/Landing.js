import React from 'react';
import PhoneIcon from "../../assets/phone-icon.png"
import Story from './Story';
import { Link } from "react-scroll";
import ViewGalLeft from "../../assets/v-g-Right.png"
import ViewGalRight from "../../assets/v-g-Right.png"
import RightArrow from "../../assets/arrow.png"
import LeftArrow from "../../assets/a-l.png"
import RoundPlate from "../../assets/RoundPlate.png"
import Navbar from '../Navbar/Navbar';
import O from "../../assets/o.png"
import CompsanyLogo from "../../assets/company-logo.png"

const Landing = () => {
     return (
          <div className='landingBackground '>
               <div className='flex justify-between items-center lg:pl-5 pt-2'>
                    <div>
                         <p className='flex items-center '>
                              <span><img className='lg:w-[52px] w-[29px] h-[29px] lg:h-[51px] lg:ml-0 ml-3' src={PhoneIcon} alt="" /></span> <span className=' text-4xl font-normal text-white lg:ml-5 lg:block hidden'>055 281193</span>
                         </p>
                    </div>
                    <div className='lg:mr-14 lg:ml-0 ml-10'>
                         {/* <h1 className='font-normal lg:text-[84px] text-[24px] text-white mb-0 pb-0 leading-none'>Mattacena</h1>
                         <p className='text-center text-white lg:text-[38px] text-[16px] font-normal mt-0 pt-0'>FIRENZE</p> */}
                         <img className='lg:w-[240px] w-[100px] filter-white' style={{ filter: "white" }} src={CompsanyLogo} alt="" />
                    </div>
                    <div className='invisible'>
                         <h1 >Mattacena</h1>
                    </div>
               </div>
               <div>
                    <Navbar></Navbar>

                    <div className='w-full  border-[.5px] border-[#CFB784] bg-[#CFB784] lg:block hidden mt-16'></div>

               </div>


               <div className='lg:bg-[#141111B0]'>

                    <div className='lg:mt-24'>

                         <h1 className='text-center lg:text-[116px] text-[22px] text-white font-normal leading-none'>Delight Your Palate</h1>
                         <h1 className='text-center lg:text-[116px] text-[22px] text-white font-normal leading-none flex justify-center'>Savor the Flavors of <span ><img className='lg:mt-[29px] lg:ml-[30px] lg:w-[80px] w-[16px] mt-[4px] ml-2' src={O} alt="" /></span>ur</h1>
                         <h1 className='text-center lg:text-[116px] text-[22px] text-white font-normal leading-none'>Authentic Cuisine</h1>
                    </div>
                    <div className='flex justify-center lg:mb-44 mb-12 lg:mt-12 mt-4'>
                         <button className='bg-[#CFB784] lg:border-2 border border-[#901F12] lg:w-[338px] w-[116px] lg:h-[68px] h-[32px] text-[#901F12] font-medium lg:text-[32px] text-[16px] lg:rounded-lg rounded-md'>Book Now</button>
                    </div>



                    <div className=' flex justify-center'>
                         <div>
                              <img className='w-[580px]' src={ViewGalLeft} alt="" />
                         </div>

                         <div style={{ zIndex: "1000000" }}>
                              <div className='lg:w-[480px] w-[119px] h-[119px] lg:h-[480px] bg-[#901F12] rounded-full lg:-ml-16 -ml-10 -mr-10 lg:-mr-16 lg:-mt-32 -mt-8 lg:p-10 p-2' style={{ zIndex: "1000000" }} >
                                   <div className=' border-2 rounded-full lg:p-16 p-4 border-[#CFB784]'>
                                        <img src={RoundPlate} alt="" />
                                   </div>

                              </div>
                              <div className='lg:block hidden'>
                                   <Link to="gallery" spy={true} smooth={true} className='text-white text-center flex justify-center items-center lg:ml-6 lg:mr-6'>
                                        <span><img src={LeftArrow} alt="" /></span>
                                        <span className='lg:text-[32px] font-normal lg:ml-4 lg:mr-4 underline'>VIEW GALLERY</span>
                                        <span><img src={RightArrow} alt="" /></span>
                                   </Link>
                              </div>
                         </div>

                         <div>
                              <img className='w-[580px]' src={ViewGalLeft} alt="" />


                         </div>
                    </div>


                    <div className='lg:mt-12 mt-4 lg:mb-10  pb-5 lg:pb-10 lg:bg-transparent bg-black'>
                         <Story></Story>
                    </div>
               </div>
          </div>
     );
};

export default Landing;