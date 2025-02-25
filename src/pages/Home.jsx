import React, { useState } from 'react';
import Banner from '../components/Banner';
import SpotCrad from '../components/SpotCrad';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const [spots, setSpots] = useState([])

    fetch("https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/allspot")
    .then(res => res.json())
    .then(data => setSpots(data))
    return (
        <div>
           <Banner></Banner>
           <div class="text-center my-10">
            <h1 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white "> Tourists Spots</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 px-4">
            {
                    spots.map(spot => <SpotCrad key={spot._id} spot={spot}></SpotCrad>)
                }
            </div>
            <div class="text-center my-10">
            <h1 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white "> Countries to Explore</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
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

export default Home;