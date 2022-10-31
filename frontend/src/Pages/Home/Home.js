import React from 'react';
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Navbar/>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;