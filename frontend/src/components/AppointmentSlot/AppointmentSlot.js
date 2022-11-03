import React from 'react';

const AppointmentSlot = ({solt}) => {
    const {name,slots} = solt;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="card-title text-secondary justify-center">{name}</h2>
          <p>{slots.length} {slots.length ? "spaces":"space"} avaiable</p>
          <div class="card-actions justify-center">
            <button disabled={slots.length===0} class="btn btn-primary">Booked Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default AppointmentSlot;