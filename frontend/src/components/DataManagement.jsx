import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faFileDownload, faUser } from '@fortawesome/free-solid-svg-icons';

function DataManagement() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [unitName, setUnitName] = useState('');
  const [unitId, setUnitId] = useState('');
  const [district, setDistrict] = useState('');
  const [designation, setDesignation] = useState('');
  const [firId, setFIRId] = useState('');
  const [firStage, setFIRStage] = useState('Pending');
  const [showFIRDropdown, setShowFIRDropdown] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogout = () => {
    // Perform logout actions here
    // For example, clearing local storage, etc.
    // Redirect to home page
    window.location.href = '/'; // Redirect to the home page
};
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUnitNameChange = (e) => {
    setUnitName(e.target.value);
  };

  const handleUnitIdChange = (e) => {
    setUnitId(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleFIRIdChange = (e) => {
    setFIRId(e.target.value);
  };

  const handleFIRStageChange = (e) => {
    setFIRStage(e.target.value);
  };

  const handleFIRDropdownToggle = () => {
    setShowFIRDropdown(!showFIRDropdown);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Send user profile data to backend for update
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Unit Name:', unitName);
    console.log('Unit ID:', unitId);
    console.log('District:', district);
    console.log('Designation:', designation);
  };

  const handleFIRSubmit = (e) => {
    e.preventDefault();
    // Send FIR stage and FIR ID to backend for update
    console.log('FIR ID:', firId);
    console.log('FIR Stage:', firStage);
  };

  return (
    <>
    <div className='w-full p-5  bg-red-950 text-center text-orange-200 font-bold text-3xl'>
      <h1>Data and Resource Management</h1>
    </div>
    <div className="flex h-screen">
      {/* User Profile Management */}
      <div className="flex-1 bg-orange-100 p-8">
        <h2 className=" mb-2 text-red-950 font-bold text-xl">User Profile Management</h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {/* Add input fields for unit name, unit id, district, and designation */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="unitName">
              Unit Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="unitName"
              type="text"
              value={unitName}
              onChange={handleUnitNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="unitId">
              Unit ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="unitId"
              type="text"
              value={unitId}
              onChange={handleUnitIdChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="district">
              District
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="district"
              type="text"
              value={district}
              onChange={handleDistrictChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="designation">
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="designation"
              type="text"
              value={designation}
              onChange={handleDesignationChange}
            />
          </div>
          {/* Add the rest of the user profile input fields */}
          <div className="flex items-center justify-between">
            <button
              className="bg-red-950 hover:bg-red-900 text-orange-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-xl shadow-red-900"
              type="submit"
            >
              Update Profile
            </button>
            <button
                            onClick={handleLogout}
                            className="text-red-950 px-4 py-2 rounded mb-2 hover:text-red-800"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                            Logout
                        </button>
          </div>
        </form>
      </div>
      {/* FIR Management */}
      <div className="flex-1 bg-orange-100 p-8">
        <h2 className=" text-red-950 font-bold text-xl mb-2">FIR Management</h2>
        <div className="relative mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="firStage">
            FIR Stage
          </label>
          <div className="relative">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firStage"
              value={firStage}
              onChange={handleFIRStageChange}
              onClick={handleFIRDropdownToggle}
            >
              <option value="Pending">Pending</option>
              <option value="Convicted">Convicted</option>
              <option value="Investigation">Investigation</option>
              <option value="Undetected">Undetected</option>
            </select>
            <svg
              className={`absolute right-0 top-0 m-4 pointer-events-none transition-transform duration-300 transform ${
                showFIRDropdown ? 'rotate-180' : ''
              }`}
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <form onSubmit={handleFIRSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="firId">
              FIR ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firId"
              type="text"
              value={firId}
              onChange={handleFIRIdChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-950 hover:bg-red-900 text-orange-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-xl shadow-red-900"
              type="submit"
            >
              Update FIR
            </button>
            <button
                            onClick={handleLogout}
                            className="text-red-950 px-4 py-2 rounded mb-2 hover:text-red-800"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                            Logout
                        </button>
          </div>
        </form>
      </div>
     
    </div>
    </>
  );
}

export default DataManagement;
