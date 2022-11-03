import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSlot from '../AppointmentSlot/AppointmentSlot';
import BookModal from '../BookModal/BookModal';

const AvailAppointment = ({date}) => {
    const [fakeDatas,setFakeDatas] = useState([]);
     const[treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setFakeDatas(data))
    },[]);
    console.log(treatment)
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-3 gap-5'>
                {
                    fakeDatas.map(solt=><AppointmentSlot 
                        key={solt._id}
                        solt={solt}
                        setTreatment={setTreatment}
                    ></AppointmentSlot>)
                }
            </div>
            {
                treatment && <BookModal date={date} setTreatment={setTreatment} treatment={treatment}></BookModal>
            }
        </div>
        
    );
};

export default AvailAppointment;