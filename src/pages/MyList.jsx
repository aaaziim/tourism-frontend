import React, { useContext } from 'react';
import SpotCrad from '../components/SpotCrad';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyList = () => {
    const {user} = useContext(AuthContext)
    
    const spots = useLoaderData() 

    const mySpots = spots.filter(spot=> spot.user_email == user.email)

    console.log(mySpots)
    return (
        <div>
              <div class="text-center my-10">
            <h1 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white "> My Favorite Spots</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 px-4">
            {
                    mySpots.map(spot => <SpotCrad key={spot._id} spot={spot}></SpotCrad>)
                }
            </div>
        </div>
    );
};

export default MyList;