import React from 'react';
import { Link } from 'react-router-dom';

const SpotDetails = () => {
    return (
        <div>
           <div class="max-w-5xl mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        
        <div class="bg-cover bg-center h-64 lg:h-auto lg:w-full" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
        </div>
 
        <div class="p-6 lg:p-10">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                <span id="tourist-spot-name">Eiffel Tower</span>
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Country:</strong> <span id="country-name">France</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> <span id="location">Paris</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Seasonality:</strong> <span id="seasonality">Summer</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Travel Time:</strong> <span id="travel-time">7 days</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Average Cost:</strong> <span id="average-cost">$1000</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Visitors per Year:</strong> <span id="total-visitors">10,000</span>
            </p>

            <div class="mt-4">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Short Description</h2>
                <p id="short-description" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    The Eiffel Tower is one of the most iconic landmarks in the world, located in the heart of Paris.
                </p>
            </div>

            <div class="mt-6">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Added By</h2>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Name:</strong> <span id="user-name">John Doe</span>
                </p>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> <span id="user-email">johndoe@example.com</span>
                </p>
            </div>

            <div class="mt-8">
                <Link to="/updatespot">  <button class="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Edit Details
                </button></Link>
              
                <button class="ml-4 px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                    Delete Spot
                </button>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default SpotDetails;