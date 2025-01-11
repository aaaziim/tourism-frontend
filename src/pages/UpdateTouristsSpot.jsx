import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../provider/AuthProvider';
const UpdateTouristsSpot = () => {

    const {user} = useContext(AuthContext)

     const spot = useLoaderData();
        const {
            _id,
            tourists_spot_name,
            imageURL,
            country_name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            totaVisitorsPerYear,
            user_email,
            user_name
        } = spot;

        if(user.email !== user_email){
            return <p className="text-3xl">Acess Denied</p>
        }

    const handleSpotUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
    
        const imageURL = form.imageURL.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
    

         fetch(`https://tourism-backend-ozjum39k1-aaaziims-projects.vercel.app/spot/${_id}`, {
                      method: "PUT",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({  imageURL,
                        tourists_spot_name,
                        country_name,
                        location,
                        short_description,
                        average_cost,
                        seasonality,
                        travel_time,
                        totaVisitorsPerYear,
                        user_email,
                        user_name }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.acknowledged) {
                            form.reset();
                          toast.success("Updated Successfully");
                        }  
                      });






    }










    return (
        <div>
           <div>
         <div class="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    

    <div class="w-full px-6 py-8 md:px-8 ">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>
        </div>

        <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Update a Tourist Spot
        </p>
        <ToastContainer></ToastContainer>
        <form onSubmit={handleSpotUpdate}>
     
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="imageURL">Image URL</label>
                <input defaultValue={imageURL} id="imageURL" name="imageURL" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="url" required />
            </div>
 
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="spotName">Tourist Spot Name</label>
                <input defaultValue={tourists_spot_name} id="spotName" name="tourists_spot_name" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" required />
            </div>
 
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="countryName">Country Name</label>
                <input defaultValue={country_name} id="countryName" name="country_name" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" required />
            </div>

            
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="location">Location</label>
                <input defaultValue={location} id="location" name="location" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" required />
            </div>
 
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="description">Short Description</label>
                <textarea defaultValue={short_description} id="description" name="short_description" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" rows="3" required></textarea>
            </div>

        
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="averageCost">Average Cost</label>
                <input defaultValue={average_cost} id="averageCost" name="average_cost" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="number" step="0.01" required />
            </div>

           
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="seasonality">Seasonality</label>
                <select defaultValue={seasonality} id="seasonality" name="seasonality" class="block w-full px-4 py-2 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" required>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="all-year">All Year</option>
                </select>
            </div>
 
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="travelTime">Travel Time</label>
                <input defaultValue={travel_time} id="travelTime" name="travel_time" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="e.g., 7 days" required />
            </div>
 
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="visitors">Total Visitors Per Year</label>
                <input defaultValue={totaVisitorsPerYear} id="visitors" name="totaVisitorsPerYear" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="number" required />
            </div>

      
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="userEmail">User Email</label>
                <input defaultValue={user_email} id="userEmail" name="user_email" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" required />
            </div>

           
            <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="userName">User Name</label>
                <input defaultValue={user_name} id="userName" name="user_name" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" required />
            </div>

         
            <div class="mt-6">
                <button type="submit" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Update Tourist Spot
                </button>
            </div>
        </form>
    </div>
</div>
   
        </div>  
        </div>
    );
};

export default UpdateTouristsSpot;