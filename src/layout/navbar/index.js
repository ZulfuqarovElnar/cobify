import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-10 p-4 shadow-md">
      <div className='flex items-center gap-10'>
        <div className="flex items-center">
          <img className="w-40 h-12 object-cover rounded-md" src="assets/images/Cobify 3.jpg" alt="Logo" />
        </div>
        <div className="flex space-x-10">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? 'text-black text-lg font-semibold border-b-2 border-purple-500 transition duration-300 ease-in-out'
                : 'text-gray-500 text-lg'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-black text-lg font-semibold border-b-2 border-purple-500 transition duration-300 ease-in-out'
                : 'text-gray-500 text-lg'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-black text-lg font-semibold border-b-2 border-purple-500 transition duration-300 ease-in-out'
                : 'text-gray-500 text-lg'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
     
      <div className="flex items-center space-x-4">
        <div className=" flex text-lg justify-center items-center rounded-full hover:bg-gray-100 w-8 h-8 text-gray-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
            <FontAwesomeIcon icon={faGlobe} />
        </div>
        <img
          className="w-8 h-8 rounded-full object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          src="assets/images/profile.webp"
          alt="User Avatar"
        />
      </div>
    </nav>
  );
}
