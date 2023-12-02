import React, { useEffect, useRef, useState } from 'react';
import StoryuModalBg from "../../assets/storyBg.png"
import "./LandingPage.css"
import { Link } from 'react-router-dom';

const Story = () => {

     const windowSize = useRef([window.innerWidth, window.innerHeight]);

     return (
          <div>
               <h1 className='text-center text-white lg:text-[64px] text-[18px] font-normal lg:mb-8 mb-2 lg:pt-0 pt-10'>OUR STORY</h1>
               <div className=' flex justify-center lg:mb-12 mb-4'>
                    <p className='text-center text-white lg:text-[32px] font-normal lg:w-11/12 w-10/12'>If you look up the story of Mattacèna on the Internet, 'un c'è: e ti t' ta' t' (one worries you'). A long time ago, but not too long ago, when spring was already almost summer, the harvest began in the countryside. In short, when the harvest was reaped it was a big job, but we were all together and there was a mountain of people, the little men, the women, the children, the old people, and everyone gave each other a hand.</p>
               </div>
               <div className='flex justify-center'>
                    {windowSize.current[0] >= 600 ?
                         <>

                              <Link to="/learn-more"
                                   className={`bg-[#CFB784] lg:border-2 border border-[#901F12] lg:w-[338px] w-[116px] lg:h-[68px] h-[32px] text-[#901F12] font-medium lg:text-[32px] text-[16px] lg:rounded-lg rounded-md text-center`}
                              // onClick={handleClick}
                              >
                                   Learn More
                              </Link>
                         </>
                         :
                         <>
                              {/* You can open the modal using document.getElementById('ID').showModal() method */}
                              <button className="bg-[#CFB784] lg:border-2 border border-[#901F12] lg:w-[338px] w-[116px] lg:h-[68px] h-[32px] text-[#901F12] font-medium lg:text-[32px] text-[16px] lg:rounded-lg rounded-md pb-1" onClick={() => document.getElementById('my_modal_3').showModal()}> Learn More</button>
                              <dialog id="my_modal_3" className="modal ">
                                   <div className=' bg-black flex justify-center'>
                                        <div className="storyBg w-10/12">
                                             <form method="dialog " className='text-end mr-4 mt-4'>
                                                  {/* if there is a button in form, it will close the modal */}
                                                  <button className="btn btn-sm btn-circle btn-ghost text-white ">✕</button>
                                             </form>
                                             <h1 className='text-white text-center text-[18px] font-normal mb-8'>OUR STORY</h1>
                                             <p className='text-center text-white ml-6 mr-6 pb-10'>If you look up the story of Mattacèna on the Internet, 'un c'è: e ti t' ta' t' (one worries you'). A long time ago, but not too long ago, when spring was already almost summer, the harvest began in the countryside. In short, when the harvest was reaped it was a big job, but we were all together and there was a mountain of people, the little men, the women, the children, the old people, and everyone gave each other a hand.</p>
                                        </div>
                                   </div>
                              </dialog>
                         </>
                    }



               </div>
          </div>
     );
};

export default Story;