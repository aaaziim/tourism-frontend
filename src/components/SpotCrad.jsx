import React from 'react';
import { Link } from 'react-router-dom';

const SpotCrad = ({spot}) => {

    const {tourists_spot_name,short_description,imageURL } = spot;
    
    return (
        <>
            

            <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src={imageURL} alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                       {tourists_spot_name}
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                       {short_description}
                    </p>

                   <Link to={`/spot/${spot._id}`}><button class="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5 my-3"> 
                     <span>View Details</span>
                  </button>
                  </Link>
                </div>
            </div>

           
        </>
 
  
    );
};

export default SpotCrad;