import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const AvailAppointment = ({date}) => {
    const [fakeData,setFakeData] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setFakeData(data))
    },[]);
    console.log(fakeData)
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on : {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailAppointment;