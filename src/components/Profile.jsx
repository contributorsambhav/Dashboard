import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaHome, FaSave } from "react-icons/fa";

const Profile = () => {
  // State to manage profile form data
  const [profileData, setProfileData] = useState({
    name: "Sambhav",
    email: "sambhav511974@gmail.com",
    phone: "7876754050",
    address: "Ward no. 2 MC Ghumarwin near police station",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle saving the profile data, like sending it to an API
    console.log("Profile updated:", profileData);
    alert("Profile information saved!");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white w-full md:w-[50%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="text-gray-400 mb-6">
        Here you can view and edit your profile information.
      </p>

      {/* Profile Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="flex items-center">
          <FaUser className="text-gray-400 mr-2" />
          <label htmlFor="name" className="block text-gray-300 mb-1">
            Name:
          </label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email Field */}
        <div className="flex items-center">
          <FaEnvelope className="text-gray-400 mr-2" />
          <label htmlFor="email" className="block text-gray-300 mb-1">
            Email:
          </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Field */}
        
       

        {/* Phone Number Field */}
        <div className="flex items-center">
          <FaPhone className="text-gray-400 mr-2" />
          <label htmlFor="phone" className="block text-gray-300 mb-1">
            Phone Number:
          </label>
        </div>
        <input
          type="text"
          id="phone"
          name="phone"
          value={profileData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Address Field */}
        <div className="flex items-center">
          <FaHome className="text-gray-400 mr-2" />
          <label htmlFor="address" className="block text-gray-300 mb-1">
            Address:
          </label>
        </div>
        <input
          type="text"
          id="address"
          name="address"
          value={profileData.address}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Save Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <FaSave className="mr-2" /> Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
