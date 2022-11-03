import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSlot from '../AppointmentSlot/AppointmentSlot';

const AvailAppointment = ({date}) => {
    const [fakeDatas,setFakeData] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setFakeData(data))
    },[]);
    console.log(fakeDatas)
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on : {format(date, 'PP')}</h4>
            <div>
                {
                    fakeDatas.map(solt=><AppointmentSlot 
                        key={solt._id}
                        solt={solt}
                    ></AppointmentSlot>)
                }
            </div>
        </div>
        
    );
};

export default AvailAppointment;