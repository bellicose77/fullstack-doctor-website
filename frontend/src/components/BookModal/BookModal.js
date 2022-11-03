import React from 'react';

const BookModal = ({treatment}) => {
    const {name} = treatment;
    return (
        <div>
         <input type="checkbox" id="booking-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 class="font-bold text-lg text-secondary">booking name:{name}</h3>
               <form>
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
               </form>
               <div class="modal-action">
               
               </div>
            </div>
        </div>
            
        </div>
    );
};

export default BookModal;