import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import Menu_Food from "../Assets/foods.jpg";
const getCurrentDay = () => {
  return format(new Date(), "EEEE");
};

const Home = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState({ lunchMenu: {}, snackMenu: {} });
  const currentDay = getCurrentDay();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("/menu.json");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenu();
  }, []);

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <div className="container mx-auto p-6 text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Welcome to the Lunch Booking System
      </h1>
      <p className="text-gray-700 mb-8">
        Book your lunch easily and enjoy our services.
      </p>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Today's Menu</h2>
          <img
            src={Menu_Food}
            alt="Lunch"
            className="h-40 w-full object-cover mb-4"
          />
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-red-600">Lunch</h3>
            <div className="flex flex-wrap justify-center">
              {menu.lunchMenu[currentDay]?.length ? (
                menu.lunchMenu[currentDay].map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-700 m-1 p-2 border border-gray-300 rounded"
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-gray-700">No lunch available today</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-red-600">Snack</h3>
            <div className="flex flex-wrap justify-center">
              {menu.snackMenu[currentDay]?.length ? (
                menu.snackMenu[currentDay].map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-700 m-1 p-2 border border-gray-300 rounded"
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-gray-700">No snacks available today</p>
              )}
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 rounded"
            onClick={handleOrderClick}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
