import React from 'react';

const AppointmentSlot = ({solt,setTreatment}) => {
    const {name,slots} = solt;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="card-title text-secondary justify-center">{name}</h2>
          <p>{
               slots.length > 0 ? <span>{slots[0]}</span>:<span>Try another time</span>
            }

        </p>
        <p>{slots.length}  {slots.length > 1 ? "available spaces": "available space"}</p>
          <div class="card-actions justify-center">
            <label 
            for="booking-modal" 
            onClick={()=>setTreatment(solt)} 
            disabled={slots.length===0}
            class="btn btn-primary">Booked Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentSlot;