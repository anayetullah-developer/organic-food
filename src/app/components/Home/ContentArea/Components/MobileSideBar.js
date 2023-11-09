"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you have react-icons installed

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="">
        <button onClick={toggleSidebar} className="text-xl text-gray-500 focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-white">
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center justify-center h-screen">
            {/* Your sidebar content goes here */}
            <ul className="text-white">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
