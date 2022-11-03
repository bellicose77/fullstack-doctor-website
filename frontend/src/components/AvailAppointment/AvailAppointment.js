import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSlot from '../AppointmentSlot/AppointmentSlot';

const AvailAppointment = ({date}) => {
    const [fakeDatas,setFakeDatas] = useState([]);
    const[modal,setModal] = useState(null)
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setFakeDatas(data))
    },[]);
    console.log(fakeDatas)
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-3 gap-5'>
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