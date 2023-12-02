import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {

     const { register, formState: { errors }, handleSubmit } = useForm();


     return (
          <div className='lg:bg-transparent bg-[#201D1E] lg:pb-0 pb-12 lg:mb-20' id='contact-us'>
               <h1 className="text-center lg:text-6xl text-[18px] font-normal lg:text-[#201D1E] text-white lg:mb-10 mb-2 lg:pt-10 pt-6">Contact Us</h1>
               <div className='flex justify-center'>

                    <div className='lg:w-[1200px] w-[296px] bg-[#901F12]'>
                         <div className=' lg:border-4  border-[#CFB784] ml-[34px] mr-[34px] mt-[34px] mb-[34px] lg:pl-[40px] lg:pr-[40px] lg:pt-[20px] lg:pb-[20px]'>


                              <form onSubmit={handleSubmit()}>
                                   <div className='lg:flex'>
                                        <div className="form-control w-full lg:mr-3 lg:mb-3">
                                             <label className="label"> <span className="label-text text-white lg:text-base lg:font-medium text-[10px] font-normal">Name<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                             <input type="text" {...register("firstName", {
                                                  required: "First Name is Required"
                                             })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                             {errors.firstName && <p className='text-white'>{errors.firstName.message}</p>}
                                        </div>


                                        <div className="form-control w-full lg:ml-3">
                                             <label className="label"> <span className="label-text lg:text-base lg:font-medium text-[10px] font-normal text-white">Last Name<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                             <input type="text" {...register("lastName", {
                                                  required: "Last Name is Required"
                                             })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                             {errors.lastName && <p className='text-white'>{errors.lastName.message}</p>}
                                        </div>


                                   </div>

                                   <div className='lg:flex'>


                                        <div className="form-control w-full lg:mr-3 lg:mb-3">
                                             <label className="label"> <span className="label-text lg:text-base lg:font-medium text-[10px] font-normal text-white">Phone<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                             <input type="text" {...register("firstName", {
                                                  required: "First Name is Required"
                                             })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                             {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                                        </div>


                                        <div className="form-control w-full lg:ml-3">
                                             <label className="label"> <span className="label-text text-white lg:text-base lg:font-medium text-[10px] font-normal">Email<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                             <input type="text" {...register("lastName", {
                                                  required: "Last Name is Required"
                                             })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                             {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                                        </div>


                                   </div>
                                   <div className="form-control w-full ">
                                        <label className="label"> <span className="label-text text-white lg:text-base lg:font-medium text-[10px] font-normal">Message<span className=' text-white  ml-1 font-semibold'>*</span></span></label>
                                        <input type="text"
                                             {...register("email", {
                                                  required: "Email Address is required"
                                             })}
                                             className="lg:h-[50px] h-[38px] w-full bg-white" />
                                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                   </div>

                                   <div className='flex justify-center lg:mt-9 mt-5'>
                                        <button className='bg-[#CFB784] border-2 border-[#901F12] lg:w-[338px] lg:h-[68px] w-[116px] h-[32px] text-[#901F12] font-medium lg:text-[32px] text-[16px] lg:rounded-lg rounded '>Contact</button>
                                   </div>

                              </form>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ContactUs;