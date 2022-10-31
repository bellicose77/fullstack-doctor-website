import React from 'react';

const Review = ({review}) => {
    const {name,location,desc,img}=review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                 <p>{desc}</p>
              <div class="card-actions justify-end">
                
             </div>
        </div>
     </div>
    );
};

export default Review;