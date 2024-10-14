import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing hamburger and close icons

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className="justify-between w-full h-[8vh] bg-neutral-900 text-white p-4 flex items-center">
      <h1 className="text-2xl font-bold">Open-Dashboard</h1>

      {/* Hamburger icon for mobile view */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <nav className={`absolute md:static top-[8vh] left-0 bg-neutral-900 md:flex md:items-center transition-all duration-300 ease-in-out ${isOpen ? 'block w-[80vw] mx-4' : 'hidden w-fit'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li className="mb-2 md:mb-0">
            <Link to="/dashboard" className="text-neutral-300 hover:bg-neutral-800 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/login" className="text-neutral-300 hover:bg-neutral-800 p-2 rounded">
              Login
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/signup" className="text-neutral-300 hover:bg-neutral-800 p-2 rounded">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
