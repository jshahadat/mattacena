import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import "./BookingTable.css"
import DatePicker from 'react-multi-date-picker';
import { FaCalendarAlt } from 'react-icons/fa';
import CalenderIcon from "../../assets/calaender.png"

const BookingTable = () => {
     const { register, formState: { errors }, control, handleSubmit } = useForm();

     const windowSize = useRef([window.innerWidth, window.innerHeight]);
     const handleDatePickerClick = () => {
          // Find the DatePicker element and update its style
          const datePicker = document.querySelector('.react-datepicker-wrapper');
          if (datePicker) {
               datePicker.style.zIndex = 1000000;
          }
     };

     return (
          <div className=' lg:bg-transparent bg-[#201D1E]'>
               <div className='bookingTableBg lg:mt-12 lg:mb-12 lg:ml-8 lg:mr-8' id="reservation">
                    <div className='flex justify-center items-center'>
                         <div className='lg:mb-'>
                              <h1 className="text-center lg:text-6xl text-[18px] font-normal text-white lg:mb-10 mb-2 lg:mt-16 mt-4">BOOK A TABLE</h1>
                              <div className='flex justify-center'>

                                   <div className='lg:w-[1200px] w-[296px] bg-[#901F12]'>
                                        <div className=' lg:border-4  border-[#CFB784] ml-[34px] mr-[34px] mt-[34px] mb-[34px] lg:pl-[40px] lg:pr-[40px] lg:pt-[20px] lg:pb-[20px]'>


                                             <form onSubmit={handleSubmit()}>
                                                  <div className='lg:flex'>
                                                       <div className="form-control w-full lg:mr-3 lg:mb-3">
                                                            <label className="label"> <span className="label-text text-white lg:text-base lg:font-medium text-[10px]">Name<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <input type="text" {...register("firstName", {
                                                                 required: "First Name is Required"
                                                            })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                                            {errors.firstName && <p className='text-white'>{errors.firstName.message}</p>}
                                                       </div>


                                                       <div className="form-control w-full lg:ml-3">
                                                            <label className="label"> <span className="label-text lg:text-base lg:font-medium text-white text-[10px]">Last Name<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <input type="text" {...register("lastName", {
                                                                 required: "Last Name is Required"
                                                            })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                                            {errors.lastName && <p className='text-white'>{errors.lastName.message}</p>}
                                                       </div>


                                                  </div>

                                                  <div className='lg:flex'>


                                                       <div className="form-control w-full lg:mr-3 lg:mb-3">
                                                            <label className="label"> <span className="label-text lg:text-base lg:font-medium text-white text-[10px]">Phone<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <input type="text" {...register("firstName", {
                                                                 required: "First Name is Required"
                                                            })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                                            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                                                       </div>


                                                       <div className="form-control w-full lg:ml-3">
                                                            <label className="label"> <span className="label-text text-white lg:text-base lg:font-medium text-[10px]">Email<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <input type="text" {...register("lastName", {
                                                                 required: "Last Name is Required"
                                                            })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                                            {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                                                       </div>

                                                  </div>
                                                  <div className='flex'>


                                                       <div className="form-control lg:w-full w-[104px] lg:mb-3 lg:mr-3 mr-4">
                                                            <label className="label"> <span className="label-text lg:text-base lg:font-medium text-white text-[10px]">Number of Guests<span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <input type="number" {...register("firstName", {
                                                                 required: "First Name is Required"
                                                            })} className="lg:h-[50px] h-[38px] w-full bg-white" />
                                                            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                                                       </div>

                                                       <div className="form-control lg:w-full w-[104px]  lg:mb-3 lg:ml-2">
                                                            <label className="label pb-[7px]"> <span className="label-text lg:text-base lg:font-medium text-white text-[10px] ">Date & Time <span className=' text-white ml-1 font-semibold'>*</span></span></label>
                                                            <Controller
                                                                 control={control}
                                                                 name="date"
                                                                 rules={{ required: true }}
                                                                 render={({ field: { onChange, name, value }, fieldState, formState: { errors } }) => (
                                                                      <div className="relative">

                                                                           {windowSize.current[0] >= 600 ?
                                                                                <>
                                                                                     <DatePicker
                                                                                          selected={value || null}
                                                                                          onChange={(date) => {
                                                                                               onChange(date || "");
                                                                                          }}
                                                                                          dateFormat="MM/dd/yyyy"

                                                                                          style={{
                                                                                               paddingBottom: "2px",
                                                                                               height: "50px",
                                                                                               width: "516px",
                                                                                               borderRadius: "0px",


                                                                                          }}
                                                                                          className=' focus:z-40'
                                                                                     />
                                                                                     <img className="absolute top-1/2 transform -translate-y-1/2 right-2 text-red-500" src={CalenderIcon} alt="" />
                                                                                </>
                                                                                :
                                                                                <>
                                                                                     <DatePicker

                                                                                          selected={value || null}
                                                                                          onChange={(date) => {
                                                                                               onChange(date || "");
                                                                                          }}
                                                                                          dateFormat="MM/dd/yyyy"
                                                                                          style={{

                                                                                               paddingBottom: "2px",
                                                                                               height: "38px",
                                                                                               width: "106px",
                                                                                               borderRadius: "0px",
                                                                                               position: "relative",

                                                                                          }}
                                                                                          onClick={handleDatePickerClick}
                                                                                     />

                                                                                     <img
                                                                                          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-red-500"
                                                                                          src={CalenderIcon}
                                                                                          alt=""
                                                                                          style={{

                                                                                          }}
                                                                                     />
                                                                                </>

                                                                           }

                                                                           {/* 
                                                                           <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-2 text-red-500" /> */}
                                                                           {errors && errors[name] && errors[name].type === "required" && (
                                                                                <span className="text-red-500">Your error message!</span>
                                                                           )}
                                                                      </div>
                                                                 )}
                                                            />
                                                       </div>

                                                  </div>


                                                  <div className='flex justify-center lg:mt-9 mt-5'>
                                                       <button className='bg-[#CFB784] border-2 border-[#901F12] lg:w-[338px] lg:h-[68px] w-[116px] h-[32px] text-[#901F12] font-medium lg:text-[32px] text-[16px] lg:rounded-lg rounded pb-1'>Book Now</button>
                                                  </div>

                                             </form>
                                        </div>
                                   </div>

                              </div>
                         </div >
                    </div>
               </div >
          </div>
     );
};

export default BookingTable;