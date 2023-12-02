import React from 'react';
import Landing from './Landing';
import Testimonials from '../Testimonials/Testimonials';
import BookingTable from '../BookingTable/BookingTable';
import Gallery from '../Gallery/Gallery';
import ContactUs from '../ContactUs/ContactUs';
import Footer from "../Footer/Footer"

const Home = () => {
     return (
          <div className=' overflow-hidden'>
               <Landing></Landing>
               <Testimonials></Testimonials>
               <BookingTable></BookingTable>
               <Gallery></Gallery>
               <ContactUs></ContactUs>

               {/* <Footer></Footer> */}
          </div>
     );
};

export default Home;