import React, { useState } from 'react';
import AppointBanner from '../../components/AppointBanner/AppointBanner';
import AvailAppointment from '../../components/AvailAppointment/AvailAppointment';
import Navbar from '../../components/Navbar/Navbar';

const Appoinment = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <Navbar/>
            <AppointBanner date={date} setDate={setDate}/>
            <AvailAppointment/>
            
        </div>
    );
};

export default Appoinment;