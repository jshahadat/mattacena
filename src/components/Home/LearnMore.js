import React from 'react';
import Navbar from '../Navbar/Navbar';
import PhoneIcon from "../../assets/phone-icon.png"
import CompsanyLogo from "../../assets/company-logo.png"

const LearnMore = () => {
     return (
          <div className=' overflow-hidden'>
               <div className=''>
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
                    <div className='bg-[#141111B0]'>
                         <Navbar></Navbar>

                         <div className='w-full  border-[.5px] border-[#CFB784] bg-[#CFB784] lg:block hidden mt-16'></div>

                    </div>


                    <div className=' bg-black'>
                         <div className='storylargeBg'>
                              <h1 className='text-center text-white lg:text-[64px] text-[18px] font-normal lg:mb-8 mb-2 lg:pt-0 pt-10'>OUR STORY</h1>
                              <div className=' flex justify-center lg:mb-12 mb-4'>
                                   <p className='text-center text-white lg:text-[32px] font-normal lg:w-11/12 w-10/12'>If you look up the story of Mattacèna on the Internet, 'un c'è: e ti t' ta' t' (one worries you'). A long time ago, but not too long ago, when spring was already almost summer, the harvest began in the countryside. In short, when the harvest was reaped it was a big job, but we were all together and there was a mountain of people, the little men, the women, the children, the old people, and everyone gave each other a hand.</p>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default LearnMore;