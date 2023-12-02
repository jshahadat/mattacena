import React from 'react';
import GallerayImg1 from "../../assets/g-1.png"
import GallerayImg2 from "../../assets/g-2.png"
import GallerayImg3 from "../../assets/g-3.png"
import GallerayImg4 from "../../assets/g-3.png"
import GallerayImg7 from "../../assets/g-7.png"

const Gallery = () => {
     return (
          <div className='bg-[#201D1E]' id="gallery">
               <div>

                    <h1 className='text-white lg:text-6xl text-[18px] font-normal text-center pt-6  lg:mb-8 mb-3'>Gallery</h1>

                    <div className=' w-full  border-[1px] border-[#CFB784] bg-[#CFB784] lg:block hidden'></div>

                    <div className='flex lg:justify-between justify-center lg:ml-6 lg:mr-6 lg:mt-8 lg:pb-8 '>
                         <div className='galleryBg'>
                              <div className=' grid grid-cols-2 gap-3 lg:w-[720px] w-[240px] lg:mr-6 lg:ml-0 ml-7 lg:pb-0 pb-6 lg:pt-0 pt-6'>
                                   <img src={GallerayImg1} alt="" />
                                   <img src={GallerayImg2} alt="" />
                                   <img src={GallerayImg3} alt="" />
                                   <img src={GallerayImg4} alt="" />
                                   <img src={GallerayImg1} alt="" />
                                   <img src={GallerayImg1} alt="" />
                              </div>
                         </div>

                         <div className='lg:block hidden'>
                              <div className=' grid grid-cols-3 gap-3 ml-6'>
                                   <img src={GallerayImg7} alt="" />
                                   <img src={GallerayImg7} alt="" />
                                   <img src={GallerayImg7} alt="" />

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Gallery;