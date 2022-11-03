import React from 'react';
import { format } from 'date-fns';

const BookModal = ({treatment,date}) => {
    const {name} = treatment;
    return (
        <div>
         <input type="checkbox" id="booking-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 class="font-bold text-lg text-secondary">booking name:{name}</h3>
               <form className='grid grid-cols-1 gap-1 justify-center mt-2'>
               <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Your name" class="input input-bordered w-full max-w-xs" />
               <input type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />
               
               <input type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
               <input type="submit" value="Submit" class="btn btn-primary input-bordered w-full max-w-xs" />
               </form>
            </div>
        </div>
            
        </div>
    );
};

export default BookModal;