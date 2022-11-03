import React from 'react';
import { format } from 'date-fns';

const BookModal = ({treatment,date,setTreatment}) => {
    console.log("from treatment",treatment);
    const {name,slots} = treatment;
    const handleForm = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setTreatment(null);

    }
    return (
        <div>
         <input type="checkbox" id="booking-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 class="font-bold text-lg text-secondary">booking name:{name}</h3>
               <form onSubmit={handleForm} className='grid grid-cols-1 gap-1 justify-items-center mt-2'>
               <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
               <select class="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot=><option value={slot}>{slot}</option>)
                }
                </select>
               <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
               <input type="email" name ='email'placeholder="Email" class="input input-bordered w-full max-w-xs" />
               
               <input type="text" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
               <input type="submit" value="Submit" class="btn btn-primary input-bordered w-full max-w-xs" />
               </form>
            </div>
        </div>
            
        </div>
    );
};

export default BookModal;