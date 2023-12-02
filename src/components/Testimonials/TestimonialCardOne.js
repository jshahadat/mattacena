import React from 'react';
import TestimonialImg1 from "../../assets/testimonial1.png"
import StarIcon from "../../assets/start-icon.png"


const TestimonialCardOne = () => {
     return (
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-black testimonialBg'>
               <div>
                    <img className='lg:h-[547px] lg:w-[730px] lg:block hidden' src={TestimonialImg1} alt="" />
               </div>
               <div>
                    <div className='text-center'>
                         <h1 className='text-white font-normal lg:text-6xl text-lg lg:mt-8 mt-4 uppercase'>Testimonials</h1>
                         <div className='flex justify-center lg:mt-9 mt-2 lg:mb-9 mb-2'>
                              <img className='lg:w-[37px] w-[9px] lg:h-[37px] h-[9px] lg:mr-4 mr-2' src={StarIcon} alt="" />
                              <img className='lg:w-[37px] w-[9px] lg:h-[37px] h-[9px] lg:mr-4 mr-2' src={StarIcon} alt="" />
                              <img className='lg:w-[37px] w-[9px] lg:h-[37px] h-[9px] lg:mr-4 mr-2' src={StarIcon} alt="" />
                              <img className='lg:w-[37px] w-[9px] lg:h-[37px] h-[9px] lg:mr-4 mr-2' src={StarIcon} alt="" />
                              <img className='lg:w-[37px] w-[9px] lg:h-[37px] h-[9px] ' src={StarIcon} alt="" />

                         </div>
                    </div>
                    <div className='flex justify-center'>
                         <p className=' text-white font-normal lg:text-start text-center lg:text-2xl text-xs lg:mr-10 lg:w-full w-[300px] lg:ml-0 '>
                              I can't say enough good things about this restaurant. From the moment I walked in, I was impressed by the warm and inviting ambiance. The food was an absolute delight, bursting with incredible flavors and beautifully presented. But what truly stood out was the impeccable service. The staff went above and beyond to make our dining experience exceptional.

                         </p>
                    </div>
                    <p className='text-white lg:text-2xl text-xs font-normal lg:mt-24 mt-5 mb-5 lg:text-start text-center '>Alexander T.</p>
               </div>
          </div>
     );
};

export default TestimonialCardOne;