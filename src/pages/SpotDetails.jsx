import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const SpotDetails = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate(); 

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



    const handleDelte =(id)=>{
 // SweetAlert2 confirmation dialog
 Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Call the delete API
      fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // Success notification
            Swal.fire(
              'Deleted!',
              'The spot has been deleted.',
              'success'
            );
            navigate('/allspot')
          } else {
            // Failure notification
            Swal.fire(
              'Error!',
              'The spot could not be deleted.',
              'error'
            );
          }
        })
        .catch((error) => {
          // Error notification
          Swal.fire(
            'Error!',
            'An error occurred while deleting the spot.',
            'error'
          );
          console.error(error);
        });
    }
  });
    }







    return (
        <div>
           <div class="max-w-5xl mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        
        <div class="bg-cover bg-center h-64 lg:h-auto lg:w-full" 
              style={{ backgroundImage: `url(${imageURL})` }}>
        </div>
 
        <div class="p-6 lg:p-10">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                <span id="tourist-spot-name">{tourists_spot_name}</span>
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Country: </strong> <span id="country-name">{country_name}</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> <span id="location">{location}</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Seasonality:</strong> <span id="seasonality">{seasonality}</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Travel Time:</strong> <span id="travel-time">{travel_time} days</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Average Cost:</strong> <span id="average-cost">${average_cost}</span>
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Visitors per Year:</strong> <span id="total-visitors">{totaVisitorsPerYear} Approx</span>
            </p>

            <div class="mt-4">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Short Description</h2>
                <p id="short-description" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                   {short_description}
                </p>
            </div>

            <div class="mt-6">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Added By</h2>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Name:</strong> <span id="user-name">{user_name}</span>
                </p>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> <span id="user-email">{user_email}</span>
                </p>
            </div>

            <div class="mt-8">

            {user && (user_email === user.email) && (
  <>
    <Link to={`/updatespot/${_id}`}>
      <button className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Edit Details
      </button>
    </Link>

    <button onClick={()=>handleDelte(_id)} className="ml-4 px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
      Delete Spot
    </button>
  </>
)}


             
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default SpotDetails;