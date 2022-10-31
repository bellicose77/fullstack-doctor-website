import React from 'react';

const Review = ({review}) => {
    const {name,location,desc,img}=review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                 <p>{desc}</p>
              <div class="flex items-center">
                  <div class="avatar">
                     <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                         <img src={img}/>
                     </div>
                  </div>
                <div>
                    <h3>{name}</h3>
                    <h4>{location}</h4>
                </div>
              </div>
        </div>
     </div>
    );
};

export default Review;