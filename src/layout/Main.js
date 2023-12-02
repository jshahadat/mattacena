import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
     return (
          <div>
               <Outlet></Outlet>
               <div className='bg-[#000000] h-20 lg:hidden block'></div>
               <div className='bg-[#333333] h-20 lg:block hidden '></div>
               <Footer></Footer>
          </div>
     );
};

export default Main;