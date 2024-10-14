import React, { useState, useEffect } from "react";
import UserDashboard from "./UserDashboard"; // Import the UserDashboard component
import Profile from "./Profile"; // Import the Profile component
import Settings from "./Settings"; // Import the Settings component
import { FaTachometerAlt, FaUser, FaCog, FaSignOutAlt, FaDollarSign, FaPlusCircle, FaMoneyBillWave, FaBan } from "react-icons/fa"; // Import icons
import { MdAttachMoney } from "react-icons/md"; // Import a USD icon

function Dashboard() {
  // State to track the current component
  const [currentComponent, setCurrentComponent] = useState("UserDashboard");
  
  // State to manage the visibility of the dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Timeout ID for auto closing the dropdown
  let timeoutId;

  // Function to render the selected component
  const renderComponent = () => {
    switch (currentComponent) {
      case "UserDashboard":
        return <UserDashboard />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return <UserDashboard />;
    }
  };

  // Toggle dropdown visibility on click
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Effect to handle auto close of dropdown
  useEffect(() => {
    if (dropdownVisible) {
      // Set a timeout to close the dropdown after 3 seconds
      timeoutId = setTimeout(() => {
        setDropdownVisible(false);
      }, 3000);
    }

    // Cleanup function to clear timeout
    return () => clearTimeout(timeoutId);
  }, [dropdownVisible]);

  return (
    <div className="w-full min-h-[92vh] flex bg-gray-900">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white md:p-4 md:w-64 w-20 flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-bold mb-4 hidden md:block">Navigation</h2>
        <nav className="w-full">
          <ul className="w-full">
            {/* Dashboard Button */}
            <li className="mb-4 w-full">
              <button
                onClick={() => setCurrentComponent("UserDashboard")}
                className="w-full text-gray-300 hover:bg-gray-700 p-2 rounded flex items-center justify-center md:justify-start"
              >
                <FaTachometerAlt className="text-xl text-blue-500" />
                <span className="ml-2 hidden md:block">Dashboard</span>
              </button>
            </li>

            {/* Profile Button */}
            <li className="mb-4 w-full">
              <button
                onClick={() => setCurrentComponent("Profile")}
                className="w-full text-gray-300 hover:bg-gray-700 p-2 rounded flex items-center justify-center md:justify-start"
              >
                <FaUser className="text-xl text-green-500" />
                <span className="ml-2 hidden md:block">Profile</span>
              </button>
            </li>

            {/* Settings Button */}
            <li className="mb-4 w-full">
              <button
                onClick={() => setCurrentComponent("Settings")}
                className="w-full text-gray-300 hover:bg-gray-700 p-2 rounded flex items-center justify-center md:justify-start"
              >
                <FaCog className="text-xl text-yellow-500" />
                <span className="ml-2 hidden md:block">Settings</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4">
        <div className="bg-gray-800 md:p-4 p-1 rounded shadow-md">
          {/* Header Section */}
          <header className="flex justify-between items-center  m-4">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            <div
              className="flex items-center relative"
              onMouseEnter={() => setDropdownVisible(true)} // Show on hover
              onMouseLeave={() => setDropdownVisible(false)} // Hide on leave
            >
              {/* User Profile Icon */}
              <button className="text-gray-400 hover:text-white" onClick={toggleDropdown}>
                <FaUser className="text-2xl" />
              </button>
              <span className="ml-2 text-gray-300">Sambhav</span>

              {/* Dropdown Menu */}
              {dropdownVisible && (
                <div className="absolute right-0 mt-8 bg-gray-800 rounded shadow-lg w-48 z-50">
                  <ul className="py-2">
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Logout clicked'); toggleDropdown(); }}>
                      <FaSignOutAlt className="mr-2 text-red-600" />
                      <span className="text-gray-300">Logout</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Withdraw clicked'); toggleDropdown(); }}>
                      <FaDollarSign className="mr-2 text-green-600" />
                      <span className="text-gray-300">Withdraw</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Add Entry clicked'); toggleDropdown(); }}>
                      <FaPlusCircle className="mr-2 text-blue-600" />
                      <span className="text-gray-300">Add Entry</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Add Cash clicked'); toggleDropdown(); }}>
                      <FaMoneyBillWave className="mr-2 text-green-500" />
                      <span className="text-gray-300">Add Cash</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Close Account clicked'); toggleDropdown(); }}>
                      <MdAttachMoney className="mr-1 text-green-500" />
                      <span className="mr-2 text-gray-300">Balance: </span>
                      <span className="font-bold text-gray-300">37000</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => { console.log('Close Account clicked'); toggleDropdown(); }}>
                      <FaBan className="mr-2 text-red-400" />
                      <span className="text-gray-300">Close Account</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>

          {/* Render the currently selected component */}
          {renderComponent()}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
