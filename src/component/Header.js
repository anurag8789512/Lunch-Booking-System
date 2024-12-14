import React from "react";
import MSG_LOGO from "../Assets/msg logo.png";

const Header = () => {
  return (
    <header className="bg-white text-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <div className="flex items-center">
          <img
            src={MSG_LOGO}
            alt="MSG Logo"
            className="h-10 w-10 mr-3 object-contain"
          />
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-red-600">
          Lunch Booking System
        </h1>
      </div>
    </header>
  );
};

export default Header;
