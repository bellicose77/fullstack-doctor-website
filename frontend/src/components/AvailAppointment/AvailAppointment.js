import React, { useState } from 'react';
import { format } from 'date-fns';

const AvailAppointment = ({date}) => {
    const [fakeData,setFakeData] = useState([])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on : {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailAppointment;