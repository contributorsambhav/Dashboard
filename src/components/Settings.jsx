import React, { useState } from "react";
import { FaBell, FaLock, FaRegMoon, FaSun, FaMoneyBillWave, FaGlobe } from "react-icons/fa";

const Settings = () => {
  // State for managing settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [goalAmount, setGoalAmount] = useState("10000");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  // Handlers
  const handleNotificationToggle = () => setNotificationsEnabled(!notificationsEnabled);
  const handleTwoFactorToggle = () => setTwoFactorAuth(!twoFactorAuth);
  const handleThemeToggle = () => setDarkMode(!darkMode);
  const handleGoalChange = (e) => setGoalAmount(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white w-full md:w-[50%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="text-gray-400 mb-6">Manage your account settings here.</p>

      {/* Notifications Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <FaBell className="text-gray-400" />
        </div>
        <p className="text-gray-400 mb-2">Receive notifications for market updates and portfolio performance.</p>
        <div className="flex items-center">
          <label className="mr-3">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationToggle}
            className="toggle-checkbox"
          />
        </div>
      </div>

      {/* Security Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Security</h3>
          <FaLock className="text-gray-400" />
        </div>
        <p className="text-gray-400 mb-2">Enhance account security with two-factor authentication (2FA).</p>
        <div className="flex items-center">
          <label className="mr-3">Enable 2FA</label>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={handleTwoFactorToggle}
            className="toggle-checkbox"
          />
        </div>
      </div>

      

     

      {/* Language & Currency Preferences */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Preferences</h3>
          <FaGlobe className="text-gray-400" />
        </div>

        {/* Language Selection */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-300 mb-2">Language</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Hindi">Hindi</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Currency Selection */}
        <div className="mb-4">
          <label htmlFor="currency" className="block text-gray-300 mb-2">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="INR">INR - Indian Rupee</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
