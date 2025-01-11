import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {

      const {user,loading, logoutUser} = useContext(AuthContext)
      const navigate = useNavigate();
      // console.log(user.photoURL)
      if (loading) {
        return <div>Loading...</div>; // Show a loading screen while checking authentication status
      }

      const handleLogout = () =>{

        logoutUser()
        .then(() => {
          toast.success("Sign-outsuccessful."); 
          navigate('/')

        }).catch((error) => {
           toast.error("An error happened: " + error.message);
        });
      }
      
  
    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allspot">AllTourists Spot</NavLink></li>
            <li><NavLink to="/addspot"> AddTourists Spot</NavLink></li> 
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className=" text-3xl font-bold font-mono">Tourism</Link>
      </div>
      <div className="navbar-end">
      

      <ul className="flex gap-4 mr-2">
        <li><ThemeToggle /></li>
        { !user &&  <> <li><NavLink to="/login"> Log In</NavLink></li>
            <li><NavLink to="/register"> Register</NavLink></li>
             </> }
           
           
          </ul>
        <ToastContainer />

      {user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/mylist">MyList</Link></li>
        <li><p onClick={handleLogout}>Logout</p></li>
      </ul>
    </div>}
      </div>
    </div>
    );
};

export default Navbar;