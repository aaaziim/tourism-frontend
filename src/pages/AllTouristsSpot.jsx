import React, { useState } from 'react';
import SpotCrad from '../components/SpotCrad';
import { useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {
    const [spots, setSpots] = useState([])
    
        fetch("https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/allspot")
        .then(res => res.json())
        .then(data => setSpots(data))
    return (
        <div>
            <div class="text-center my-10">
            <h1 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white "> Tourists Spots</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Explore whatever you desire
            </p>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 px-4">
                {
                    spots.map(spot => <SpotCrad key={spot._id} spot={spot}></SpotCrad>)
                }
            
            </div>
        </div>
    );
};

export default AllTouristsSpot;