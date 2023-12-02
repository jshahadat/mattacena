import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import TestimonialCardOne from './TestimonialCardOne';
import Arrow from "../../assets/arrow.png"


const Testimonials = () => {
     return (
          <CarouselProvider
               className='overflow-hidden'
               visibleSlides={1}
               totalSlides={4}
               step={1}
               naturalSlideWidth={400}
               naturalSlideHeight={500}
               isIntrinsicHeight
               infinite
          >
               <p />
               <Slider >
                    <Slide index={0}>
                         <TestimonialCardOne></TestimonialCardOne>
                    </Slide>
                    <Slide index={1}>

                         <TestimonialCardOne></TestimonialCardOne>
                    </Slide>
                    <Slide index={2}>
                         <div>
                              <h1 className=' text-green-500 text-2xl text-center'>    Coming SOON......</h1>
                         </div>
                    </Slide>
                    <Slide index={3}>
                         <div>
                              <h1 className=' text-green-500 text-2xl text-center'>    Coming SOON......</h1>
                         </div>
                    </Slide>
               </Slider>
               <ButtonNext className='flex absolute lg:right-[80px] right-6 lg:top-[2660px] top-[1028px] text-white' ><span className='lg:text-2xl text-xs font-normal'>Next</span> <span><img className='lg:ml-4 ml-1 mt-[2px] lg:w-[18px] w-[8px]' src={Arrow} alt="" /></span></ButtonNext>
          </CarouselProvider>
     );
};

export default Testimonials;