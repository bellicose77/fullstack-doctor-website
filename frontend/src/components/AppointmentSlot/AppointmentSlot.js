import React from 'react';

const AppointmentSlot = ({solt}) => {
    const {name,slots} = solt;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{slots.length} {slots.length ? "spaces":"space"} avaiable</p>
          <div class="card-actions justify-end">
            <button disabled={slots.length===0} class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default AppointmentSlot;